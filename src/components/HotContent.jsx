import { Link } from 'react-router-dom';
import '../assets/sass/HotContent.scss';

export default function HotContent() {
    const sections = [
        {
            header: "最新內容",
            items: [
                { text: "11/29(五) 已知問題公告", link: "/NewsContent" },
                { text: "特別直播Director's Talk獎勵說明", link: "/NewsContent" },
                { text: "「藝術家的咒語卡片箱(刻印)」暫時無法使用說明", link: "/NewsContent" },
            ],
        },
        {
            header: "熱門攻略",
            items: [
                { text: "職業轉換-修羅轉戰士特輯", link: "/StrategyContent" },
                { text: "魔眼素質最新攻略", link: "/StrategyContent" },
                { text: "通行證2600元價值真的要買嗎？", link: "" },
            ],
        },
        {
            header: "熱門影片",
            items: [
                { text: "2025年初改版內容搶先看！", link: "https://www.youtube.com/@HsiangCo6666", external: true },
                { text: "本週更新黑五禮包推薦！", link: "https://www.youtube.com/@HsiangCo6666", external: true },
                { text: "頂級帳號上線！醜操作搞笑不斷", link: "https://www.youtube.com/@HsiangCo6666", external: true },
                { text: "再現1%奇蹟！黑五禮包全刷滿", link: "https://www.youtube.com/@HsiangCo6666", external: true },
                { text: "天堂W繪本美術設定集開箱！", link: "https://www.youtube.com/@HsiangCo6666", external: true },
                { text: "首次攻略梅塔特隆！新地圖BOSS", link: "https://www.youtube.com/@HsiangCo6666", external: true },
            ],
        },
    ];

    return (
        <>
            <div className="HotContent-page-right">
                {sections.map((section, index) => (
                    <div className="HotContent-top-1" key={index}>
                        <div className="header">{section.header}</div>
                        {section.items.map((item, idx) => (
                            <div className="item" key={idx}>
                                {item.external ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.text}
                                    </a>
                                ) : (
                                    <Link to={item.link} >
                                        {item.text}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                ))}

                <div className="HotContent-ad-placement">
                    <div className="ad-header">
                        <div className="ad-header-content">
                            <span className="ad-title">廣告專區</span>
                            <span className="ad-label">AD</span>
                        </div>
                    </div>
                    <div className="ad-content">
                        <div className="ad-placeholder">
                            <span className="ad-placeholder-text">廣告版位</span>
                            <span className="ad-size">300 x 250</span>
                        </div>
                    </div>
                    <div className="ad-footer">聯繫我們進行廣告投放</div>
                </div>
            </div>
        </>
    );
}