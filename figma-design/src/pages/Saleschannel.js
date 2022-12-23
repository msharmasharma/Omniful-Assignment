import "../css/Sales.css";
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
          <div className="inti">All Channels</div>
          <div className="oneeight">118</div>
        </div>
        <div className="comingsoon">
          <div className="inti cmng">Coming soon</div>
          <div className="nine">9</div>
        </div>
      </div>
      <hr className="har" />
    </div>
  );
};
