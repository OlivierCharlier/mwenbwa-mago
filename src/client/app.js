/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";

import "./assets/leaderboard.css";

import LeaderBoard from "./components/leaderboard/leaderboard";

import "./assets/style.css";
import {BrowserRouter} from "react-router-dom";
import DisplayMenu from "../client/components/layout/header";
//import HomeBackGround from "./components/home/homebackground";

ReactDOM.render(
    <BrowserRouter>
        <DisplayMenu />
        <LeaderBoard />
    </BrowserRouter>,
    document.querySelector("#bodyBackground"),
);


