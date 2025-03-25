import { Link } from 'react-router-dom'
import '../assets/sass/Profession.scss'

export default function Porfession() {
    return (
        <>
            <div className="LT-class-ba-all">
                <div className="LT-class-bk-1">
                    <div className="classking class-1">

                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/king-img-1.png" alt="" />
                            <p className="Professiontext">王<br />族</p>

                        </Link>
                    </div>
                    <div className="classgoblin  class-1">
                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/goblin-img-1.png" alt="" />
                            <p className="Professiontext">妖<br />精</p>
                        </Link>
                    </div>
                    <div className="classmagicer  class-1">
                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/magicer-img-1.png" alt="" />

                            <p className="Professiontext">法<br />師</p>
                        </Link>
                    </div>
                    <div className="classknight  class-1">
                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/knight-img-1.png" alt="" />

                            <p className="Professiontext">騎<br />士</p>
                        </Link>
                    </div>
                    <div className="classlightknight  class-1">
                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/lightknight-img-1.png" alt="" />
                            <p className="Professiontext">聖<br />騎<br />士</p>
                        </Link>
                    </div>
                    <div className="classganhand  class-1">
                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/ganhand-img-1.png" alt="" />

                            <p className="Professiontext">槍<br />手</p>
                        </Link>
                    </div>
                    <div className="classwarryking  class-1">
                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/warryking-img-1.png" alt="" />

                            <p className="Professiontext">戰 <br />士</p>
                        </Link>
                    </div>
                    <div className="classmodoze  class-1">
                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/modoze-img-1.png" alt="" />

                            <p className="Professiontext">魔
                                <br />鬥
                                <br />士
                            </p>
                        </Link>
                    </div>
                    <div className="classshowlo  class-1">
                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/showlo-img-1.png" alt="" />

                            <p className="Professiontext">修<br />羅</p>
                        </Link>
                    </div>
                    <div className="classblackgoblin  class-1">
                        <Link to='StrategyContent'>
                            <img className="classimg" src="./images/blackgoblin-img-1.png" alt="" />

                            <p className="Professiontext">黑<br />妖</p>
                        </Link>
                    </div>
                </div>


            </div>
        </>
    )
}