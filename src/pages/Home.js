import React from "react";
import "./Home.css";
import SmartBet from "../components/SmartBet";
import Overlay from "../components/Overlay";
import Betslip from "../components/Betslip";

const games = [
  {
    teams: [
      {
        teamname: "SEA Mariners",
        logo: "",
        runspread: "+1.5",
        runspread2: "-130",
        total: "-130",
        totalou: "O 7",
        moneyline: "-130",
      },
      {
        teamname: "SD Padres",
        logo: "",
        runspread: "-1.5",
        runspread2: "+160",
        total: "+170",
        totalou: "U 7",
        moneyline: "+110",
      },
    ],
  },
  {
    teams: [
      {
        teamname: "ds",
        logo: "",
        runspread: "+1.5",
        runspread2: "-130",
        total: "-130",
        totalou: "O 7",
        moneyline: "-130",
      },
      {
        teamname: "SD Padres",
        logo: "",
        runspread: "-1.5",
        runspread2: "+160",
        total: "+170",
        totalou: "U 7",
        moneyline: "+110",
      },
    ],
  },
];

function Home() {
  return (
    <div className="section section-bg-gray-2">
      <div className="container">
        <div className="main-wrapper">
          <div className="home-hero">
            <SmartBet />
            <Betslip />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
