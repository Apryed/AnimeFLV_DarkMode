// ==UserScript==
// @name         AnimeFLV - Dark Mode
// @namespace    https://github.com/Apryed/AnimeFLV_DarkMode
// @version      2.2.1
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

(function () {
	'use strict';

	let black = "#000000", grey = "#0A0A0A", lgrey = "#2A2A2A", blue = "#14bbf0", red = "#fb3447", white = "#FFFFFF", fb = "#4267B2", gold = "#ffc107"

	let Style = `
	::selection{background:`+ lgrey + `;color:` + gold + `}
	body{color:`+ white + `;background:` + black + `;scrollbar-color:` + lgrey + ` ` + grey + `}
	body::-webkit-scrollbar{background:`+ grey + `;}
	body::-webkit-scrollbar-thumb{background:`+ lgrey + `;}

	.Header,.Footer {background:`+ grey + `;}
	.Header>.Mid{background:rgba(0,0,0,.3);}

	a, .Title{color:`+ white + `}
	@media (max-width: 1020px) {
		.BtnMenu:before {color:`+ grey + `}
		#BtnMenu:checked~label span {color:`+ blue + `}
		#BtnMenu:checked~.BtnMenu:before {color:`+ gold + `}
	}
	.Header>.Mid .Search>form input{background:`+ black + `;}
	.DpdwCnt.TtCn{background:`+ lgrey + `;}
	.DpdwCnt.TtCn:before{border-bottom:5px solid `+ lgrey + `}
	.ListResult>li{border-bottom:1px solid `+ grey + `}

	.Header>.Mid .Login #DpdwLnk-Login:checked+label {color: `+ black + `;}
	.Header>.Mid .Login #DpdwLnk-Login:checked+label span:before {color: `+ gold + `;}

	.ListUser>li>a:hover {background:`+ grey + `;}
	.ListUser>li>a.LogOut {background:`+ grey + `;}
	.ListUser>li:last-child{border-top:1px solid `+ gold + `;}
	.ListUser>li>a.LogOut:hover{background:#ff3146;}

	.Wdgt {background:`+ grey + `;}
	.Wdgt>.Top{border-bottom:1px solid `+ gold + `; color:` + white + `;}
	.Wdgt>.Top[class*=fa-]:before{color:`+ blue + `;}

	.Title.Page h1, .Title.Page h2, .Title.Page h3, .Title.Page h4, .Title.Page h5, .Title.Page h6{color:`+ white + `;}
	.Title.Page.fa-star:before{color: `+ red + `A0;}

	.Anime.alt .Image {background:`+ grey + `;box-shadow:0 3px 5px ` + blue + `38;}
	.Anime.alt>a>.Title{color:`+ white + `;}
	.Anime.alt.B .Description{background:`+ lgrey + `;color:` + white + `;}
	.fa-facebook-f:before, .fa-facebook:before {color:`+ fb + `;}
	.fa-youtube:before {color:`+ red + `;}

	.Wdgt.User .Avatar .Name{color:`+ gold + `;}
	.fa-twitter:before {color:#1DA1F2;}
	.fa-google-plus:before {color:`+ red + `;}

	.btn-default{color:`+ white + `;background:` + lgrey + `;border-color:` + white + `;}
	.btn-default:active:hover, .btn-default.active:hover, .open > .dropdown-toggle.btn-default:hover, .btn-default:active:focus, .btn-default.active:focus, .open > .dropdown-toggle.btn-default:focus, .btn-default:active.focus, .btn-default.active.focus, .open > .dropdown-toggle.btn-default.focus {color:inherit;}
	.filters .btn-group.open>button, .filters .btn-group button:hover, .filters .btn-group button:focus{background:`+ black + ` !important;color:inherit;}
	.filters .open .caret:before{color:`+ gold + `;}
	.dropdown-menu{background:`+ lgrey + `;}
	.filters .multiselect-container:before{border-bottom:5px solid `+ lgrey + `;}
	.filters .multiselect-container>li>a>label:before{color:`+ white + `;}
	.dropdown-menu>li>a{color:`+ white + `;}
	.filters .multiselect-container>li.active>a, .filters .multiselect-container>li.active>a>label:before {color:`+ gold + `;}
	.fa-filter:before {color:`+ gold + `;}
	.Anime.alt>.Title{color:`+ white + `;}
	.WdgtCn .Anime.alt .Image, .WdgtCn .Anime.alt .Description{box-shadow:0 3px 5px `+ blue + `38;}
	.Anime.alt .Description .Title{color:`+ white + `;}
	.Anime.alt .Description{background:`+ lgrey + `;color:` + white + `;}
	.Anime.alt .Description .Vts{color:`+ white + `;}
	.Anime.alt .Description p:before{color:`+ white + `;}
	.Anime.alt .Description:before{background: -moz-linear-gradient(top,`+ lgrey + `00 0%,` + lgrey + `FF 100%);background: -webkit-linear-gradient(top,` + lgrey + `00 0%,` + lgrey + `FF 100%);background: linear-gradient(to bottom,` + lgrey + `00 0%,` + lgrey + `FF 100%);}

	.CpCn.show .CpCnA:before, .CpCn.show .CpCnA:after{background:`+ black + `;}
	.CpCnA .CapiTop .Title{color:`+ white + `;}
	.CpCnA .CapiTop .SubTitle{color:`+ gold + `;}
	.CapiTnv>li>a {background:`+ grey + `;}
	.CapiTnv>li.active>a {background:`+ lgrey + `;box-shadow: inset 0 2px 0 ` + blue + `;}
	.Emision, .CapNv, .Rprt, .CVst, .Xpnd {background-color:`+ grey + `;color:` + white + `;}
	.Emision a:hover {color:`+ blue + `}
	.CapNvPv:before, .CapNvNx:before{color:`+ gold + `}
	.fa-eye::before, .fa-expand::before{color:`+ red + `}
	.fa-eye-slash::before, .fa-compress::before{color:`+ blue + `}
	.NwBxCn figure span{background:`+ blue + `}
	`
	let sS = document.createElement("style")
	sS.setAttribute("type", "text/css");
	sS.innerText = Style
	document.head.appendChild(sS)

	function margin() {
		if (this.classList[this.classList.length - 1] == "on") {
			document.querySelector(".CpCnC").style.margin = "60px 0 0 0";
		} else {
			document.querySelector(".CpCnC").removeAttribute("style");
		}
	}

	document.querySelectorAll(".BtnNw.Xpnd.BxSdw.AAShwHdd-lnk")[0].addEventListener("click", margin);

	if (document.getElementsByClassName("lvbx")[0]) {
		document.getElementsByClassName("lvbx")[0].remove();
	}

	if (window.location.href.slice(26, 29) == "ver") {
		document.getElementsByClassName("ShrCnB fa-share-alt")[0].remove();
		document.getElementsByClassName("Clgt")[0].remove();

		document.querySelectorAll(".WdgtCn").forEach((el) => { el.style.background = black })
	} else {
		document.getElementsByClassName("AnflvTl")[0].remove();
		document.querySelectorAll(".WdgtCn").forEach((el) => { el.style.background = grey })
	}
})();
