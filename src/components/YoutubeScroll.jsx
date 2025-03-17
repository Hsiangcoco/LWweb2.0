import { Link } from 'react-router-dom';
import '../assets/sass/YoutubeScroll.scss'
import { useEffect, useRef, useState } from 'react';

export default function YoutubeScroll() {
    const youtubeVideos = [
        { imgSrc: "./images/youtubevideoimg.svg", link: "https://www.youtube.com/@HsiangCo6666" },
        { imgSrc: "./images/youtubevideoimg1.svg", link: "https://www.youtube.com/@HsiangCo6666" },
        { imgSrc: "./images/youtubevideoimg2.svg", link: "https://www.youtube.com/@HsiangCo6666" },
        { imgSrc: "./images/youtubevideoimg3.svg", link: "https://www.youtube.com/@HsiangCo6666" },
        { imgSrc: "./images/youtubevideoimg4.svg", link: "https://www.youtube.com/@HsiangCo6666" },
        { imgSrc: "./images/youtubevideoimg.svg", link: "https://www.youtube.com/@HsiangCo6666" },
        { imgSrc: "./images/youtubevideoimg1.svg", link: "https://www.youtube.com/@HsiangCo6666" },
        { imgSrc: "./images/youtubevideoimg2.svg", link: "https://www.youtube.com/@HsiangCo6666" },
        { imgSrc: "./images/youtubevideoimg3.svg", link: "https://www.youtube.com/@HsiangCo6666" },
        { imgSrc: "./images/youtubevideoimg4.svg", link: "https://www.youtube.com/@HsiangCo6666" },
    ];

    const carouselRef = useRef(null); // 參考輪播容器
    const [visibleItems, setVisibleItems] = useState(4); // 可見的項目數（假設一次顯示 4 個）
    const [currentIndex, setCurrentIndex] = useState(0); // 當前滾動的索引

    // 自動輪播
    useEffect(() => {
        const interval = setInterval(() => {
            handleScrollRight();
        }, 3000); // 每 3 秒滾動一次

        return () => clearInterval(interval); // 清除計時器
    }, [currentIndex]);

    // 處理向右滾動
    const handleScrollRight = () => {
        const carousel = carouselRef.current;
        if (carousel) {
            const itemWidth = carousel.firstChild.offsetWidth + 10; // 獲取單個項目的寬度
            const maxScroll = (youtubeVideos.length - visibleItems) * itemWidth; // 最大可滾動的寬度

            if (currentIndex < youtubeVideos.length - visibleItems) {
                setCurrentIndex((prev) => prev + 1);
                carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
            } else {
                setCurrentIndex(0); // 從頭開始
                carousel.scrollTo({ left: 0, behavior: "smooth" });
            }
        }
    };

    // 處理向左滾動
    const handleScrollLeft = () => {
        const carousel = carouselRef.current;
        if (carousel) {
            const itemWidth = carousel.firstChild.offsetWidth + 10; // 獲取單個項目的寬度

            if (currentIndex > 0) {
                setCurrentIndex((prev) => prev - 1);
                carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
            }
        }
    };

    return (
        <>
            <div className="LT-guide-videos-section">
                <div className="LT-youtube-bk-all">
                    {/* 左箭頭 */}
                    <div className="youtubearrow youtube-arrow-left" onClick={handleScrollLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                        </svg>
                    </div>

                    {/* 影片輪播 */}
                    <div className="youtube-carousel" ref={carouselRef}>
                        {youtubeVideos.map((video, index) => (
                            <Link to={video.link} key={index} target="_blank" rel="noopener noreferrer">
                                <img src={video.imgSrc} alt={`YouTube Video ${index + 1}`} />
                            </Link>
                        ))}
                    </div>
                    {/* 右箭頭 */}
                    <div className="youtubearrow youtube-arrow-right" onClick={handleScrollRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}