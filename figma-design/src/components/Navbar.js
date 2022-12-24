import "../css/Navbar.css";
import flag from "../images/flag.png";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navinside">
            <div
              className="collapse navbar-collapse navbox"
              id="navbarSupportedContent"
            >
              <div className="linkbolt">
                <div className="material-symbols-outlined link">add_link</div>
                <div className="boltback">
                  <div className="boltset">
                    <div className="material-symbols-outlined bolt">bolt</div>
                  </div>
                </div>
              </div>
              <div className="quick">Quick Links</div>
              <span className="material-symbols-outlined quickdrop">
                expand_more
              </span>
            </div>
            <div
              className=" collapse navbar-collapse navright"
              id="navbarSupportedContent"
            >
              <div className="engflag">
                <img className="imgs" src={flag} alt="" />
                <p className="eng">English</p>
              </div>
              <div className="noti">
                <span class="material-symbols-outlined notiicon">
                  notifications
                </span>
                <div className="dot"></div>
              </div>
              <div className="help">
                <span class="material-symbols-outlined helpicon">help</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
