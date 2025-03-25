import { Link } from 'react-router-dom';
import '../assets/sass/HotNews.scss';

export default function HotNews() {
    // 使用陣列儲存資料
    const hotNewsItems = [
        { id: 1, text: "天堂W最初「唯一」等級變身說明", link: "/NewsContent", className: "HotNews-hotnote-1" },
        { id: 2, text: "轉職攻略-轉職前必看內容", link: "/StrategyContent", className: "HotNews-hotnote-2" },
        { id: 3, text: "天堂W事前維護公告", link: "/NewsContent", className: "HotNews-hotnote-3" },
        { id: 4, text: "戰士轉聖騎士攻略轉職全記錄", link: "/StrategyContent", className: "HotNews-hotnote-4" }
    ];

    return (
        <div className="HotNews-hotnote">
            {hotNewsItems.map((item) => (
                <Link key={item.id} to={item.link} className={item.className}>
                    <div>
                        <p>{item.text}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}