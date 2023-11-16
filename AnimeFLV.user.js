// ==UserScript==
// @name         AnimeFLV - Dark Mode
// @namespace    https://github.com/Apryed/AnimeFLV_DarkMode
// @version      2.1.3
// @description  Transforms AnimeFLV to Dark Mode!
// @author       Apryed
// @match        https://www3.animeflv.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animeflv.net
// @downloadURL  https://raw.githubusercontent.com/Apryed/AnimeFLV_DarkMode/main/AnimeFLV.user.js
// @updateURL    https://raw.githubusercontent.com/Apryed/AnimeFLV_DarkMode/main/AnimeFLV.user.js
// @supportURL   https://github.com/Apryed/AnimeFLV_DarkMode/issues
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let black="#000", grey="#0A0A0A", lgrey="#2A2A2A", blue="#14bbf0", red="#F00", white="#FFF", fb="#4267B2"

    let Style = `.Header,.Footer {background-color:`+grey+`;} #search-anime, h1, h2, a, strong { color:`+white+` !important;} .Body, .WdgtCn, .WdgtCn .Title {background-color:`+black+`;color:`+white+`;} .CapiTnv>li>a {background-color:`+grey+`;} .CapiTnv>li.active>a {background-color:`+lgrey+`;box-shadow: inset 0 2px 0 `+blue+`;} .NwBxCn figure span{background-color:`+blue+`;} .fa-play::before, .fa-chevron-left::before ,.fa-th-list, .fa-eye-slash {color:`+blue+` !important} .Emision, .CapNv, .Rprt, .CVst, .Xpnd {background-color:`+grey+`;color:`+white+`;} .Emision a:hover {color:`+blue+` !important} @media (min-width: 1020px) {.CpCn.show .CpCnA:before, .CpCn.show .CpCnA:after {background-color:`+black+`}} .fa-facebook::before{color:`+fb+`;} .fa-youtube::before{color:`+red+`;}`
    let sS = document.createElement("style")
    sS.setAttribute("type", "text/css");
    sS.innerText = Style
    document.head.appendChild(sS)

    document.getElementsByClassName("ShrCnB fa-share-alt")[0].remove()
    document.getElementsByClassName("Clgt")[0].remove()
    document.getElementsByClassName("AnflvTl")[0].remove()
})();
