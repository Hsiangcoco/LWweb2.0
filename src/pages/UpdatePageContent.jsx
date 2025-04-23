import Topbar from "../components/Topbar";
import HotContent from "../components/HotContent";
import HotNews from "../components/HotNews";
import Footer from "../components/Footer";
import '../assets/sass/Allpage.scss'
import UpdataCm from "../UpdataPage/Updata/UpdataCm";
import GotopButton from "../components/GotopButton";
import { Link } from "react-router-dom";



export default function UpdatePageContent() {



    return (
        <>
            <div id="UPC-Allpage">
                <div id="All-page-topbar">
                    <Topbar />
                </div>
                <Link to='/Update'>
                    <div className="Top-title">
                        <img src="./images/gamenews-img-1.png" alt="" />
                        <p>更新資訊</p>
                    </div>
                </Link>
                <div id="All-page-mix">
                    <div className="All-page-left">
                        <div className="GameUpdata">
                            <UpdataCm />
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