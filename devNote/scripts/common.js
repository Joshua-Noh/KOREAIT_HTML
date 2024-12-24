// Common JavaScript Functions

// Load data from localStorage or use default data
function loadData(key, defaultData) {
    const data = JSON.parse(localStorage.getItem(key)) || defaultData;
    localStorage.setItem(key, JSON.stringify(data));
    return data;
}

// Save data to localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Count items by category
function countCategories(posts) {
    return posts.reduce((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {});
}

// Render category list
function renderCategoryList(categoryCounts, categoryListElement) {
    categoryListElement.innerHTML = ""; // 초기화
    for (const [category, count] of Object.entries(categoryCounts)) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `<a href="devArchive.html?category=${encodeURIComponent(category)}" aria-label="${category} 카테고리">${category} (${count})</a>`;
        categoryListElement.appendChild(li);
    }
}

// Initialize captcha (if needed in other pages)
function initializeCaptcha(captchaCodeElement) {
    const generateCaptcha = () => {
        const code = Math.random().toString(36).substr(2, 6).toUpperCase();
        captchaCodeElement.textContent = code;
        return code;
    };
    return generateCaptcha();
}
