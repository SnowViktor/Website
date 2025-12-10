import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log('📝 Create a new article');

  const title = await ask('Title: ');
  if (!title) {
    console.error('Title is required');
    process.exit(1);
  }

  const slug = await ask('Slug (optional): ');
  const finalSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const date = new Date();
  const year = date.getFullYear().toString();
  const dateStr = date.toISOString().split('T')[0];

  const content = `---
title: "${title}"
description: "Enter description here..."
pubDate: ${dateStr}
category: ["Prose"]
heroImage: 
  image: 
  alt: 
---

Write your content here...
`;

  const dir = path.join(process.cwd(), 'src', 'content', 'articles', year);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, `${finalSlug}.md`);

  if (fs.existsSync(filePath)) {
    console.error(`❌ File already exists: ${filePath}`);
    process.exit(1);
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${filePath}`);

  rl.close();
}

main().catch(console.error);
