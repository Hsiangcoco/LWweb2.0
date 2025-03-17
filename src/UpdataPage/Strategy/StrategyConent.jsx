import { useEffect } from 'react';
import '../../assets/sass/StrategyContent.scss'
import $ from 'jquery'
import { Link as ScrollLink } from "react-scroll";


export default function StrategyContent() {

    useEffect(() => {
        const handleClick = function () {
            $(this).toggleClass("active");
        };

        $(".floating-nav").on("click", handleClick);

        return () => {
            $(".floating-nav").off("click", handleClick); // 清除绑定的事件
        };
    }, []);


    return (
        <>
            <div className="SC-content-bg">
                <header className="guide-header">
                    <h1 className="guide-title">[攻略] 戰士轉聖騎士攻略！技能選擇建議&神聖增幅補量數據解析</h1>
                    <time className="guide-date">發布時間:2024/12/01</time>
                </header>


                <div className="guide-content">
                    <div className="content-main">

                        <div className="guide-image">
                            <iframe className="youtubevideo"
                                src="https://www.youtube.com/embed/S0UyFJQum0A?si=iKQPB5ACPKd1bMw9"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>


                        <div id="content-text">
                            <p className="greeting">#原始機體位置</p>
                            <p className="sub-text">天堂W新增商品內容如下</p>
                            <p className="sub-text">詳細內容請參考以下說明</p>


                            <section id="product-info">
                                <h2>#轉職技能選擇 <br />▶每月簽到鑄幣(21日) 商品說明◀</h2>
                                <ul className="info-list">
                                    <li>■ 銷售期間: 2024年12月01日(日) 05點(UTC+9) ~ 2024年12月08日(日) 05點(UTC+9)</li>
                                    <li>■ 無法購買世界: 骷髏世界</li>
                                </ul>
                                <p className="note">※ 因各商店販售價格可能有所差異，請前往遊戲內購買畫面確認價格</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                            </section>


                            <section id="reward-info">
                                <h3> #轉職後機體 <br />[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                            </section>

                            <section id="reward-info">
                                <h3> #轉職前後差異 <br />[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                                <h3>[每月簽到鑄幣(21日)(刻印)]</h3>
                                <p>- 使用「每月簽到鑄幣(21日)(刻印)」可購買「每日簽到：每日鑽石」</p>

                                <h3>[簽到商品內容物]</h3>
                                <ul className="content-list">
                                    <li>- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中</li>
                                    <li>- 各商品每天可領取1次，共可領取14次的獎勵，獎勵倒數時間於每日05點(UTC+9)初始化</li>
                                    <li>- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)</li>
                                    <li>- 若領取天數優惠獎勵時已超過道具刪除日期，將無法獲得天數優惠道具</li>
                                </ul>
                            </section>
                        </div>


                        <div className="SC-related-articles">
                            <h3>相關攻略</h3>
                            <ul>
                                <li><a href="#">轉職攻略-轉職前必看</a></li>
                                <li><a href="#">轉職攻略-轉職前必看</a></li>
                                <li><a href="#">轉職攻略-轉職前必看</a></li>
                            </ul>
                        </div>
                    </div>


                    <aside className="guide-nav">
                        <div className="sticky">
                            <div className="nav-header">點擊下方連結快速導航</div>
                            <ul className="nav-list">
                                <li>
                                    <ScrollLink
                                        to="content-text"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        原始機體
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="product-info"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        轉職技能選擇
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="reward-info"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        轉職後機體
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="reward-info"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        轉職前後差異
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="reward-info"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        整體心得
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <aside className="floating-nav">
                        <button className="nav-toggle" aria-label="展開導航">
                            <span className="toggle-icon"></span>
                            <span className="toggle-text">導航選單</span>
                        </button>
                        <div className="nav-content">
                            <div className="nav-header">點擊下方連結快速導航</div>
                            <ul className="nav-list">
                                <li>
                                    <ScrollLink
                                        to="content-text"
                                        smooth={true}
                                        duration={500}
                                        offset={-50} // 可調整滾動位置的偏移量
                                        className="nav-link"
                                    >
                                        原始機體
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="product-info"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        轉職技能選擇
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="reward-info"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        轉職後機體
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="reward-info"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        轉職前後差異
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="reward-info"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        整體心得
                                    </ScrollLink>
                                </li>
                                <li className="nav-header-Top">
                                    <ScrollLink
                                        to="LT-Topbar-page"
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className="nav-link"
                                    >
                                        回到最上面
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>

            </div>

        </>
    )
}