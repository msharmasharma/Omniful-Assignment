import "../css/SideBar.css";
import { Settings } from "./Settings";
export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="first hover">
        <img
          className="omniimage"
          src="https://media.licdn.com/dms/image/C4D0BAQFBw1kM9lSGTQ/company-logo_200_200/0/1602138010036?e=2147483647&v=beta&t=EKiXbPJBi-rZKcwya3jb8wCvKA-EEhU2Lz_1D6AoOt0"
          alt="omniful"
        />
      </div>
      <div className="second hover">
        <span class="material-symbols-outlined home">home</span>
      </div>
      <div className="third hover">
        <span class="material-symbols-outlined dollar">monetization_on</span>
      </div>
      <div className="fourth hover">
        <span class="material-symbols-outlined timeline">insights</span>
      </div>
      <div className="fifth hover">
        <span class="material-symbols-outlined inventory">inventory_2</span>
      </div>
      <div className="fifth hover">
        <span class="material-symbols-outlined inventory">conveyor_belt</span>
      </div>
      <div className="fifth hover">
        <span class="material-symbols-outlined inventory">category</span>
      </div>
      <div className="fifth hover">
        <span class="material-symbols-outlined inventory">
          account_balance_wallet
        </span>
      </div>
      <div className="fifth hover">
        <span class="material-symbols-outlined inventory">settings</span>
      </div>
      <div className="fifth hover">
        <span class="material-symbols-outlined inventory">group</span>
      </div>
      <div className="fifth hover">
        <span class="material-symbols-outlined inventory">policy</span>
      </div>
      <div className="line">
        <hr className="mainline" />
      </div>
      <div className="fifth hover">
        <span class="material-symbols-outlined inventory">contact_support</span>
      </div>
      <div className="fifth hover">
        <span class="material-symbols-outlined inventory">logout</span>
      </div>
    </div>
  );
};
