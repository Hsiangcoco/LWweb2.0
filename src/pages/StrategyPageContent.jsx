import Topbar from "../components/Topbar";
import HotContent from "../components/HotContent";
import HotNews from "../components/HotNews";
import Footer from "../components/Footer";
import '../assets/sass/Allpage.scss'
import GotopButton from "../components/GotopButton";
import StrategyContent from "../UpdataPage/Strategy/StrategyConent";
import { Link } from "react-router-dom";


export default function StrategyPageContent() {
    return (
        <>
            <div id="SPC-Allpage">
                <div id="All-page-topbar">
                    <Topbar />
                </div>
                <Link to='/Strategy'>
                            <div className="Top-title">
                                <img src="./images/gamenews-img-1.png" alt="" />
                                <p>遊戲攻略</p>
                            </div>
                        </Link>
                <div id="All-page-mix">
                    <div className="All-page-left">
                        
                        <div className="GameStrategy">
                            <StrategyContent></StrategyContent>
                        </div>
                    </div>
                    <div className="All-page-right">
                        <HotContent />
                    </div>
                </div>
                <div className="All-page-Footer">
                    <Footer></Footer>
                </div>
                <div className="ButtonNone">
                    <GotopButton />

                </div>
            </div>
        </>
    )
}