// Complete Navigation System for All Story Pages
// This file contains the navigation functionality that should be included in every story page

// Complete story list with proper paths and metadata
const allStories = [
    // 2025-01-08 - Fish Brain Factories
    {
        id: 'fish-brain-en',
        title: 'The Amazing Adventure of Tiny Fish Brain Factories',
        path: '2025-08-01/2025-01-08_the-amazing-adventure-of-tiny-fish-brain-factories.html',
        date: '2025-01-08',
        language: 'en',
        counterpart: '2025-08-01/2025-01-08_小鱼脑中微型工厂的奇妙历险_中文版.html'
    },
    {
        id: 'fish-brain-zh',
        title: '小鱼脑中微型工厂的奇妙历险',
        path: '2025-08-01/2025-01-08_小鱼脑中微型工厂的奇妙历险_中文版.html',
        date: '2025-01-08',
        language: 'zh',
        counterpart: '2025-08-01/2025-01-08_the-amazing-adventure-of-tiny-fish-brain-factories.html'
    },
    
    // 2025-09-07 - Rhino Detective Story
    {
        id: 'rhino-detective-en',
        title: 'The Great Rhino Detective Story',
        path: '2025-09-07_Zeyu/Dehorning-reduces-rhino-poaching_revised.html',
        date: '2025-09-07',
        language: 'en',
        counterpart: '2025-09-07_Zeyu/Dehorning-reduces-rhino-poaching_Chinese.html'
    },
    {
        id: 'rhino-detective-zh',
        title: '伟大的犀牛侦探故事',
        path: '2025-09-07_Zeyu/Dehorning-reduces-rhino-poaching_Chinese.html',
        date: '2025-09-07',
        language: 'zh',
        counterpart: '2025-09-07_Zeyu/Dehorning-reduces-rhino-poaching_revised.html'
    },
    
    // 2025-09-08 - Secret Cities
    {
        id: 'secret-cities-en',
        title: 'The Secret Cities at the Bottom of the World',
        path: '2025-09-07_Coco/new version/The Secret Cities at the Bottom of the World - English.html',
        date: '2025-09-08',
        language: 'en',
        counterpart: '2025-09-07_Coco/new version/世界底部的秘密城市 - Chinese.html'
    },
    {
        id: 'secret-cities-zh',
        title: '世界底部的秘密城市',
        path: '2025-09-07_Coco/new version/世界底部的秘密城市 - Chinese.html',
        date: '2025-09-08',
        language: 'zh',
        counterpart: '2025-09-07_Coco/new version/The Secret Cities at the Bottom of the World - English.html'
    },
    
    // 2025-09-08 - Seasonal Calendar
    {
        id: 'seasonal-calendar-en',
        title: 'The Amazing Discovery of Nature\'s Seasonal Calendar',
        path: '2025_09_08 CXY/The Amazing Discovery of Nature\'s Seasonal Calendar.html',
        date: '2025-09-08',
        language: 'en',
        counterpart: '2025_09_08 CXY/自然季节日历的惊人发现_中文版.html'
    },
    {
        id: 'seasonal-calendar-zh',
        title: '自然季节日历的惊人发现',
        path: '2025-09-08 CXY/自然季节日历的惊人发现_中文版.html',
        date: '2025-09-08',
        language: 'zh',
        counterpart: '2025_09_08 CXY/The Amazing Discovery of Nature\'s Seasonal Calendar.html'
    },
    
    // 2025-09-13 - Flying Troublemakers
    {
        id: 'flying-troublemakers-en',
        title: 'The Amazing Adventure of Tiny Flying Troublemakers',
        path: '13-9-2025-PHC/2025-09-13_the-amazing-adventure-of-tiny-flying-troublemakers.html',
        date: '2025-09-13',
        language: 'en',
        counterpart: '13-9-2025-PHC/2025-09-13_微小飞行捣蛋鬼的惊人冒险_中文版.html'
    },
    {
        id: 'flying-troublemakers-zh',
        title: '微小飞行捣蛋鬼的惊人冒险',
        path: '13-9-2025-PHC/2025-09-13_微小飞行捣蛋鬼的惊人冒险_中文版.html',
        date: '2025-09-13',
        language: 'zh',
        counterpart: '13-9-2025-PHC/2025-09-13_the-amazing-adventure-of-tiny-flying-troublemakers.html'
    },
    
    // 2025-09-14 - Science Detective Story
    {
        id: 'science-detective-en',
        title: 'The Super Science Detective Story',
        path: '2025_09_14_CJX/2025-09-14_the-super-science-detective-story.html',
        date: '2025-09-14',
        language: 'en',
        counterpart: '2025_09_14_CJX/2025-09-14_the-super-science-detective-story_中文版.html'
    },
    {
        id: 'science-detective-zh',
        title: '超级科学侦探故事',
        path: '2025_09_14_CJX/2025-09-14_the-super-science-detective-story_中文版.html',
        date: '2025-09-14',
        language: 'zh',
        counterpart: '2025_09_14_CJX/2025-09-14_the-super-science-detective-story.html'
    },
    
    // 2025-09-14 - Super Hot Days
    {
        id: 'hot-days-en',
        title: 'The Mystery of Super-Hot Days',
        path: '2025-09-14-Linda/2025-09-14_the-mystery-of-super-hot-days.html',
        date: '2025-09-14',
        language: 'en',
        counterpart: '2025-09-14-Linda/2025-09-14_超级炎热日之谜_中文版.html'
    },
    {
        id: 'hot-days-zh',
        title: '超级炎热日之谜',
        path: '2025-09-14-Linda/2025-09-14_超级炎热日之谜_中文版.html',
        date: '2025-09-14',
        language: 'zh',
        counterpart: '2025-09-14-Linda/2025-09-14_the-mystery-of-super-hot-days.html'
    }
];

