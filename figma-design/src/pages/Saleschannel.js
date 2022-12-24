import "../css/Sales.css";
import amazon from "../images/amazon.png";
import dokan from "../images/dokan.png";
import flipkart from "../images/flipkart.png";
import magento from "../images/magento.png";
import myntra from "../images/myntra.png";
import opencart from "../images/opencart.png";
import panda from "../images/panda.png";
import salla from "../images/salla.png";
import shopify from "../images/shopify.png";
import woo from "../images/woo.png";
import zid from "../images/zid.png";

export const Saleschannel = () => {
  return (
    <div className="salesmain">
      <div className="aboveheader">
        <h1 className="heads">Sales channel Apps</h1>
        <div className="horizon">
          <span class="material-symbols-outlined morehori">more_horiz</span>
        </div>
      </div>
      <div className="saleheader">
        <div className="integrated">
          <div className="inti">Intergrated</div>
          <div className="twl">12</div>
        </div>
        <div className="allchannels">
          <div className="intii">All Channels</div>
          <div className="oneeight">118</div>
        </div>
        <div className="comingsoon">
          <div className="intii cmng">Coming soon</div>
          <div className="nine">9</div>
        </div>
      </div>
      <hr className="har" />
      <div className="beforchanneleight">
        <div className="yellow"></div>
        <div className="channeleight">Sales Channels (8)</div>
      </div>
      <div className="allgrids">
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="shopify" src={shopify} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom">Shopify</div>
        </div>
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="dakan" src={dokan} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom">Dokan</div>
        </div>
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="zid" src={zid} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom"> Zid</div>
        </div>
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="panda" src={panda} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom">Panda</div>
        </div>
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="woo" src={woo} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom">woocommerce</div>
        </div>
        <div className="boxes">
          <div className="Inactive">Inactive</div>
          <div>
            <img className="magneta" src={magento} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom">Magneto</div>
        </div>
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="opencart" src={opencart} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom">Opencart</div>
        </div>
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="salla" src={salla} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom"> Salla</div>
        </div>
      </div>

      {/*  */}
      {/*  */}

      <div className="beforchanneleight">
        <div className="yellow"></div>
        <div className="channeleight">Market Places (4)</div>
      </div>
      <div className="allgrids">
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="amazon" src={amazon} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom">Amazon</div>
        </div>
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="flipkart" src={flipkart} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom">Flipkart</div>
        </div>
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="panda" src={myntra} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom"> Myntra</div>
        </div>
        <div className="boxes">
          <div className="active">Active</div>
          <div>
            <img className="panda" src={myntra} alt="" />
          </div>
          <div className="custom">Custome Name</div>
          <div className="bottom">Myntra</div>
        </div>
      </div>
    </div>
  );
};
