import { Link } from "react-router-dom"
import '../assets/sass/Topbar.scss'
import { useEffect, useState } from "react";
import $ from 'jquery'

export default function Topbar() {

    const AnnouncementScroll = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const announcements = [
            "Director’s Talk 直播 2024.11.29 19:00直播",
            "01/08 Youtube影片上架 一月第二週更新內容",
            "天堂W全新職業即將登場！",
            "02/15 新年活動公告：限時獎勵等你拿",
        ];

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
            }, 3000); // 每 3 秒切換一次

            return () => clearInterval(interval); // 清除 interval
        }, [announcements.length]);

        return (
            <div className="LT-announcement-scroll">
                <ul style={{ transform: `translateY(-${currentIndex * 25}px)` }}>
                    {announcements.map((announcement, index) => (
                        <li key={index} className={currentIndex === index ? "active" : ""}>
                            <Link to="/News">{announcement}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    useEffect(() => {
        const hamburger = $('.LT-hamburger');

        // 先移除舊的事件
        hamburger.off('click');

        // 再綁定新的事件
        hamburger.click(function () {
            $(this).toggleClass('is-active');
            $('.LT-navigation').toggleClass('show');
        });

        // 清除函式，當組件卸載時清除事件綁定
        return () => {
            hamburger.off('click');
        };
    }, []);

    return (
        <>
            <div className="LT-Topbar-page">
                <div id="LT-header">
                    <div className="LT-Topbar">
                        <Link to='/'>
                            <h1 className="LT-title">
                                <img className="logoimg" src="./images/logo.svg" alt="" />
                                天堂W攻略聖所
                            </h1>
                        </Link>
                        <div className='LT-Navbar'>
                            <Link to='/News'>
                                <p className="LT-navbartitle">遊戲公告</p>
                            </Link>
                            <Link to='/Update'>
                                <p className="LT-navbartitle">更新資訊</p>
                            </Link>
                            <Link to='/Strategy'>
                                <p className="LT-navbartitle">遊戲攻略</p>
                            </Link>
                            <Link to='/AboutPage'>
                                <p className="LT-navbartitle">關於網站</p>
                            </Link>
                        </div>

                        <div className="LT-announcement">
                            <div className="LT-announcement-1">
                                <p>最新公告</p>
                            </div>
                            <div>
                                <AnnouncementScroll></AnnouncementScroll>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="LT-navbar-humburger">
                    <button className="LT-hamburger">
                        <span className="LT-bar"></span>
                        <span className="LT-bar"></span>
                        <span className="LT-bar"></span>
                    </button>
                    <nav className="LT-navigation">
                        <ul className="LT-icon">
                            <li>
                                <Link to='https://www.facebook.com/Hsiangcoco8746' target="_blank">
                                    <img src="./images/facebook.png" alt="Facebook超連結" />
                                </Link>
                            </li>
                            <li>
                                <Link to='https://www.instagram.com/hsiangcoco/' target="_blank">
                                    <img src="./images/instagram.png" alt="IG超連結" />
                                </Link>
                            </li>
                            <li>
                                <Link to='https://www.youtube.com/@HsiangCo6666' target="_blank">
                                    <img src="./images/youtube.png" alt="Youtube超連結" />
                                </Link>
                            </li>
                        </ul>
                        <ul className="LT-menu">
                            <li>
                                <Link to="/News">遊戲公告</Link>
                            </li>
                            <li>
                                <Link to="/Update">更新資訊</Link>
                            </li>
                            <li>
                                <Link to="/Strategy">遊戲攻略</Link>
                            </li>
                            <li>
                                <Link to="/AboutPage">關於網站</Link>
                            </li>
                        </ul>
                    </nav>



                </div>
            </div >
        </>

    )

}