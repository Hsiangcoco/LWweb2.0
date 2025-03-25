import '../../assets/sass/NewsContent.scss';

export default function NewsContent() {
    // 資料陣列
    const newsContent = {
        title: "[說明] 12/1(日)「每月簽到鑄幣(21日)」商品說明(骷髏世界除外)",
        date: "發布時間:2024/12/01",
        imageSrc: "./images/gamenote-img-1.png",
        intro: {
            greeting: "大家好，我們是天堂W",
            description: "天堂W新增商品內容如下",
            detailNote: "詳細內容請參考以下說明",
        },
        salesInfo: {
            title: "▶每月簽到鑄幣(21日) 商品說明◀",
            items: [
                "■ 銷售期間: 2024年12月01日(日) 05點(UTC+9) ~ 2024年12月08日(日) 05點(UTC+9)",
                "■ 無法購買世界: 骷髏世界",
            ],
            note: "※ 因各商店販售價格可能有所差異，請前往遊戲內購買畫面確認價格",
        },
        itemsInfo: {
            title: "[獲到商品內容物]",
            items: [
                "- 每天可領取1次，點擊【收下獎勵】按鍵時，可領取每日優惠和天數別優惠獎勵至角色情包中",
                "- 各商品每天可領取1次，共可領取14天的獎勵。獎勵倒數時間於每日05點(UTC+9)初始化",
                "- 各商品每日優惠及天數別優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)",
                "- 若領取天數獎退場時已超過道具刪除日期，將無法獲得天數獎惠道具",
            ],
        },
        noticeInfo: {
            title: "[注意事項]",
            items: [
                "(1)「每月簽到鑄幣(21日)」後續可能以相同或是類似商品再次銷售",
                "(2)「每日簽到：每日鑽石」每日優惠及天數優惠獎勵，可領取至2024年12月29日(日) 05點(UTC+9)為止，逾期將無法再領取獎勵",
                "(3)「滑朵拉最上級變身卡片1次、滴朵拉最上級魔法娃娃抽卡11次」內容物獲得機率，可於道具提示說明的內容物資訊中，點擊[%]按鍵進行確認",
            ],
        },
        relatedArticles: [
            "轉職攻略-轉職前必看",
            "轉職攻略-轉職前必看",
            "轉職攻略-轉職前必看",
        ],
    };

    return (
        <div className="NC-content-bg">
            {/* Header */}
            <header className="product-header">
                <h1 className="product-title">{newsContent.title}</h1>
                <time className="product-date">{newsContent.date}</time>
            </header>

            {/* Content */}
            <div className="product-content">
                <div className="product-image">
                    <img src={newsContent.imageSrc} alt="寶箱商品圖片" />
                </div>

                <div className="product-info">
                    {/* Intro Section */}
                    <h2 className="greeting">{newsContent.intro.greeting}</h2>
                    <p className="intro">{newsContent.intro.description}</p>
                    <p className="detail-note">{newsContent.intro.detailNote}</p>

                    {/* Sales Info */}
                    <div className="sales-info">
                        <h3>{newsContent.salesInfo.title}</h3>
                        <ul>
                            {newsContent.salesInfo.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="price-note">{newsContent.salesInfo.note}</p>
                    </div>

                    {/* Items Info */}
                    <div className="items-info">
                        <h3>{newsContent.itemsInfo.title}</h3>
                        <ul>
                            {newsContent.itemsInfo.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Notice Info */}
                    <div className="notice-info">
                        <h3>{newsContent.noticeInfo.title}</h3>
                        <ul>
                            {newsContent.noticeInfo.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Advertisement Section */}
            <div className="NC-ad-section">
                    <div className="google-ads">google ads 版位</div>
                </div>


                <div className="NC-related-articles">
                    <h3>相關攻略</h3>
                    <ul>
                        <li><a href="#">轉職攻略-轉職前必看</a></li>
                        <li><a href="#">轉職攻略-轉職前必看</a></li>
                        <li><a href="#">轉職攻略-轉職前必看</a></li>
                    </ul> 
                </div>
        </div>
    );
}