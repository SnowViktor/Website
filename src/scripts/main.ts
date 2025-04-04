const currentPath = location.pathname;

if (sessionStorage.getItem('initialSessionPage') === null) {
    console.log('設定初始會話頁面:', currentPath);
    sessionStorage.setItem('initialSessionPage', currentPath);
    sessionStorage.setItem('navigationHistory', JSON.stringify([currentPath]));
} else {
    // 確保 navigationHistory 被正確初始化（以防萬一）
    if (sessionStorage.getItem('navigationHistory') === null) {
        sessionStorage.setItem('navigationHistory', JSON.stringify([currentPath]));
    } else {
        // 將當前頁面添加到歷史記錄（如果它與最後一個不同）
        // 這部分邏輯移到 Header.astro 中處理，以確保每次頁面加載都更新
    }
}

console.log('Initial Session Page:', sessionStorage.getItem('initialSessionPage'));
console.log('Navigation History (main):', sessionStorage.getItem('navigationHistory'));
console.log('main.ts 執行完畢');
