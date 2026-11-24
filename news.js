// සෑම සතියකම පහත පේළියේ උඩු කොමා (" ") ඇතුළත ඇති නිවේදනය පමණක් වෙනස් කර Save කරන්න:
const WEEKLY_NEWS = "🔔 2027 නව වසර සඳහා 6 ශ්‍රේණිය දරුවන් නියත වශයෙන්ම හැදෑරිය යුතු GeoGebra පාඨමාලාවක්!  |  🌙 (වැඩි විස්තර සඳහා මෙතැන Click කරන්න.)";

// සියලුම පිටුවලට පොදු Newsline එක ස්වයංක්‍රීයව ඇතුළත් කිරීම
document.addEventListener("DOMContentLoaded", function () {
    // 1. Index පිටුවේ 'විශේෂ දැණුවත් කිරීම්' කාඩ්පත තුළට නිවේදනය යෙදීම
    const cardNewsBox = document.getElementById("card-weekly-news");
    if (cardNewsBox) {
        cardNewsBox.innerHTML = WEEKLY_NEWS;
    }

    // 2. සෑම පිටුවකම පහළින් පොදු Newsline තීරුව පෙන්වීම
    const style = document.createElement("style");
    style.innerHTML = `
        body { padding-bottom: 48px; }
        .global-news-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #fef3c7;
            border-top: 2px solid #f59e0b;
            display: flex;
            align-items: center;
            z-index: 9999;
            box-shadow: 0 -3px 12px rgba(0,0,0,0.15);
            font-family: 'Noto Sans Sinhala', sans-serif;
        }
        .global-news-label {
            background: #dc2626;
            color: #fff;
            font-weight: 700;
            font-size: 0.85rem;
            padding: 0.65rem 1rem;
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }
        .global-news-dot {
            width: 8px;
            height: 8px;
            background: #fde047;
            border-radius: 50%;
            animation: newsPulse 1.2s infinite;
        }
        @keyframes newsPulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
        .global-news-track {
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            padding: 0.55rem 0;
        }
        .global-news-content {
            display: inline-block;
            padding-left: 100%;
            animation: globalScroll 28s linear infinite;
        }
        .global-news-track:hover .global-news-content {
            animation-play-state: paused;
        }
        .global-news-content a {
            color: #7f1d1d;
            font-weight: 700;
            text-decoration: none;
            font-size: 0.92rem;
        }
        .global-news-content a:hover { text-decoration: underline; }
        @keyframes globalScroll { 0%{transform:translateX(0);} 100%{transform:translateX(-100%);} }
    `;
    document.head.appendChild(style);

    const newsBar = document.createElement("div");
    newsBar.className = "global-news-bar";
    newsBar.innerHTML = `
        <div class="global-news-label"><span class="global-news-dot"></span> මේ සතියේ නිවේදන</div>
        <div class="global-news-track">
            <div class="global-news-content">
                <a href="notices.html">${WEEKLY_NEWS}</a>
            </div>
        </div>
    `;
    document.body.appendChild(newsBar);
});
