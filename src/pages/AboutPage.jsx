import Topbar from "../components/Topbar";
import HotContent from "../components/HotContent";
import Footer from "../components/Footer";
import GotopButton from "../components/GotopButton";
import About from "../components/about";
import { Link } from "react-router-dom";
import '../assets/sass/Allpage.scss'



export default function AboutPage() {
    return (
        <>
            <div id="AP-Allpage">
                <div id="All-page-topbar">
                    <Topbar />
                </div>
                <Link to='/AboutPage'>
                            <div className="Top-title">
                                <img src="./images/gamenews-img-1.png" alt="" />
                                <p>關於網站</p>
                            </div>
                        </Link>
                <div id="All-page-mix">
                    <div className="All-page-left">
                        
                        <div className="GameAbout">
                            <About></About>

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