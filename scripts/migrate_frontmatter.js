import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src', 'content', 'articles');

function migrateFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(fileContent);
  const data = parsed.data;

  // Migration Logic
  const newData = {};

  // 1. Title & Description (Keep)
  newData.title = data.title;
  newData.description = data.description || '';

  // 2. Dates
  newData.published_at = data.pubDate;
  if (data.updatedDate) {
    newData.updated_at = data.updatedDate;
  }

  // 3. Tags (Category -> Tags)
  if (Array.isArray(data.category)) {
    newData.tags = data.category;
  } else if (typeof data.category === 'string') {
    newData.tags = [data.category];
  } else {
    newData.tags = [];
  }

  // 4. Author (Keep if exists)
  if (data.author) newData.author = data.author;
  if (data.originalAuthor) newData.original_author = data.originalAuthor;

  // 5. Images
  if (data.heroImage) {
    newData.cover_image = {
      src: data.heroImage.image,
      alt: data.heroImage.alt || data.title
    };
  }

  // Write back
  const newContent = matter.stringify(parsed.content, newData);

  // Folder Move Logic (Year/Filename)
  const date = new Date(newData.published_at);
  const year = date.getFullYear().toString();
  const filename = path.basename(filePath);

  const yearDir = path.join(contentDir, year);
  if (!fs.existsSync(yearDir)) {
    fs.mkdirSync(yearDir, { recursive: true });
  }

  const newPath = path.join(yearDir, filename);

  // If file is already in year folder, just overwrite. If not, write to new and delete old.
  const isInYearDir = path.dirname(filePath) === yearDir;

  if (isInYearDir) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated: ${filename}`);
  } else {
    fs.writeFileSync(newPath, newContent);
    fs.unlinkSync(filePath);
    console.log(`Moved & Updated: ${filename} -> ${year}/${filename}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Don't recurse if it's already a year folder (simple check: 4 digits)
      if (!/^\d{4}$/.test(file)) {
        processDirectory(fullPath);
      } else {
        // It's a year folder, we might need to update files INSIDE it if re-running
        const yearFiles = fs.readdirSync(fullPath);
        for (const yFile of yearFiles) {
          migrateFile(path.join(fullPath, yFile));
        }
      }
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      migrateFile(fullPath);
    }
  }
}

console.log('Starting Migration...');
processDirectory(contentDir);
console.log('Migration Complete.');
