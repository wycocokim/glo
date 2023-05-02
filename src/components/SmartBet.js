import React, { useState } from "react";
import "./SmartBet.css";

const games = [
  {
    teams: [
      {
        teamname: "SEA Mariners",
        logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367b0739b2cc7a38c8dd76_image%2016.png",
        runspread: "+1.5",
        runspread2: "-130",
        total: "-130",
        totalou: "O 7",
        moneyline: "-130",
        teampos: "1",
      },
      {
        teamname: "SD Padres",
        logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367ef931ade71e936c7403_image%2016%20(1).png",
        runspread: "-1.5",
        runspread2: "+160",
        total: "+170",
        totalou: "U 7",
        moneyline: "+110",
        teampos: "2",
      },
    ],
  },
  {
    teams: [
      {
        teamname: "CLE Guardians",
        logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367ff3d6e529014e85d1a2_image%2016-1.png",
        runspread: "+1.2",
        runspread2: "-130",
        total: "-130",
        totalou: "O 7",
        moneyline: "-130",
        teampos: "1",
      },
      {
        teamname: "DET Tigers",
        logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367ff3f69aaef6fbedb9c6_image%2016.png",
        runspread: "-1.2",
        runspread2: "+160",
        total: "+170",
        totalou: "U 7",
        moneyline: "+110",
        teampos: "2",
      },
    ],
  },
  {
    teams: [
      {
        teamname: "CHI Cubs",
        logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367ff3c15bb6b01e2f4429_image%2016-3.png",
        runspread: "+1.2",
        runspread2: "-130",
        total: "-130",
        totalou: "O 7",
        moneyline: "-130",
        teampos: "1",
      },
      {
        teamname: "MIL Brewers",
        logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367ff3c15bb67fc72f442b_image%2016-2.png",
        runspread: "-1.2",
        runspread2: "+160",
        total: "+170",
        totalou: "U 7",
        moneyline: "+110",
        teampos: "2",
      },
    ],
  },
  {
    teams: [
      {
        teamname: "MIN Twins",
        logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367ff376dd6e6a4ab701c5_image%2016-5.png",
        runspread: "+1.2",
        runspread2: "-130",
        total: "-130",
        totalou: "O 7",
        moneyline: "-130",
        teampos: "1",
      },
      {
        teamname: "SEA Mariners",
        logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367b0739b2cc7a38c8dd76_image%2016.png",
        runspread: "+1.5",
        runspread2: "-130",
        total: "-130",
        totalou: "O 7",
        moneyline: "-130",
        teampos: "1",
      },
    ],
  },
];

const checkBoxData = [
  {
    id: 1,
    title: "Runs down",
    dropdown: ["N or greater", "N or lower", "Even money"],
    selected: false,
  },
  {
    id: 2,
    title: "Top/mid/bottom of an inning",
    dropdown: ["N or greater", "N or lower", "Even money"],
    selected: false,
  },
  {
    id: 3,
    title: "Starting pitcher in game",
    dropdown: ["N or greater", "N or lower", "Even money"],
    selected: false,
  },
  {
    id: 4,
    title: "Inning",
    dropdown: ["N or greater", "N or lower", "Even money"],
    selected: false,
  },
  {
    id: 5,
    title: "Any injury",
    dropdown: ["N or greater", "N or lower", "Even money"],
    selected: false,
  },
  {
    id: 6,
    title: "Starting pitcher – # pitches",
    dropdown: ["N or greater", "N or lower", "Even money"],
    selected: false,
  },
  {
    id: 7,
    title: "Weather status",
    dropdown: ["N or greater", "N or lower", "Even money"],
    selected: false,
  },
];

