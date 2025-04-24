import { Link } from 'react-router-dom';
import '../assets/sass/GameUpdataCard.scss';
import { useState } from 'react';

export default function GameUpdataCard() {
    const newsCards = [
        {
            imgSrc: "./images/gameupdata-boximg-1.jpg",
            altText: "更新新聞",
            overlayTitle: "更新新聞",
            overlaySubtitle: "1月 第2週",
            title1: "[新聞] 1月 第2週更新新聞",
            title2: "新年快樂禮包更新",
            link: "/UpdateContent",
            authorImg: "./images/gameupdata-header-1.jpg",
            authorName: "死亡騎士",
            date: "2025-01-07",
        },
        {
            imgSrc: "./images/gameupdata-boximg-2.jpg",
            altText: "更新新聞",
            overlayTitle: "更新新聞",
            overlaySubtitle: "1月 第1週",
            title1: "[新聞] 1月 第1週更新新聞",
            title2: "聖誕年末更新",
            link: "/UpdateContent",
            authorImg: "./images/gameupdata-header-2.jpg",
            authorName: "木刻人偶",
            date: "2025-01-07",
        },
        {
            imgSrc: "./images/gameupdata-boximg-1.jpg",
            altText: "更新新聞",
            overlayTitle: "更新新聞",
            overlaySubtitle: "1月 第2週",
            title1: "[新聞] 1月 第2週更新新聞",
            title2: "新年快樂禮包更新",
            link: "/UpdateContent",
            authorImg: "./images/gameupdata-header-1.jpg",
            authorName: "死亡騎士",
            date: "2025-01-07",
        },
        {
            imgSrc: "./images/gameupdata-boximg-2.jpg",
            altText: "更新新聞",
            overlayTitle: "更新新聞",
            overlaySubtitle: "1月 第1週",
            title1: "[新聞] 1月 第1週更新新聞",
            title2: "聖誕年末更新",
            link: "/UpdateContent",
            authorImg: "./images/gameupdata-header-2.jpg",
            authorName: "木刻人偶",
            date: "2025-01-07",
        }, {
            imgSrc: "./images/gameupdata-boximg-1.jpg",
            altText: "更新新聞",
            overlayTitle: "更新新聞",
            overlaySubtitle: "1月 第2週",
            title1: "[新聞] 1月 第2週更新新聞",
            title2: "新年快樂禮包更新",
            link: "/UpdateContent",
            authorImg: "./images/gameupdata-header-1.jpg",
            authorName: "死亡騎士",
            date: "2025-01-07",
        },
        {
            imgSrc: "./images/gameupdata-boximg-2.jpg",
            altText: "更新新聞",
            overlayTitle: "更新新聞",
            overlaySubtitle: "1月 第1週",
            title1: "[新聞] 1月 第1週更新新聞",
            title2: "聖誕年末更新",
            link: "/UpdateContent",
            authorImg: "./images/gameupdata-header-2.jpg",
            authorName: "木刻人偶",
            date: "2025-01-07",
        },
        // Add more cards here as needed
    ];

    const [showCount, setShowCount] = useState(8);

    const handleToggleShowMore = () => {
        setShowCount(prev => (prev === 8 ? newsCards.length : 8));
    };
    return (
        <>
            <div className="GU-content-bg">
                {newsCards.slice(0, showCount).map((card, index) => (
                    <div className="GU-news-card modern" key={index}>
                        <div className="GU-card-image">
                            <Link to={card.link}>
                                <img src={card.imgSrc} alt={card.altText} />
                                <div className="image-overlay">
                                    <h2>{card.overlayTitle}</h2>
                                    <span>{card.overlaySubtitle}</span>
                                </div>
                            </Link>
                        </div>
                        <div className="GU-card-content">
                            <Link to={card.link}>
                                {card.title1}
                            </Link>
                            <Link to={card.link}>
                                {card.title2}
                            </Link>
                        </div>
                        <div className="GU-card-footer">
                            <div className="GU-author">
                                <img src={card.authorImg} alt={card.authorName} />
                                <span>{card.authorName}</span>
                            </div>
                            <time>{card.date}</time>
                        </div>
                    </div>
                ))}
            </div>
            <div className="GU-load-more">
                <button className='GU-load-more-1' onClick={handleToggleShowMore}>
                    {showCount === 8 ? '查看更多' : '收起'}
                </button>
            </div>
        </>
    );
}