import Navbar from "../navbar/navbar"
import "./header.css";
import girl from "../../assets/girl.png"
// .. is used to come back the folder
function Header(){
    return(
        <>
          <header className="container">
            <Navbar/>
            <div className="landing-page">
                <div className="left-box">
                    <div className="left-top-box">
                        <div className="left-top-box-content-1">
                            <div className="heading">
                               <h1 className="back">BACK</h1>
                               <h1 className="to">TO</h1>
                               <h1 className="school">school</h1>
                            </div>
                            <div className="shapes">
                                <div className="square"></div>
                                <div className="circle"></div>
                                <div className="acute"></div>
                                <div className="circle-1"></div>
                            </div>
                        </div>
                        <div className="left-top-box-content-2">
                            <div className="top-design">
                                <div className="oval-1"></div>
                                <div className="oval-2"></div>
                                <div className="oval-3"></div>
                            </div>
                            <h3 className="left-box-title">Let's have a <span className="yellow">great year!</span></h3>
                            <p className="left-box-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto ex enim voluptates necessitatibus dicta accusamus ull</p>
                        </div>
                    </div>
                    <div className="left-bottom">
                        <div className="left-bottom-box-1">
                            <div className="semi-circle-1"></div>
                            <div className="semi-circle-2"></div>
                            <div className="semi-circle-3"></div>
                        </div>
                        <div className="left-bottom-box-2">
                            <div className="bottom-left-design-1">
                                <div className="bottom-oval-1"></div>
                                <div className="bottom-oval-2"></div>
                                <div className="bottom-oval-3"></div>
                            </div>
                            <div className="bottom-left-design-2">
                                <div className="bottom-oval-4"></div>
                                <div className="bottom-oval-5"></div>
                                <div className="bottom-oval-6"></div>
                            </div>
                            <div className="btn">
                            <button className="start-now"><span className="yellow">Start</span> now!</button>
                            </div>                
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <img className="image-right" src={girl} alt="" />
                    <div className="right-box-design">
                        <div className="oval-right-1"></div>
                        <div className="oval-right-2"></div>
                        <div className="oval-right-3"></div>
                        <div className="ball-1"></div>
                        <div className="ball-2"></div>
                        <div className="oval-right-4"></div>
                        <div className="oval-right-5"></div>
                        

                    </div>
                </div>
            </div>

          </header>
         
        </>
    )
}

export default Header