// Navigation functionality
class StoryNavigation {
    constructor(currentStoryId, isChinesePage = false) {
        this.currentStoryId = currentStoryId;
        this.isChinesePage = isChinesePage;
        this.stories = allStories;
        this.currentIndex = this.stories.findIndex(story => story.id === currentStoryId);
    }

    // Initialize all navigation functionality
    initialize() {
        this.populateDropdown();
        this.setupPrevNextButtons();
        this.setupSearch();
        this.setupLanguageSwitch();
        this.setupHomeButton();
    }

    // Setup home button with correct language URL
    setupHomeButton() {
        const homeBtn = document.querySelector('.home-btn');
        if (homeBtn) {
            homeBtn.href = this.getHomeUrl();
        }
    }

    populateDropdown() {
        const dropdown = document.getElementById('story-dropdown');
        if (!dropdown) return;

        dropdown.innerHTML = '<option value="">Select a Story...</option>';
        
        // Filter stories by current page language
        const currentStory = allStories.find(story => story.id === this.currentStoryId);
        const currentLanguage = currentStory ? currentStory.language : 'en';
        
        // Get stories in the same language, sorted by date (newest first)
        const languageStories = allStories
            .filter(story => story.language === currentLanguage)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        
        languageStories.forEach(story => {
            const option = document.createElement('option');
            option.value = this.getRelativePath(story.path);
            option.textContent = story.title;
            if (story.id === this.currentStoryId) {
                option.selected = true;
            }
            dropdown.appendChild(option);
        });

        dropdown.addEventListener('change', function() {
            if (this.value) {
                window.location.href = this.value;
            }
        });
    }

    // Setup previous and next navigation buttons
    setupPrevNextButtons() {
        const prevBtn = document.getElementById('prev-story');
        const nextBtn = document.getElementById('next-story');

        // Get current story and its language
        const currentStory = this.stories.find(story => story.id === this.currentStoryId);
        if (!currentStory) return;

        // Filter stories by the same language and sort by date (newest first)
        const languageStories = this.stories
            .filter(story => story.language === currentStory.language)
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        // Find current story index in the filtered language-specific list
        const currentIndexInLanguage = languageStories.findIndex(story => story.id === this.currentStoryId);

        if (prevBtn) {
            if (currentIndexInLanguage > 0) {
                const prevStory = languageStories[currentIndexInLanguage - 1];
                prevBtn.onclick = () => window.location.href = this.getRelativePath(prevStory.path);
                prevBtn.disabled = false;
                prevBtn.title = `Previous: ${prevStory.title}`;
            } else {
                prevBtn.disabled = true;
                prevBtn.title = 'No previous story';
            }
        }

        if (nextBtn) {
            if (currentIndexInLanguage < languageStories.length - 1) {
                const nextStory = languageStories[currentIndexInLanguage + 1];
                nextBtn.onclick = () => window.location.href = this.getRelativePath(nextStory.path);
                nextBtn.disabled = false;
                nextBtn.title = `Next: ${nextStory.title}`;
            } else {
                nextBtn.disabled = true;
                nextBtn.title = 'No next story';
            }
        }
    }

