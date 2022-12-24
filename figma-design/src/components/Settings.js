import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Settings.css";
export const Settings = () => {
  const [space, setSpace] = useState(true);
  const [trans, setTrans] = useState(true);
  return (
    <div className="mainbody">
      <div className="setbar">
        <p className="settingheader">Settings</p>
        <div className="cornerbox">
          <div className="upexpand">
            <span class="material-symbols-outlined expandleft">
              expand_more
            </span>
          </div>
          <div className="upexpand1">
            <span class="material-symbols-outlined expandleftmore">
              expand_more
            </span>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div className="box">
          <div>
            <span
              class="material-symbols-outlined delivery"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              local_shipping
            </span>{" "}
          </div>
          <div
            onClick={() => setSpace(!space)}
            className="apps"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Apps & Integration
          </div>
          <div class="down">
            <span
              class={`material-symbols-outlined expand ${
                space === true ? "" : "expands"
              } `}
            >
              expand_more
            </span>
          </div>
          <ul class="dropdown-menu list">
            <li className="droplist">
              <div>
                <span class="material-symbols-outlined delivery2">
                  local_shipping
                </span>
              </div>
              <Link className="textdeco" to={"/sales"}>
                {" "}
                <div class="sublist" onClick={() => setSpace(true)}>
                  Sales channel Apps
                </div>
              </Link>{" "}
            </li>
            <li className="droplist">
              <div>
                <span class="material-symbols-outlined delivery2">
                  local_shipping
                </span>
              </div>
              <div class="sublist">Shipping Apps</div>
            </li>
          </ul>
        </div>
      </div>

      <div class={`dropdown top ${space === true ? "" : "hubmanage"}  `}>
        <div className="box">
          <div>
            <span
              class="material-symbols-outlined delivery"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              // aria-expanded="false"
            >
              local_shipping
            </span>{" "}
          </div>
          <div
            className="apps"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => setTrans(!trans)}
          >
            Hub Management
          </div>
          <div class="down">
            <span
              class={`material-symbols-outlined expand ${
                trans === true ? "" : "expns"
              } `}
            >
              expand_more
            </span>
          </div>
          <ul class="dropdown-menu list">
            <li className="droplist">
              <div>
                <span class="material-symbols-outlined delivery2">
                  local_shipping
                </span>
              </div>
              <Link className="textdeco" to={"/hubs"}>
                <div class="sublist">Hubs</div>
              </Link>
            </li>
            <li className="droplist">
              <div>
                <span class="material-symbols-outlined delivery2">
                  local_shipping
                </span>
              </div>
              <div class="sublist">Locations</div>
            </li>
            <li className="droplist">
              <div>
                <span class="material-symbols-outlined delivery2">
                  local_shipping
                </span>
              </div>
              <div class="sublist">Bins</div>
            </li>
            <li className="droplist">
              <div>
                <span class="material-symbols-outlined delivery2">
                  local_shipping
                </span>
              </div>
              <div class="sublist">Consolidation area</div>
            </li>
            <li className="droplist">
              <div>
                <span class="material-symbols-outlined delivery2">
                  local_shipping
                </span>
              </div>
              <div class="sublist">Stations</div>
            </li>
            <li className="droplist">
              <div>
                <span class="material-symbols-outlined delivery2">
                  local_shipping
                </span>
              </div>
              <div class="sublist">Hub setting</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
