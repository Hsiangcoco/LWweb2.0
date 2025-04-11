import '../assets/sass/Allpage.scss'
import '../assets/sass/Home.scss'
import Topbar from '../components/Topbar'
import BannerSlider from '../components/BannerSlider'
import UpdateContent from '../components/UpdateContent'
import NewsCard from '../components/NewsCard'
import YoutubeScroll from '../components/Youtubescroll'
import Porfession from '../components/Profession'
import Footer from '../components/Footer'
import GotopButton from "../components/GotopButton";


export default function Home() {
    return (
        <>
            <div id='Home-Allpage'>

                <div className='Home-page-1'>
                    <header class="navbar">
                        <div class="navbar-left">
                            <img src="logo.svg" alt="Logo" class="logo" />
                            <span class="company-name">天堂Ｗ攻略聖所</span>
                        </div>

                        <nav class="navbar-menu">
                            <a href="#">遊戲公告</a>
                            <a href="#">更新資訊</a>
                            <a href="#">遊戲攻略</a>
                            <a href="#">關於網站</a>
                        </nav>

                        <div class="navbar-right">
                            <a href="#" class="contact-button">我的頻道</a>
                        </div>
                    </header>

                    <div className='Home-page-1-Banner'>
                        <BannerSlider />
                        <UpdateContent />
                    </div>
                </div>
                <section class="business-section">
                    <div class="business-image">
                        <img src="./images/gamenews-img-big.png" alt="船舶圖片" />
                    </div>
                    <div class="business-content">
                        <h2 class="business-title">Updata</h2>
                        <p class="business-subtitle">每週更新</p>
                        <ul class="business-list">
                            <li><span>3/28</span> 3月第三週更新影片 <span class="arrow">→</span></li>
                            <li><span>3/28</span> 3月第四週 CM情報 <span class="arrow">→</span></li>
                            <li><span>3/28</span> 3月第三週更新影片 <span class="arrow">→</span></li>
                            <li><span>3/28</span> 3月第三週 CM情報 <span class="arrow">→</span></li>
                        </ul>
                    </div>
                </section>


                <section class="cases-section">
                    <h2 class="cases-title">Video</h2>
                    <p class="cases-subtitle">攻略影片</p>
                    <div class="cases-grid">

                        <div class="case-card">
                            <img src="../images/youtubevideoimg1.svg" alt="橋梁工程" class="case-image" />
                            <div class="case-info">
                                <p class="case-date">2024.12.16</p>
                                <p class="case-tags">聖騎士轉戰士</p>
                                <p class="case-desc">技能選擇建議、神聖增幅補量測試</p>
                            </div>
                        </div>


                        <div class="case-card">
                            <img src="../images/youtubevideoimg2.svg" alt="河川改修" class="case-image" />
                            <div class="case-info">
                                <p class="case-date">2024.03.31</p>
                                <p class="case-tags">修羅轉戰士</p>
                                <p class="case-desc">戰士真的值得轉過去嗎？</p>
                            </div>
                        </div>


                        <div class="case-card">
                            <img src="../images/youtubevideoimg3.svg" alt="港灣防波堤" class="case-image" />
                            <div class="case-info">
                                <p class="case-date">2023.09.29</p>
                                <p class="case-tags">陣營戰玩法</p>
                                <p class="case-desc">遊戲玩法全攻略、如何遊玩、如何進入</p>
                            </div>
                        </div>
                    </div>
                </section>


                <div className='Home-page-4'>
                    <h2 className="profession-title">職業專區</h2>
                    <Porfession />
                </div>
                <div className='All-page-Footer'>
                    <Footer />
                </div>
                <GotopButton />


            </div>
        </>

    )
}