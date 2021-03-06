import React from "react";
import styled from "styled-components";
import blood from "../assets/blood/blood-pic.jpg";
import { Link } from "react-router-dom";
const LandingPageStyle = styled.div`
  width: auto;
  height: 100vh;
  background-color: #790000;
  text-align: center;

  .info-text {
    display: flex;
    justify-content: center;
  }

  .welcome {

    font-size: 40px;
    font-family: "Permanent Marker", cursive;
    margin-bottom: 64px;
    animation: fade-in;
    animation-duration: 1.8s;

    .small {
      font-size: 28px;
      font-weight: bold;
    }
  }

  .text {
    display: block;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    color: white;
    margin: 70px;
    letter-spacing: 1px;
    line-height: 38px;
    width: 700px;

    .darker {
      font-size: 43px;
      font-weight: lighter;
      font-family: "Permanent Marker",cursive;
    }
    .goham-text {
        text-align: center;
        margin-bottom: -6px;
        animation: puff-in-center;
        animation-duration: 0.5s;


        span {
          font-weight: bold;
        }
    }
  }

  .to-battle {
    font-family: "Permanent Marker", cursive;
    font-size: 28px;
    width: 307px;
    height: 87px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    background: #1c1c1c;
    border-radius: 10px;
    color: white;
    border: none;
    outline: none;
    background-image:url(${blood});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .battle {
      font-family: "Permanent Marker", cursive;
      font-size: 28px;
      animation: vibrate-3;
      animation-duration: 0.7s;
      animation-iteration-count: infinite;
      margin-top: 24px;
    }

  }

  .red-dot {
    position: absolute;
    display: flex;
    border: none;
    outline: none;
    width: 70px;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px;
    background-color: #1c1c1c;
    animation: fade-in;
    animation-duration: 1.3s;
    /* animation-iteration-count: infinite; */
  }
  @keyframes vibrate-3 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  30% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  50% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  70% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  90% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }

}

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@media(max-width: 581px) {

    .welcome {

      font-size: 28px;

      .small {
        font-size: 34px;
        font-weight: bold;
      }

    }
    .text {
      font-size: 13px;
    }
}

@media(max-width: 360px) {

.welcome {

  font-size: 23px;

  .small {
    font-size: 28px;
    font-weight: bold;
  }

}
.text {
  font-size: 10px;
  line-height: 25px;
}
}

`;

export default function LandingPage() {
  return (
    <LandingPageStyle>
      <div className="info-text">
        <div className="text">
          <p className="welcome">Welcome <span className="small">to</span> <span className="darker">GoHam!</span></p>

        <p className="goham-text">
          <span> GoHam</span> Arena hosts the <span>bloodiest</span>, most <span>intense</span> and <span>adorable</span> voting <span>Battles</span> in the Cosmos

          <br></br>
          In the early dawn of year 2020, GoHam was created for its purpose for bringing All hamster lovers together to witness the glory of you and other powerful Hamster Warriors in action!
          <br></br>
          <br></br>

          The most loved Warrior takes their <span>VICTORY</span>
          <br></br>
         </p>
        </div>
      </div>

      <Link to="/arena">
        <button className="to-battle">
         <p className="battle">TO BATTLE!</p>
        </button>
      </Link>
      <button className ="red-dot"></button>
    </LandingPageStyle>
  );
}
