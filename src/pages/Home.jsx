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
                {/* <div className='Home-page-menu'>
                    <ul>
                        <li>
                            重點更新
                        </li>
                        <li>
                            本週更新
                        </li>
                        <li>
                            攻略影片
                        </li>
                        <li>
                            職業專區
                        </li>
                    </ul>
                </div> */}
                <aside class="sidebar">
                    <ul class="menu-list">
                        <li>重啟世界：妖魔</li>
                        <li>妖魔凱膺歸來</li>
                        <li class="active">妖精重啟</li>
                        <li>Studio W精華影片</li>
                        <li>NEXT UPDATE</li>
                    </ul>
                </aside>

                <div className='Home-page-1'>
                    {/* <div className='Topbar'>
                        <Topbar />
                    </div> */}
                    <header class="navbar">
                        <div class="navbar-left">
                            <img src="logo.svg" alt="Logo" class="logo" />
                            <span class="company-name">家島建設株式会社</span>
                        </div>

                        <nav class="navbar-menu">
                            <a href="#">私たちについて <span class="arrow">▼</span></a>
                            <a href="#">会社案内 <span class="arrow">▲</span></a>
                            <a href="#">事業内容 <span class="arrow">▼</span></a>
                            <a href="#">作業船紹介</a>
                            <a href="#">施工実績</a>
                            <a href="#">採用情報 <span class="arrow">▼</span></a>
                        </nav>

                        <div class="navbar-right">
                            <a href="#" class="contact-button">お問い合わせ</a>
                        </div>
                    </header>

                    <div className='Home-page-1-Banner'>
                        <BannerSlider />
                        <UpdateContent />
                    </div>
                </div>

                {/*  <div className='Home-page-2'>
                    <div className='Home-page-img'>
                        <img src="./images/gamenews-img-big.png" alt="" />
                    </div>
                    <div className='Home-page-textbox'>
                        <div className='Home-page-2-title'>
                            <h2>本週更新</h2>
                            <div>updata</div>
                        </div>
                        <div className='Home-page2-listbox'>
                            <ul className='Home-page-2-menu'>
                                <li className='Home-page-2-list'>
                                    <span>3/26</span>3月第四週更新影片</li>
                                <li className='Home-page-2-list'><span>3/25</span>3月第四週 CM情報</li>
                                <li className='Home-page-2-list'><span>3/19</span>3月第三週更新影片</li>
                                <li className='Home-page-2-list'><span>3/18</span>3月第三週 CM情報</li>
                            </ul>
                        </div>

                    </div>

                </div> */}
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


                {/* <div className='Home-page-3'>
                    <h2 className="guide-videos-title">攻略影片專區</h2>
                    <p className="guide-videos-description">以下為最新的攻略影片，幫助您輕鬆提升遊戲技巧！</p>
                    <YoutubeScroll />
                </div> */}

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