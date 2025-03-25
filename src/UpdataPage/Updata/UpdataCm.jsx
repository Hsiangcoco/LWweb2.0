import '../../assets/sass/UpdataCm.scss';

export default function UpdataCm() {
    // 圖片資料陣列
    const images = [
        { src: "./images/updada-cm-1-2.jpg", alt: "更新公告圖片1" },
    ];

    return (
        <div className="UpdataC-content-bg">
            {/* 動態渲染圖片 */} 
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
}