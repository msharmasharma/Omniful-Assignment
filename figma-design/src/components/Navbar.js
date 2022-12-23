import "../css/Navbar.css";
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
            <div className=" collapse navbar-collapse navright" id="navbarSupportedContent">
              <div className="engflag">
                <img
                  className="imgs"
                  src="https://s3-alpha-sig.figma.com/img/9cf6/f7b9/ad13685ad431800de18a400b19acf723?Expires=1672617600&Signature=GJVFl1fHBIR~aeH~~RGdrpPqrEBgj89UPU0AW1osp25r3YUGDtS7LMz35bDYqqNvsyYft9~73J747z2DwWt7kWCaPFlTmaAlsBmUq38ggFOXsI4vF8~~oghPoz4nHiBaXuDbjD1UBkr6vkj402I5pmrhZF4i24NuFkKzo5ryudNgyLvEFO61rYx2BD-SfU~i9~Dvmc6bLGr9ignGj9DKN0BA7KhSzYEw2d64YHkUD9zC6EdfHPTYEJY8dEXag81AKGp2oi6FIwXliADROUYp0pJ4KtpyMvBuDWkG2ioZkQlr4Ta3jaAu3jpaO8w5AmQ6sAv~kLfExz-9QsWfGlEh2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
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
