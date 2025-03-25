import '../assets/sass/UpdataContent.scss'
import { Link } from "react-router-dom"


export default function UpdateContent() {

    const updateLogs = [
        {
            date: "01.08",
            title: "Youtube影片上架",
            description: "影片版更新內容",
            link: "/UpdateContent",
        },
        {
            date: "01.08",
            title: "1月第二週更新細節",
            description: "更新細節說明",
            link: "/UpdateContent",
        },
        {
            date: "01.01",
            title: "1月第二週CM情報",
            description: "情報圖片更新",
            link: "/UpdateContent",
        },
        {
            date: "01.08",
            title: "Youtube影片上架",
            description: "影片版更新內容",
            link: "/UpdateContent",
        },
        {
            date: "01.02",
            title: "本週更新細節",
            description: "更新細節說明",
            link: "/UpdateContent",
        },
        {
            date: "01.02",
            title: "本週更新細節",
            description: "更新細節說明",
            link: "/UpdateContent",
        },
    ];

    return (

        <>
            <div className="update-log">
                <div className="log-header">
                    <h1>更新日誌</h1>
                    <Link to='' className="view-all">
                        全部 &#8250;
                    </Link>
                </div>
                <div className="log-content">
                    {updateLogs.map((log, index) => (
                        <div className="log-item" key={index}>
                            <Link to={log.link}>
                                <div className="log-date">{log.date}</div>
                                <div className="log-details">
                                    <h2>{log.title}</h2>
                                    <p>{log.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}