    setupSearch() {
        const searchBox = document.getElementById('story-search');
        const dropdown = document.getElementById('story-dropdown');
        
        if (!searchBox) return;
        
        searchBox.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            // Get current language
            const currentStory = allStories.find(story => story.id === this.currentStoryId);
            const currentLanguage = currentStory ? currentStory.language : 'en';
            
            // Filter stories based on search term and language
            const filteredStories = allStories.filter(story => 
                story.language === currentLanguage && 
                story.title.toLowerCase().includes(searchTerm)
            );
            
            // Update dropdown with filtered results
            dropdown.innerHTML = '<option value="">Select a Story...</option>';
            filteredStories.forEach(story => {
                const option = document.createElement('option');
                option.value = this.getRelativePath(story.path);
                option.textContent = story.title;
                if (story.id === this.currentStoryId) {
                    option.selected = true;
                }
                dropdown.appendChild(option);
            });
            
            // Auto-select if only one result
            if (filteredStories.length === 1 && searchTerm.length > 2) {
                dropdown.selectedIndex = 1;
            }
            
            // Handle Enter key
            if (e.key === 'Enter' && dropdown.selectedIndex > 0) {
                window.location.href = dropdown.value;
            }
        });
        
        // Handle Enter key separately
        searchBox.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && dropdown.selectedIndex > 0) {
                window.location.href = dropdown.value;
            }
        });
    }

    // Setup language switch functionality
    setupLanguageSwitch() {
        const currentStory = allStories[this.currentIndex];
        if (!currentStory) return;

        const languageSwitch = document.querySelector('.language-switch');
        if (!languageSwitch) return;

        if (currentStory.language === 'en' && currentStory.counterpart) {
            languageSwitch.href = this.getRelativePath(currentStory.counterpart);
            languageSwitch.textContent = '中文版';
        } else if (currentStory.language === 'zh' && currentStory.counterpart) {
            languageSwitch.href = this.getRelativePath(currentStory.counterpart);
            languageSwitch.textContent = 'English';
        }
    }

    // Convert absolute paths to relative paths based on current location
    getRelativePath(filePath) {
        // If already relative, return as is
        if (filePath.startsWith('../')) {
            return filePath;
        }
        
        // Determine the depth of the current story
        const currentStory = allStories.find(story => story.id === this.currentStoryId);
        if (!currentStory) {
            return '../' + filePath;
        }
        
        // Count directory levels in current story path
        const currentDepth = (currentStory.path.match(/\//g) || []).length;
        
        // Add appropriate number of '../' based on depth
        const prefix = '../'.repeat(currentDepth);
        return prefix + filePath;
    }

    // Get home page URL based on language
    getHomeUrl() {
        const currentStory = allStories.find(story => story.id === this.currentStoryId);
        const isChinesePage = currentStory && currentStory.language === 'zh';
        
        // Use absolute GitHub Pages URLs
        return isChinesePage ? 
            'https://cstemlab.github.io/News_for_Chidren/index_zh.html' : 
            'https://cstemlab.github.io/News_for_Chidren/index.html';
    }

    // Add both init and initialize methods for compatibility
    init() {
        return this.initialize();
    }
}

// CSS for the navigation bar (to be included in each story page)
const navigationCSS = `
/* Sticky Navigation Bar Styles */
.story-nav {
    position: sticky;
    top: 0;
    background: linear-gradient(135deg, #8FBF9F 0%, #68a67d 100%);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
    padding: 0;
    margin: 0;
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    max-width: 1200px;
    margin: 0 auto;
    gap: 15px;
}

.nav-left, .nav-center, .nav-right {
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-left {
    flex: 0 0 auto;
}

.nav-center {
    flex: 1;
    justify-content: center;
    gap: 15px;
}

.nav-right {
    flex: 0 0 auto;
}

.nav-btn {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #333;
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 14px;
}

.nav-btn:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.nav-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

.story-dropdown {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 8px 16px;
    color: #333;
    font-size: 14px;
    min-width: 200px;
    cursor: pointer;
}

.story-search {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 8px 16px;
    color: #333;
    font-size: 14px;
    width: 150px;
}

.story-search::placeholder {
    color: #666;
}

.language-switch {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #333;
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 14px;
}

.language-switch:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 10px;
        padding: 0 15px;
    }
    
    .nav-left, .nav-center, .nav-right {
        width: 100%;
        justify-content: center;
    }
    
    .nav-center {
        order: 1;
    }
    
    .nav-left {
        order: 2;
    }
    
    .nav-right {
        order: 3;
    }
    
    .story-dropdown, .story-search {
        min-width: 120px;
        font-size: 12px;
    }
    
    .nav-btn {
        padding: 6px 12px;
        font-size: 12px;
    }
}

@media (max-width: 480px) {
    .nav-container {
        padding: 0 10px;
    }
    
    .nav-left, .nav-center, .nav-right {
        flex-wrap: wrap;
        gap: 5px;
    }
    
    .story-dropdown {
        min-width: 100px;
        max-width: 150px;
    }
    
    .story-search {
        min-width: 100px;
    }
}
`;

// HTML template for the navigation bar
const navigationHTML = `
<!-- Sticky Navigation Bar -->
<nav class="story-nav">
    <div class="nav-container">
        <div class="nav-left">
            <a href="#" class="nav-btn home-btn" id="home-btn">🏠 Home</a>
            <button id="prev-story" class="nav-btn">← Previous</button>
            <button id="next-story" class="nav-btn">Next →</button>
        </div>
        <div class="nav-center">
            <select id="story-dropdown" class="story-dropdown">
                <option value="">Select a Story...</option>
            </select>
        </div>
        <div class="nav-right">
            <input type="text" id="story-search" class="story-search" placeholder="Search stories...">
            <a href="#" class="nav-btn language-switch">中文版</a>
        </div>
    </div>
</nav>
`;

// Export for use in story pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StoryNavigation, navigationCSS, navigationHTML, allStories };
}