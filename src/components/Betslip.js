import React, { useState } from "react";
import "./Betslip.css";

function Betslip() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [confirmedMainData, setConfirmedMainData] = useState([
    {
      teamname: "SEA Mariners",
      logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367b0739b2cc7a38c8dd76_image%2016.png",
      ddvalue: "Even money",
      value: "6",
    },
  ]);

  const [confirmedData, setConfirmedData] = useState([
    {
      title: "Tigers – Runs down",
      ddvalue: "Equals top of",
      value: "6",
    },
    {
      title: "Tigers – Runs down",
      ddvalue: "Equals top of",
      value: "4",
    },
    {
      title: "Tigers – Runs down",
      ddvalue: "Equals top of",
      value: "2",
    },
    {
      title: "Tigers – Runs down",
      ddvalue: "Equals top of",
      value: "1",
    },
  ]);

  return (
    <div className="div-block-40">
      <div className="div-block-4">
        <div className="tabs-menu tabs-menu-margin-left">
          <button
            className={toggleState === 1 ? "tab-link w--current" : "tab-link"}
            onClick={() => toggleTab(1)}
          >
            Bet Slip
          </button>
          <button
            className={toggleState === 2 ? "tab-link w--current" : "tab-link"}
            onClick={() => toggleTab(2)}
          >
            My Bets
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <div
              className={
                confirmedMainData.length > 0
                  ? "bet-slip-empty"
                  : "bet-slip-empty bet-slip-show"
              }
            >
              <img
                className="img"
                src="https://assets.website-files.com/64366cb17bd14fceb702c4ba/643682111039027db57c9f95_eye.svg"
              />
              <div className="body-sm gray text-align-center">
                Selected bets will
              </div>
              <div className="body-sm gray text-align-center">appear here.</div>
            </div>

            <div
              className={
                confirmedMainData.length > 0
                  ? "bet-slip-block"
                  : "bet-slip-block bet-slip-block-none"
              }
            >
              <div className="form-block-3 w-form">
                <form
                  id="email-form-3"
                  name="email-form-3"
                  data-name="Email Form 3"
                  method="get"
                  className="form-3"
                  aria-label="Email Form 3"
                >
                  {confirmedMainData.map((data, index) => {
                    return (
                      <div key={index} className="div-block-35">
                        <div className="div-block-32">
                          <div className="div-block-33">
                            <input type="checkbox" className="checkbox" />
                            <div className="icon-holder">
                              <img className="img" src={data.logo} />
                            </div>
                            <div className="body medium">{data.teamname}</div>
                          </div>
                          <div className="div-block-34">
                            <div className="body medium primary">{`${data.ddvalue} + ${data.value}`}</div>
                            <img
                              onClick={() => setConfirmedMainData([])}
                              className="img"
                              src="https://assets.website-files.com/64366cb17bd14fceb702c4ba/64391f88300f2a4ff1ca49f9_delete.svg"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="body-sm medium gray-06">
                            CLE Guardians @ DET Tigers • 11:00PM
                          </div>
                          {confirmedData.map((data, index) => {
                            return (
                              <div
                                key={index}
                                className="body-sm medium gray-06"
                              >
                                {`${data.title} ${data.ddvalue} ${data.value}`}
                              </div>
                            );
                          })}
                          <div className="slip-line"></div>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="div-block-35">
                  <div className="div-block-32">
                    <div className="div-block-33">
                      <input type="checkbox" className="checkbox" />
                      <div className="icon-holder"><img className="img" src="https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367ff3d6e529014e85d1a2_image%2016-1.png" /></div>
                      <div className="body medium">CLE Guardians</div>
                    </div>
                    <div className="div-block-34">
                      <div className="body medium primary">Even money + 4</div>
                      <img className="img" src="https://assets.website-files.com/64366cb17bd14fceb702c4ba/64391f88300f2a4ff1ca49f9_delete.svg" />
                    </div>
                  </div>
                  <div>
                    <div className="body-sm medium gray-06">
                      CLE Guardians @ DET Tigers • 11:00PM
                    </div>
                    <div className="slip-line"></div>
                  </div>
                </div> */}
                  <div className="div-block-37">
                    <div className="div-block-39">
                      <div className="div-block-38">
                        <div className="body medium gray">Wager</div>
                      </div>

                      <div className="input-wrapper-small">
                        <input
                          type="text"
                          className="input input-right w-input"
                          name="field-13"
                          data-name="Field 13"
                          placeholder="$10.00"
                          id="field-13"
                          required=""
                        ></input>
                      </div>
                    </div>
                    <div className="div-block-39-copy">
                      <div className="div-block-38">
                        <div className="body medium gray">To win</div>
                      </div>
                      <div className="body medium">$16.00</div>
                    </div>
                    <div className="div-block-39-copy">
                      <div className="div-block-38">
                        <div className="body medium gray">Potential payout</div>
                      </div>
                      <div className="body medium">$20.00</div>
                    </div>
                    <a className="button-primary button-primary-width-all-100 w-button">
                      Place bet
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Betslip;
