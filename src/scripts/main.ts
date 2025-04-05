function initializeSession() {
    const currentPath = location.pathname;

    if (sessionStorage.getItem("initialSessionPage") === null) {
        console.log("Setting initial session page:", currentPath);
        sessionStorage.setItem("initialSessionPage", currentPath);
        sessionStorage.setItem("navigationHistory", JSON.stringify([currentPath]));
    } else {
        // 確保 navigationHistory 被正確初始化（以防萬一）
        if (sessionStorage.getItem('navigationHistory') === null) {
            sessionStorage.setItem('navigationHistory', JSON.stringify([currentPath]));
        } else {
            // 將當前頁面添加到歷史記錄（如果它與最後一個不同）
            // 這部分邏輯移到 Header.astro 中處理，以確保每次頁面加載都更新
        }
    }

    console.log("Initial Session Page:", sessionStorage.getItem("initialSessionPage"));
    console.log("Navigation History (main):", sessionStorage.getItem("navigationHistory"));
    console.log("main.ts execution completed");
}

initializeSession();

export function updateNavigationHistory() {
    const currentPath = location.pathname;
    let historyArray: string[] = [];

    try {
        historyArray = JSON.parse(
            sessionStorage.getItem("navigationHistory") || "[]",
        );
    } catch (e) {
        console.error("Failed to parse navigationHistory:", e);
        historyArray = [currentPath]; // 如果解析失敗，重置歷史記錄
    }

    // 只有當前路徑與歷史記錄中的最後一個路徑不同時才添加
    // 這可以防止重新加載同一頁面時重複添加
    if (
        historyArray.length === 0 ||
        historyArray[historyArray.length - 1] !== currentPath
    ) {
        historyArray.push(currentPath);
        sessionStorage.setItem(
            "navigationHistory",
            JSON.stringify(historyArray),
        );
        console.log("Navigation History (header - updated):", historyArray);
    } else {
        console.log(
            "Navigation History (header - unchanged):",
            historyArray,
        );
    }
}

export function navigateBack(a: HTMLAnchorElement) {
    const currentPath = location.pathname;
    const parentPath =
        currentPath.substring(0, currentPath.lastIndexOf("/")) || "/";

    a.addEventListener("click", (event) => {
        const currentPathOnClick = location.pathname; // 重新獲取以防萬一
        let historyArrayOnClick: string[] = [];

        try {
            historyArrayOnClick = JSON.parse(
                sessionStorage.getItem("navigationHistory") || "[]",
            );
        } catch (e) {
            console.error("Failed to parse navigationHistory on click:", e);
            console.log("Parse error, set href to parent:", parentPath); // 解析錯誤，設置 href 為上層
            a.href = parentPath;
            return;
        }

        console.log("History on click:", historyArrayOnClick); // 點擊時的歷史記錄
        console.log("Current path on click:", currentPathOnClick); // 點擊時的當前路徑

        // 檢查是否應該執行 history.back()
        let shouldGoBack = false;

        if (historyArrayOnClick.length > 1) {
            const previousPath =
                historyArrayOnClick[historyArrayOnClick.length - 2];
            if (previousPath.length <= currentPathOnClick.length) {
                shouldGoBack = true;
            }
        }

        if (shouldGoBack) {
            // --- 情況一：執行 history.back() ---
            event.preventDefault();

            console.log("Case 1: Allowed to website go back, executing history.back()");

            // 在執行 history.back() 之前，從歷史記錄中移除當前頁面
            historyArrayOnClick.pop();
            sessionStorage.setItem(
                "navigationHistory",
                JSON.stringify(historyArrayOnClick),
            );
            console.log("Update history before going back:", historyArrayOnClick); // 返回前更新歷史記錄
            history.back();
        } else {
            // --- 情況二：導航到上層路徑 ---
            console.log(
                "Case 2: First visit, history error, or previous page is deeper, set href to parent:",
                // 情況二：首次訪問、歷史記錄異常或上一頁更深，設置 href 為上層
                parentPath,
            );
            a.href = parentPath;
        }
    });
}