function SmartBet() {
  const [toggleState, setToggleState] = useState(1);
  const [toggleOverlay1, setToggleOverlay1] = useState(true);
  const [toggleOverlay2, setToggleOverlay2] = useState(false);
  const [toggleOverlay3, setToggleOverlay3] = useState(false);
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const [orderState, setOrderState] = useState("1");
  const [overlayData, setOverlayData] = useState([]);

  // confirm

  const [checkboxstate, setCheckboxState] = useState(true);
  const [checkboxstate2, setCheckboxState2] = useState(false);

  // const [hoverState, setHoverState] = useState(false);

  // function handleMouseHover(e) {
  //   setHoverState(true);
  // }

  // const [confirmFirst, setConfirmFirst] = useState({
  //   title: "Tigers – Runs down",
  //   ddvalue: "",
  //   value: "",
  // });

  // const handleChangeFirst = (e) => {
  //   const dropdown = e.target.value;
  //   setConfirmFirst({ ...confirmFirst, ddvalue: dropdown });
  // };

  const [confirmedMainData, setConfirmedMainData] = useState([
    {
      teamname: "SEA Mariners",
      logo: "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367b0739b2cc7a38c8dd76_image%2016.png",
      ddvalue: "Even money",
      value: "6",
    },
  ]);

  const [confirmedData, setConfirmedData] = useState([]);

  // const confirmSubmit = (e) => {
  //   e.preventDefault()

  // }

  // const ref = useRef([]);

  // const Unchecked = () => {
  //   console.log(ref.current.length);
  //   for (let i = 0; i < ref.current.length; i++) {
  //     ref.current[i].checked = false;
  //   }

  //   setToggleOverlay1(true);
  //   setToggleOverlay2(false);
  //   setToggleOverlay3(false);
  //   setCheckbox1(false);
  //   setCheckbox2(false);
  //   setCheckbox3(false);
  //   setCheckbox4(false);
  //   setCheckbox5(false);
  //   setCheckbox6(false);
  //   setCheckbox7(false);
  // };

  // const UncheckedAdd = () => {
  //   // console.log(ref.current.length);
  //   for (let i = 0; i < ref.current.length; i++) {
  //     ref.current[i].checked = false;
  //   }

  //   setToggleOverlay1(true);
  //   setToggleOverlay2(false);
  //   setToggleOverlay3(false);
  // };

  const addToBetSlip = () => {
    setToggleOverlay1(false);
    setToggleOverlay2(false);
    setToggleOverlay3(true);
    setToggleOverlay(true);

    // setConfirmedData([...confirmedData, confirmFirst])
    // setConfirmedData([...confirmedData, confirm2])
    // setConfirmedData([...confirmedData, confirm3])
    // setConfirmedData([...confirmedData, confirm4])
    // setConfirmedData([...confirmedData, confirm5])
    // setConfirmedData([...confirmedData, confirm6])
    // setConfirmedData([...confirmedData, confirm7])
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="smart-bet-wrapper">
      <div className="smart-bet-title-wrapper">
        <h6 className="h6 semi-bold">Smart bets</h6>
        <div className="body-sm gray">
          Place a smart bet by setting conditions with GLO
        </div>
      </div>

      <div className="tabs-menu">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Baseball
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tennis
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Soccer
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="tab-pane">
            <div className="hero-left-tab-pane-title-grid">
              <div className="body-sm gray medium">Today</div>
              <div className="text-block-wrapper">
                <div className="body-sm gray medium text-align-center">
                  Run Spread
                </div>
              </div>
              <div className="text-block-wrapper">
                <div className="body-sm gray medium text-align-center">
                  Total
                </div>
              </div>
              <div className="text-block-wrapper">
                <div className="body-sm gray medium text-align-center">
                  Moneyline
                </div>
              </div>
              <div className="smart-bet-title-mobile">
                <div className="body-sm medium gray-06">
                  Run Spread / Total / Moneyline
                </div>
              </div>
            </div>
            {games.map((game, index) => {
              return (
                <div key={index} className="bet-wrapper">
                  <div className="tab-title-with-icon-wrapper">
                    <img
                      className="mlb-icon"
                      src={
                        "https://assets.website-files.com/64366cb17bd14fceb702c4ba/643677e0c15bb61d312e88dc_image%2017.png"
                      }
                    />
                    <div className="body-sm medium gray">MLB • 9:10PM</div>
                  </div>

                  <div className="hero-left-grid">
                    <div className="game-card">
                      {game.teams.map((team, teamIndex) => {
                        return (
                          <div key={teamIndex} className="grid">
                            <div className="div-block-2">
                              <div className="icon-holder">
                                <img className="img" src={team.logo} />
                              </div>
                              <div className="body medium">{team.teamname}</div>
                            </div>
                            <div
                              className="input-wrapper"
                              onClick={() => {
                                setToggleOverlay(true);
                                console.log(game);
                                setOverlayData([...overlayData, game]);
                                setOrderState(team.teampos);
                              }}
                              // onMouseEnter={handleMouseHover}
                            >
                              <div className="body gray">{team.runspread}</div>
                              <div className="divider"></div>
                              <div className="body primary">
                                {team.runspread2}
                              </div>
                              <div
                                // className={
                                //   hoverState
                                //     ? "input-hover-wrapper show"
                                //     : "input-hover-wrapper"
                                // }
                                className="input-hover-wrapper"
                              >
                                <img src="https://assets.website-files.com/64366cb17bd14fceb702c4ba/64377f71d27d2749622d23b2_Group%2043.svg" />
                                <div className="body medium text-hidden-tabs">
                                  Adjust
                                </div>
                              </div>
                            </div>
                            <div
                              className="input-wrapper"
                              onClick={() => {
                                console.log(game);
                                setToggleOverlay(true);
                                setOverlayData([...overlayData, game]);
                                setOrderState(team.teampos);
                              }}
                            >
                              <div className="body gray">{team.totalou}</div>
                              <div className="divider"></div>
                              <div className="body primary">{team.total}</div>
                              <div className="input-hover-wrapper">
                                <div className="body medium text-hidden-tabs">
                                  Adjust
                                </div>
                              </div>
                            </div>
                            <div
                              className="input-wrapper"
                              onClick={() => {
                                console.log(game);
                                setToggleOverlay(true);
                                setOverlayData([...overlayData, game]);

                                setOrderState(team.teampos);
                              }}
                            >
                              <div className="body primary">
                                {team.moneyline}
                              </div>
                              <div className="input-hover-wrapper">
                                <div className="body medium text-hidden-tabs">
                                  Adjust
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>

      <div
        className={
          toggleOverlay === true ? "overlay" : "overlay overlay-hidden"
        }
      >
        {/* overlaybg */}
        <div
          className="overlay-bg"
          onClick={() => {
            setToggleOverlay(false);
            setToggleOverlay1(true);
            setToggleOverlay2(false);
            setToggleOverlay3(false);
            setOverlayData([]);
          }}
        ></div>
        <div
          className={
            toggleOverlay1 === true
              ? "overlay-wrapper"
              : "overlay-wrapper overlay-wrapper-hidden"
          }
        >
          <div className="div-block-11">
            <div className="overlay-title-wrapper">
              <h6 className="h6 semi-bold">Set odds conditions</h6>
              <div className="body-sm gray">
                In iaculis bibendum duis a dictum bibendum egestas.
              </div>
            </div>
            <div className="overlay-grid-wrapper overlay-grid-margin-12">
              <div className="div-block-7">
                <div className="div-block-9">
                  <img
                    src={
                      "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437948b2b7c2157ec62aa46_pause.svg"
                    }
                    alt=""
                    className="image-5"
                  />
                  <div className="div-block-8">
                    <div className="body semi-bold">MLB • 9:10PM</div>
                    <img
                      className="image-5"
                      src={
                        "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437ab380bea4f273d2ba458_help_FILL1_wght400_GRAD0_opsz20%201%20(1).svg"
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <img
                    className="image-3"
                    src={
                      "https://assets.website-files.com/64366cb17bd14fceb702c4ba/643795004e5a5d96b08347c2_more-horizontal.svg"
                    }
                    alt=""
                  />
                </div>
              </div>

              {overlayData.map((team, index) => {
                return (
                  <div key={index}>
                    {team.teams
                      .filter((item) => item.teampos === orderState)
                      .map((team, index) => {
                        return (
                          <div key={index} className="grid-2">
                            <div>
                              <div className="div-block-2">
                                <div className="icon-holder">
                                  <img className="img" src={team.logo} />
                                </div>

                                <div
                                  className={
                                    checkboxstate
                                      ? "body medium"
                                      : "body medium gray-04"
                                  }
                                >
                                  {team.teamname}
                                </div>
                              </div>
                            </div>
                            <select
                              id="field-12"
                              name="field-12"
                              data-name="Field 12"
                              className={
                                checkboxstate
                                  ? "select-field"
                                  : "select-field not-active"
                              }
                            >
                              <option value="">N or greater</option>
                              <option value="First">First choice</option>
                              <option value="Second">Second choice</option>
                              <option value="Third">Third choice</option>
                            </select>
                            <div
                              className={
                                checkboxstate
                                  ? "input-wrapper-overlay"
                                  : "input-wrapper-overlay input-wrapper-not-active"
                              }
                            >
                              <input
                                type="text"
                                name="name"
                                className={
                                  checkboxstate
                                    ? "input"
                                    : "input input-not-active"
                                }
                                placeholder={team.moneyline}
                              />
                            </div>
                            <div className="div-block-10">
                              <label className="switch">
                                <input
                                  type="checkbox"
                                  defaultChecked="checked"
                                  className="checkbox-switch"
                                  value=""
                                  onChange={() =>
                                    setCheckboxState(!checkboxstate)
                                  }
                                />
                                <span className="slider" />
                              </label>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}

              <div className="overlay-line"></div>

              {overlayData.map((team, index) => {
                return (
                  <div key={index}>
                    {team.teams
                      .filter((item) => item.teampos !== orderState)
                      .map((team, index) => {
                        return (
                          <div key={index} className="grid-2">
                            <div>
                              <div className="div-block-2">
                                <div className="icon-holder">
                                  <img className="img" src={team.logo} />
                                </div>

                                <div
                                  className={
                                    checkboxstate2
                                      ? "body medium"
                                      : "body medium gray-04"
                                  }
                                >
                                  {team.teamname}
                                </div>
                              </div>
                            </div>
                            <select
                              id="field-12"
                              name="field-12"
                              data-name="Field 12"
                              className={
                                checkboxstate2
                                  ? "select-field"
                                  : "select-field not-active"
                              }
                              value=""
                              onChange={(e) => {
                                const value = e.target.value;
                              }}
                            >
                              <option value="">N or greater</option>
                              <option value="First">First choice</option>
                              <option value="Second">Second choice</option>
                              <option value="Third">Third choice</option>
                            </select>
                            <div
                              className={
                                checkboxstate2
                                  ? "input-wrapper-overlay"
                                  : "input-wrapper-overlay input-wrapper-not-active"
                              }
                            >
                              <input
                                type="text"
                                name="name"
                                className={
                                  checkboxstate2
                                    ? "input"
                                    : "input input-not-active"
                                }
                                placeholder={team.moneyline}
                              />
                            </div>
                            <div className="div-block-10">
                              <label className="switch">
                                <input
                                  type="checkbox"
                                  className="checkbox-switch"
                                  onChange={() => {
                                    setCheckboxState2(!checkboxstate2);
                                  }}
                                />
                                <span className="slider" />
                              </label>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>

            {/* conditional  */}

            {/* {checkbox1 && (
              <div className="overlay-grid-wrapper">
                <div>
                  <div className="grid-2">
                    <div>
                      <div className="div-block-9">
                        <img
                          src={
                            "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437948b2b7c2157ec62aa46_pause.svg"
                          }
                          alt=""
                          className="image-5"
                        />
                        <div className="div-block-8">
                          <div className="body semi-bold">
                            Tigers – Runs down
                          </div>
                          <img
                            className="image-5"
                            src={
                              "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437ab380bea4f273d2ba458_help_FILL1_wght400_GRAD0_opsz20%201%20(1).svg"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <select
                      id="field-12"
                      name="field-12"
                      data-name="Field 12"
                      className="select-field"
                      value={confirmFirst.ddvalue}
                      onChange={handleChangeFirst}
                    >
                      <option value="N or greater">N or greater</option>
                      <option value="First">First choice</option>
                      <option value="Second">Second choice</option>
                      <option value="Third">Third choice</option>
                    </select>
                    <div className="input-wrapper-overlay">
                      <input
                        type="text"
                        name="name"
                        className="input"
                        placeholder="3"
                        value={confirmFirst.value}
                        onChange={(e) =>
                          setConfirmFirst({
                            ...confirmFirst,
                            value: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="remove-icon">
                      <img
                        className="image-3"
                        src={
                          "https://assets.website-files.com/64366cb17bd14fceb702c4ba/643795004e5a5d96b08347c2_more-horizontal.svg"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            )} */}

            <div
              className="add-button-wrapper"
              onClick={() => {
                setToggleOverlay2(true);
                setToggleOverlay1(false);
                setToggleOverlay3(false);
              }}
            >
              <div className="link-block">
                <img
                  className="image-4"
                  src={
                    "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437a91f19f659320ec7a75c_circle-plus.svg"
                  }
                  alt=""
                />
                <div className="body semi-bold primary">Add conditions</div>
              </div>
            </div>
          </div>
          <div className="div-block-12">
            <div className="div-block-17">
              <div className="div-block-15">
                <div className="div-block-16">
                  <div className="body medium gray">Heat check</div>
                  <img
                    className="image-5"
                    src={
                      "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437ab380bea4f273d2ba458_help_FILL1_wght400_GRAD0_opsz20%201%20(1).svg"
                    }
                    alt=""
                  />
                </div>
                <div className="body medium">50%</div>
              </div>
              <div className="div-block-13">
                <div className="div-block-14"></div>
              </div>
            </div>
            <a
              href="#"
              className="button-primary w-button"
              onClick={addToBetSlip}
            >
              Continue
            </a>
          </div>

          <img
            onClick={() => {
              setToggleOverlay(false);
              setToggleOverlay1(true);
              setToggleOverlay2(false);
              setToggleOverlay3(false);
              setOverlayData([]);
            }}
            className="image-6"
            src="https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437add6356666119a72d0d7_close%20(1).svg"
          />
        </div>

        {/* overlay 2 */}
        <div
          className={
            toggleOverlay2 === true
              ? "overlay-wrapper-2"
              : "overlay-wrapper-2 overlay-wrapper-2-hidden"
          }
        >
          <div className="form-block-2 w-form">
            <form
              id="email-form-2"
              name="email-form-2"
              data-name="Email Form 2"
              method="get"
              className="form"
              aria-label="Email Form 2"
            >
              <div className="div-block-24">
                <div className="overlay-title-wrapper-2">
                  <h6 className="h6 semi-bold">Add conditions</h6>
                  <div className="body-sm gray">
                    In iaculis bibendum duis a dictum bibendum egestas.
                  </div>
                </div>
                <input
                  type="text"
                  className="text-field w-input"
                  name="name"
                  data-name="Name"
                  placeholder="Search for conditions..."
                  id="name"
                ></input>
                <div className="div-block-25">
                  {checkBoxData.map((data, index) => {
                    return (
                      <div key={index} className="div-block-18">
                        <div className="div-block-19">
                          <div className="body medium">{data.title}</div>
                        </div>
                        <input
                          value={data.title}
                          className="check-box"
                          type="checkbox"
                        />
                      </div>
                    );
                  })}
                  {/* <div className="div-block-18">
                    <div className="div-block-19">
                      <div className="body medium">DET Tigers – Runs down</div>
                    </div>
                    <input
                      ref={(element) => {
                        ref.current[0] = element;
                      }}
                      className="check-box"
                      type="checkbox"
                      onChange={() => setCheckbox1(!checkbox1)}
                    />
                  </div>
                   */}
                </div>
              </div>
              <div className="div-block-21">
                <div className="div-block-23">
                  <div className="body medium">Selected conditions:</div>
                  <div className="div-block-22">
                    <div className="body-sm semi-bold">0</div>
                  </div>
                </div>
                <div className="div-block-26">
                  <a
                    href="#"
                    className="button-primary-1"
                    onClick={() => {
                      setToggleOverlay1(true);
                      setToggleOverlay2(false);
                      setToggleOverlay3(false);
                    }}
                  >
                    Cancel
                  </a>
                  <a
                    className="button-primary button-primary-width-100"
                    onClick={() => {
                      setToggleOverlay1(true);
                      setToggleOverlay2(false);
                      setToggleOverlay3(false);
                    }}
                  >
                    Add selected
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* overlay 3 */}

        <div
          className={
            toggleOverlay3 === true
              ? "overlay-wrapper-3"
              : "overlay-wrapper-3 overlay-wrapper-3-hidden"
          }
        >
          <div className="form-block-2 w-form">
            <form
              id="email-form-2"
              name="email-form-2"
              data-name="Email Form 2"
              method="get"
              className="form-2"
              aria-label="Email Form 2"
            >
              <div className="div-block-24">
                <div className="overlay-title-wrapper">
                  <h6 className="h6 semi-bold">Review conditions</h6>
                  <div className="body-sm gray">
                    In iaculis bibendum duis a dictum bibendum egestas.
                  </div>
                </div>
                {confirmedMainData.map((data, index) => {
                  return (
                    <div key={index} className="div-block-27">
                      <div className="div-block-28">
                        <div className="body semi-bold">Moneyline</div>
                        <img
                          className="image-5"
                          src={
                            "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437ab380bea4f273d2ba458_help_FILL1_wght400_GRAD0_opsz20%201%20(1).svg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="div-block-29">
                        <div className="div-block-2">
                          <div className="icon-holder">
                            <img src={data.logo} alt="" className="img" />
                          </div>
                          <div className="body medium">{data.teamname}</div>
                        </div>
                        {/* <div className="body medium">{data.moneyline}</div> */}
                        <div className="div-block-31">
                          <div className="body medium gray-06">
                            {data.ddvalue}
                          </div>
                          <div className="body medium">{data.value}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="div-block-27">
                  <div className="div-block-28">
                    <div className="body semi-bold">Moneyline</div>
                    <img
                      className="image-5"
                      src={
                        "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437ab380bea4f273d2ba458_help_FILL1_wght400_GRAD0_opsz20%201%20(1).svg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="div-block-29">
                    <div className="div-block-2">
                      <div className="icon-holder">
                        <img
                          src={
                            "https://assets.website-files.com/64366cb17bd14fceb702c4ba/64367ff3d6e529014e85d1a2_image%2016-1.png"
                          }
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="body medium">CLE Guardians</div>
                    </div>
                    <div className="body medium">Even money</div>
                  </div>
                </div> */}
                {confirmedData.map((data, index) => {
                  return (
                    <div key={index} className="div-block-27">
                      <div className="div-block-29">
                        <div className="div-block-30">
                          <div className="body semi-bold">{data.title}</div>
                          <img
                            className="image-5"
                            src={
                              "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437ab380bea4f273d2ba458_help_FILL1_wght400_GRAD0_opsz20%201%20(1).svg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="div-block-31">
                          <div className="body medium gray-06">
                            {data.ddvalue}
                          </div>
                          <div className="body medium">{data.value}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="div-block-27">
                  <div className="div-block-29">
                    <div className="div-block-30">
                      <div className="body semi-bold">Inning</div>
                      <img
                        className="image-5"
                        src={
                          "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437ab380bea4f273d2ba458_help_FILL1_wght400_GRAD0_opsz20%201%20(1).svg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="div-block-31">
                      <div className="body medium gray-06">Equals top of</div>
                      <div className="body medium">3</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-block-21-copy">
                <div className="div-block-17-copy">
                  <div className="div-block-15">
                    <div className="div-block-16">
                      <div className="body medium gray">Heat check</div>
                      <img
                        className="image-5"
                        src={
                          "https://assets.website-files.com/64366cb17bd14fceb702c4ba/6437ab380bea4f273d2ba458_help_FILL1_wght400_GRAD0_opsz20%201%20(1).svg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="body medium">50%</div>
                  </div>
                  <div className="div-block-13-copy">
                    <div className="div-block-14"></div>
                  </div>
                </div>
                <div className="div-block-26">
                  <a
                    className="button-primary-1 w-button"
                    onClick={() => {
                      setToggleOverlay1(true);
                      setToggleOverlay2(false);
                      setToggleOverlay3(false);
                    }}
                  >
                    Edit
                  </a>
                  <a
                    className="button-primary button-primary-width-100 w-button"
                    onClick={addToBetSlip}
                  >
                    Add to bet slip
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartBet;
