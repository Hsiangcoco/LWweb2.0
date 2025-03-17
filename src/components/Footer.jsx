import { Link } from 'react-router-dom'
import '../assets/sass/Footer.scss'

export default function Footer() {
    return (
        <>
            <div className="LT-footer ">
                <div className="LT-footer-bg-1">
                    <ul className="LT-footer-titletop">
                        <Link to='/News'>
                            <p>遊戲公告</p>
                        </Link>
                        <li className="LT-footer-content" >
                            <Link to='/NewsContent'>
                                更新公告

                            </Link>
                        </li>
                        <li className="LT-footer-content">
                            <Link to='/NewsContent'>
                                維修公告
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="LT-footer-bg-1">
                    <ul className="LT-footer-titletop">
                        <Link to='/Update'>
                            <p>更新資訊</p>
                        </Link>
                        <li className="LT-footer-content">
                            <Link to='/UpdateContent'>
                                CM情報
                            </Link>
                        </li>
                        <li className="LT-footer-content">
                            <Link to='/UpdateContent'>
                                更新分析
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="LT-footer-bg-1">
                    <ul className="LT-footer-titletop">
                        <Link to='/Strategy'>
                            <p>遊戲攻略</p>
                        </Link>
                        <li className="LT-footer-content">
                            <Link to='/StrategyContent'>
                                轉職專區
                            </Link>
                        </li>
                        <li className="LT-footer-content">
                            <Link to='/StrategyContent'>
                                遊戲小知識
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='Footertext'>
                    <p>此網站為熱心整理無任何商業用途</p>
                </div>
            </div>
        </>
    )
}