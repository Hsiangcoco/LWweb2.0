import React, { useState, useEffect } from "react";
import "../assets/sass/BannerSlider.scss";
import { Link } from "react-router-dom";

export default function BannerSlider() {
    const [currentIndex, setCurrentIndex] = useState(0); // 當前橫幅索引
    const banners = [
        { id: "banner1", img: "./images/navbar-img-1.jpg", link: "/NewsContent" },
        { id: "banner2", img: "./images/navbar-img-2.jpg", link: "/NewsContent" },
        { id: "banner3", img: "./images/navbar-img-3.jpg", link: "/NewsContent" },
    ];

    // 自動切換功能
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000); // 每 5 秒切換一次

        return () => clearInterval(timer); // 清除計時器
    }, [banners.length]);

    // 切換橫幅
    const handleSwitch = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="LT-bg-navbar-1">
            <div className="LT-bg-alltop">
                <div className="LT-bk-all">
                    <div className="text-1">
                        <section id="banner">
                            <div className="content-slider">
                                {/* 橫幅顯示 */}
                                <div className="slider">
                                    {banners.map((banner, index) => (
                                        <div
                                            key={banner.id}
                                            id={banner.id}
                                            className={`banner ${index === currentIndex ? "active" : ""}`}
                                            style={{
                                                opacity: index === currentIndex ? 1 : 0,
                                                zIndex: index === currentIndex ? 1 : 0,
                                                transition: "opacity 0.5s ease-in-out",
                                            }}
                                        >
                                            <Link to={banner.link}>
                                                <img src={banner.img} alt={`Slide ${index + 1}`} />
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                {/* 控制按鈕 */}
                                <nav>
                                    <div className="controls">
                                        {banners.map((_, index) => (
                                            <label
                                                key={index}
                                                className={`progressbar ${index === currentIndex ? "active" : ""}`}
                                                onClick={() => handleSwitch(index)}
                                            >
                                                <span className={`progressbar-fill ${index === currentIndex ? "active" : ""}`}>
                                                    <span className="progressbar-filltop"></span>
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>


    );
}
