import { Link } from 'react-router-dom';
import '../assets/sass/NewsCard.scss';

// 新聞資料
const newsData = [
    {
        imgSrc: "./images/gamenews-img-big.png",
        title: "天堂W第二個「唯一」等級變身說明",
        date: "2024.12.31",
        link: "/NewsContent",
    },
    {
        imgSrc: "./images/game-news-1.webp",
        title: "1/1(三) 「迎接2025組合包」商品說明(骷髏世界專用)",
        date: "2024.12.31",
        link: "/NewsContent",
    },
    {
        imgSrc: "./images/gamenote-img-2.png",
        title: "1/1(三)角色世界轉移/角色伺服器轉移說明",
        date: "2024.12.31",
        link: "/NewsContent",
    },
    {
        imgSrc: "./images/gamenote-img-2.png",
        title: "1/1(三) 「迎接2025椪糖組合」商品說明(骷髏世界除外)",
        date: "2024.12.31",
        link: "/NewsContent",
    },
    {
        imgSrc: "./images/gamenews-img-2.webp",
        title: "天堂W定期維護事前公告",
        date: "2024.12.30",
        link: "/NewsContent",
    },
    {
        imgSrc: "./images/gamenote-img-3.png",
        title: "1/1(三) 「黑色通行證(21日)」商品說明(骷髏世界除外)(更新)",
        date: "2024.12.31",
        link: "/NewsContent",
    },
    {
        imgSrc: "./images/gamenote-img-4.png",
        title: "全職業轉職更新公告細節說明",
        date: "2024.12.29",
        link: "/NewsContent",
    },
    {
        imgSrc: "./images/gamenews-img-3.png",
        title: "特別直播『Directior'sTalk』事情說明",
        date: "2024.12.08",
        link: "/NewsContent",
    },
];

export default function NewsCard() {
    return (
        <div className="LT-gamenews-bk-all">
            {newsData.map((news, index) => ( 
                <div className="LT-gamenews-bk-sm-1" key={index}>
                    <Link to={news.link} className="overlay-link">
                        <img src={news.imgSrc} alt={news.title} />
                        <p className="news-title">{news.title}</p>
                        <p className="news-date">{news.date}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}