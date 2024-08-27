import "./navbar.css"
import { useState } from "react";
const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const exitOverlay = () => {
    setShowOverlay(false);
  };
  return (
    <>
     <nav className="navbar">
     <div className="logo">
                <h4 className="title">SpringDale public school</h4>
              </div>
              <ul className="nav-list">
                <li className="nav-list-item active">Home</li>
                <li className="nav-list-item">About us</li>
                <li className="nav-list-item">Academics</li>
                <li className="nav-list-item">Admissions</li>
              </ul>
              <div className="btn" onClick={toggleOverlay}>
                <ion-icon name="grid-outline"></ion-icon>
              </div>
              {showOverlay && (
                <div className="overlay">
                  <div className="x-btn" onClick={exitOverlay}>
                    <ion-icon name="exit-outline"></ion-icon>
                  </div>
                  <ul className="overlay-list">
                    <li className="overlay-list-item">Home</li>
                    <li className="overlay-list-item">About us</li>
                    <li className="overlay-list-item">Academics</li>
                    <li className="overlay-list-item">Admissions</li>
                  </ul>
                </div>
              )}

            </nav>
          </>
        );
      };

export default Navbar
