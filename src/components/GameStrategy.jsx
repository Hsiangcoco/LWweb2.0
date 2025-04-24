import { Link } from 'react-router-dom';
import '../assets/sass/GameStrategy.scss';
import { useState } from 'react';

export default function GameStrategy() {
    const memoryCards = [
        {
            imgSrc: "./images/youtubevideoimg1.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "聖騎士轉職攻略",
            subtitle: "戰士轉職必看",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg2.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "修羅轉職攻略",
            subtitle: "修羅轉職必看",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg3.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "陣營站玩法攻略",
            subtitle: "要怎麼玩才能賺得多呢？",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg4.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "聖騎士轉職攻略",
            subtitle: "戰士轉職必看",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg2.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "修羅轉職攻略",
            subtitle: "修羅轉職必看",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg3.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "陣營站玩法攻略",
            subtitle: "要怎麼玩才能賺得多呢？",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg4.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "聖騎士轉職攻略",
            subtitle: "戰士轉職必看",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg2.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "修羅轉職攻略",
            subtitle: "修羅轉職必看",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg3.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "陣營站玩法攻略",
            subtitle: "要怎麼玩才能賺得多呢？",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg3.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "陣營站玩法攻略",
            subtitle: "要怎麼玩才能賺得多呢？",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg3.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "陣營站玩法攻略",
            subtitle: "要怎麼玩才能賺得多呢？",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg3.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "陣營站玩法攻略",
            subtitle: "要怎麼玩才能賺得多呢？",
            date: "2024-11-12",
        },
        {
            imgSrc: "./images/youtubevideoimg3.svg",
            altText: "Memory of Lineage",
            link: "/StrategyContent",
            title: "陣營站玩法攻略",
            subtitle: "要怎麼玩才能賺得多呢？",
            date: "2024-11-12",
        },
    ];


    const [showCount, setShowCount] = useState(8);

    const handleToggleShowMore = () => {
        setShowCount(prev => (prev === 8 ? memoryCards.length : 8));
    };

    return (
        <>
            <div className="GS-content-bg">
                {memoryCards.slice(0, showCount).map((card, index) => (
                    <div className="GS-memory-card modern" key={index}>
                        <Link to={card.link}>
                            <div className="GS-card-image">
                                <img src={card.imgSrc} alt={card.altText} />
                            </div>
                            <div className="GS-card-content">
                                <h2 className="GS-card-title">{card.title}</h2>
                                <p className="GS-card-subtitle">{card.subtitle}</p>
                                <time className="GS-card-date">{card.date}</time>
                            </div>
                        </Link>
                    </div>
                ))}
                {/* {memoryCards.length > 8 && (
                <div className="GS-load-more">
                    <button onClick={handleToggleShowMore}>
                        {showCount === 8 ? '查看更多' : '收起'}
                    </button>
                </div>
            )} */}

            </div>
            <div className="GS-load-more">
                <button className='GS-load-more-1' onClick={handleToggleShowMore}>
                    {showCount === 8 ? '查看更多' : '收起'}
                </button>
            </div>
        </>
    );
}