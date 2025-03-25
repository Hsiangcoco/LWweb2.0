import '../assets/sass/about.scss'

export default function About() {
    return (
        <>
            <div className="about-content-bg">
                <div className="streamer-profile">
                    <header className="profile-header">
                        <div className="profile-info">
                            <img src="./images/person_icon.png" alt="祥可可遊戲頻道" className="profile-avatar"/>
                                <div className="profile-details">
                                    <h1 className="profile-name">祥可可遊戲頻道 GamesShow</h1>
                                    <p className="profile-stats">@HsiangCo6666 · 記得按讚訂閱分享～</p>
                                </div>
                                <button className="follow-button"><a href="https://www.youtube.com/@HsiangCo6666">訂閱</a></button>
                        </div>
                    </header>
                    <main className="profile-content">
                        <article className="about-section">
                            <p className="intro-text">
                                我是一名熱愛遊戲的創作者，曾經懷抱成為電競職業選手的夢想，雖然沒成功，但這段經歷讓我更加堅定地追求我對遊戲的熱情。既然你能看到這裡，表示我們在這個熱愛遊戲的世界相遇了，真是太棒了！
                            </p>

                            <div className="game-interests">
                                <p>平常我沉迷於各式各樣的遊戲，像是《APEX》、《LOL英雄聯盟》、《天堂W》、《暗黑破壞神4》以及各種 Steam
                                    平台上的熱門單機遊戲。無論是快節奏的競技遊戲還是單人冒險，我都全情投入，並且樂於跟大家分享我的心得與發現。</p>
                            </div>

                            <div className="channel-focus">
                                <p>現在我專注於《天堂W》，但我也計劃未來探索更多不同類型的遊戲，和大家一起發現更多樂趣！🎮</p>
                            </div>


                            <div className="channel-highlights">
                                <h2>目前頻道的三大主軸：</h2>
                                <ul className="highlights-list">
                                    <li>每週二、四，帶給你最精彩的遊戲直播！</li>
                                    <li>不定時發布有趣的遊戲精華，隨時隨地笑翻你！</li>
                                    <li>直播後，會帶來最真實、深入的遊戲評測，助你更好地了解遊戲。</li>
                                </ul>
                            </div>


                            <div className="contact-info">
                                <p>合作配合歡迎來信: hsiang840606@gmail.com</p>
                            </div>
                        </article>


                        <footer className="social-links">
                            <p className="social-text">期待與你一起在遊戲中相遇、共同冒險！👋</p>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/hsiangcoco/" target="_blank" className="social-icon instagram">
                                    <img src="./images/icon_ig.png" alt="Instagram" />
                                </a>
                                <a href="https://www.facebook.com/Hsiangcoco8746" target="_blank" className="social-icon facebook">
                                    <img src="./images/icon_fb.png" alt="Facebook" />
                                </a>
                            </div>
                        </footer>
                    </main>
                </div>

            </div>
        </>
    )
}