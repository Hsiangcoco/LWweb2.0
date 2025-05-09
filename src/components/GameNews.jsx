import { Link } from 'react-router-dom';
import '../assets/sass/GameNews.scss';
import { useState } from 'react';

export default function GameNews() {
    // 最新資料
    const [newsList, setNewsList] = useState([
        { title: "[說明] 1/8(三) 「白金通行證(21日)」商品說明(骷髏世界除外)(更新)", link: "/NewsContent", date: "天堂W攻略聖所 ｜ 2025/01/07" },
        { title: "[說明] 1/8(三) 「黑色通行證(21日)」商品說明(骷髏世界除外)(更新)", link: "/NewsContent", date: "天堂W攻略聖所 ｜ 2025/01/07" },
        { title: "[說明] 1/8(三) 「白金通行證(21日)」商品說明(骷髏世界除外)(更新)", link: "/NewsContent", date: "天堂W攻略聖所 ｜ 2025/01/07" },
        { title: "[說明] 1/8(三) 「甘特閃耀箱」商品說明(骷髏世界專用)", link: "/NewsContent", date: "天堂W攻略聖所 ｜ 天堂W攻略聖所 ｜ 2025/01/07" },
        { title: "[說明] 1/8(三) 「靈魂石破片補給箱」商品說明(骷髏世界專用)", link: "/NewsContent", date: "天堂W攻略聖所 ｜ 2025/01/07" },
        { title: "[說明] 1/8(三) 每日商品說明(3種)(骷髏世界專用)", link: "/NewsContent", date: "天堂W攻略聖所 ｜ 2025/01/07" },
        { title: "[說明] 1/8(三) 「每日簽到：每日萬能藥」商品說明(骷髏世界專用)", link: "/NewsContent", date: "天堂W攻略聖所 ｜ 2025/01/07" },
        { title: "[說明] 1/8(三) 骷髏世界專用商品說明", link: "/NewsContent", date: "天堂W攻略聖所 ｜ 2025/01/07" },
    ]);

    // 舊資料
    const [oldNews, setOldNews] = useState([

        { title: "[說明] 1/8(三) 「甘特補給品箱」商品說明(金幣&愛爾芬世界專用)", link: "/NewsContent", date: "2025/01/07" },
    ]);

    // 點擊載入更多的處理函數
    const loadMore = () => {
        if (oldNews.length > 0) {
            // 從舊資料中移除前幾筆，並加入到 newsList
            const newItems = oldNews.slice(0, 3); // 每次加載3筆
            setNewsList((prevNews) => [...prevNews, ...newItems]);
            setOldNews((prevOldNews) => prevOldNews.slice(3)); // 刪除已經加載的資料
        }
    };

    return (
        <>
            {/* <div class="announcement-list">
                <div class="announcement-item">
                    <div class="icon-area">
                        <img src="./images/gamenews-content-img-1.png" alt="scroll icon" />
                    </div>
                    <div class="content-area">
                        <div class="title">【說明】1/8(三)「白金通行證」商品說明</div>
                        <div class="meta">天堂W攻略聖所 ｜ 2025/01/07</div>
                    </div>
                </div>

                <div class="announcement-item">
                    <div class="icon-area">
                        <img src="./images/gamenews-content-img-1.png" alt="scroll icon" />
                    </div>
                    <div class="content-area">
                        <div class="title">【說明】1/8(三)「黑色通行證」商品說明</div>
                        <div class="meta">天堂W攻略聖所 ｜ 2025/01/07</div>
                    </div>
                </div>

                <div class="announcement-item">
                    <div class="icon-area">
                        <img src="./images/gamenews-content-img-1.png" alt="scroll icon" />
                    </div>
                    <div class="content-area">
                        <div class="title">【說明】1/8(三)「靈魂石補給箱」商品說明</div>
                        <div class="meta">天堂W攻略聖所 ｜ 2025/01/07</div>
                    </div>
                </div>
            </div> */}

            <div className="announcement-list">
                {newsList.map((item, index) => (
                    <Link to={item.link}>

                        <div className="announcement-item" key={index}>
                            <div class="icon-area">
                                <img src="./images/gamenews-content-img-1.png" alt="scroll icon" />
                            </div>
                            <div className="content-area">
                                <div class="title">{item.title}</div>
                                <div class="meta">{item.date} </div>
                            </div>
                        </div>
                    </Link>

                ))}
                {oldNews.length > 0 ? (
                    <button className="load-more-btn" onClick={loadMore}>
                        查看更多
                    </button>
                ) : (
                    <p className="no-more-data">沒有更多資料了</p>
                )}
            </div>
        </>
    );
}