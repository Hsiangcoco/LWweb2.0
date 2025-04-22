import Topbar from "../components/Topbar";
import HotContent from "../components/HotContent";
import HotNews from "../components/HotNews";
import GameNews from "../components/GameNews";
import Footer from "../components/Footer";
import '../assets/sass/Allpage.scss'
import GotopButton from "../components/GotopButton";
import { Link } from "react-router-dom";



export default function NewsPage() {
    return (
        <>
            <div id="NP-Allpage">
                <div id="All-page-topbar">
                    <Topbar />
                </div>
                <Link to='/News'>
                    <div className="Top-title">
                        <img src="./images/gamenews-img-1.png" alt="" />
                        <p>遊戲公告</p>
                    </div>
                </Link>
                <div id="All-page-mix">
                    <div className="All-page-left">


                        <div className="GameNews">
                            <GameNews></GameNews>
                        </div>
                        <div className="HotNews">
                            <HotNews />
                        </div>
                    </div>
                    <div className="All-page-right">
                        <HotContent />
                    </div>
                </div>
                <div className="All-page-Footer">
                    <Footer></Footer>
                </div>
                <GotopButton />

            </div>
        </>
    )
}