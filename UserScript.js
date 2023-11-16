// ==UserScript==
// @name         AnimeFLV - Dark Mode
// @namespace    https://github.com/Apryed/AnimeFLV_DarkMode
// @version      2.0
// @description  Transforms AnimeFLV to Dark Mode!
// @author       Apryed
// @match        https://www3.animeflv.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animeflv.net
// @downloadURL  https://github.com/Apryed/AnimeFLV_DarkMode/raw/master/UserScript.js
// @updateURL    https://github.com/Apryed/AnimeFLV_DarkMode/raw/master/UserScript.js
// @supportURL   https://github.com/Apryed/AnimeFLV_DarkMode/issues
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let black="#000"
    let grey="#0A0A0A"
    let lgrey="#2A2A2A"
    let blue="#14bbf0"
    let white="#FFF"

    let Style = `.Header {background-color:`+grey+`;} #search-anime, h1, h2, a, strong { color:`+white+` !important;} .Body, .WdgtCn, .WdgtCn .Title {background-color:`+black+`;color:`+white+`;} .CapiTnv>li>a {background-color:`+lgrey+`;} .CapiTnv>li.active>a {background-color:`+grey+`;box-shadow: inset 0 2px 0 `+blue+`;} .fa-play::before, .fa-chevron-left::before ,.fa-th-list, .fa-eye-slash {color:`+blue+` !important} .Emision, .CapNv, .Rprt, .CVst, .Xpnd {background-color:`+grey+`;color:`+white+`;} .Emision a:hover {color:`+blue+` !important} @media (min-width: 1020px) {.CpCn.show .CpCnA:before, .CpCn.show .CpCnA:after {background-color:`+black+`}}`
    let sS = document.createElement("style")
    sS.setAttribute("type", "text/css");
    sS.innerText = Style
    document.head.appendChild(sS)

    document.getElementsByClassName("ShrCnB fa-share-alt")[0].remove()
    document.getElementsByClassName("Clgt")[0].remove()
})();
