import '../assets/sass/Allpage.scss'
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
                    <div className='Topbar'>
                        <Topbar />
                    </div>
                    <div className='Home-page-1-Banner'>
                        <BannerSlider />
                        <UpdateContent />
                    </div>
                </div>

                <div className='Home-page-2'>
                    <h2 className="update-info-title">更新資訊專區</h2>
                    <p className="update-info-description">以下為最新的更新資訊，請點擊進入查看詳細內容！</p>
                    <NewsCard />
                </div>

                <div className='Home-page-3'>
                    <h2 className="guide-videos-title">攻略影片專區</h2>
                    <p className="guide-videos-description">以下為最新的攻略影片，幫助您輕鬆提升遊戲技巧！</p>
                    <YoutubeScroll />
                </div>

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