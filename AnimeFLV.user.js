// ==UserScript==
// @name			AnimeFLV - Dark Mode
// @namespace		https://github.com/Apryed/AnimeFLV_DarkMode
// @version			2.2.61
// @description		Transforms AnimeFLV to Dark Mode!
// @author			Apryed
// @match			https://www3.animeflv.net/*
// @icon			https://www.google.com/s2/favicons?sz=64&domain=animeflv.net
// @downloadURL		https://raw.githubusercontent.com/Apryed/AnimeFLV_DarkMode/main/AnimeFLV.user.js
// @updateURL		https://raw.githubusercontent.com/Apryed/AnimeFLV_DarkMode/main/AnimeFLV.user.js
// @supportURL		https://github.com/Apryed/AnimeFLV_DarkMode/issues
// @run-at			document-end
// @grant			none
// ==/UserScript==

(function () {
	'use strict';
	let black = "#000000", grey = "#0A0A0A", lgrey = "#2A2A2A", blue = "#14bbf0", red = "#fb3447", white = "#FFFFFF", fb = "#4267B2", gold = "#ffc107"
	let Style = `:root {--c-black:`+black+`;--c-grey:`+grey+`;--c-lgrey:`+lgrey+`;--c-blue:`+blue+`;--c-blue38:`+blue+`38;--c-red:`+red+`;--c-white:`+white+`;--c-fb:`+fb+`;--c-gold:`+gold+`;}
    ::selection{background: var(--c-lgrey);color:var(--c-gold);}
	body{color:var(--c-white);background:var(--c-black);scrollbar-color:var(--c-lgrey) var(--c-grey);}
	body::-webkit-scrollbar{background:var(--c-grey);}
	body::-webkit-scrollbar-thumb{background:var(--c-lgrey);}

	.Header,.Footer {background:var(--c-grey);}
	.Header>.Mid{background:rgba(0,0,0,.3);}

	a, .Title{color:var(--c-white);}
	@media (max-width: 1020px) {
		.BtnMenu:before {color:var(--c-grey);}
		#BtnMenu:checked~label span {color:var(--c-blue);}
		#BtnMenu:checked~.BtnMenu:before {color:var(--c-gold);}
	}
	.Header>.Mid .Search>form input{background:var(--c-black);}
	.DpdwCnt.TtCn{background:var(--c-lgrey);}
	.DpdwCnt.TtCn:before{border-bottom:5px solid var(--c-lgrey);}
	.ListResult>li{border-bottom:1px solid var(--c-grey);}

	.Header>.Mid .Login #DpdwLnk-Login:checked+label {color: var(--c-black);}
	.Header>.Mid .Login #DpdwLnk-Login:checked+label span:before {color: var(--c-gold);}

	.ListUser>li>a:hover {background:var(--c-grey);}
	.ListUser>li>a.LogOut {background:var(--c-grey);}
	.ListUser>li:last-child{border-top:1px solid var(--c-gold);}
	.ListUser>li>a.LogOut:hover{background:#ff3146;}

	.Wdgt {background:var(--c-grey);}
	.Wdgt>.Top{border-bottom:1px solid var(--c-gold); color:var(--c-white);}
	.Wdgt>.Top[class*=fa-]:before{color:var(--c-blue);}

	.Title.Page h1, .Title.Page h2, .Title.Page h3, .Title.Page h4, .Title.Page h5, .Title.Page h6{color:var(--c-white);}
	.Title.Page.fa-star:before{color: var(--c-red)A0;}

	.Anime.alt .Image {background:var(--c-grey);box-shadow:0 3px 5px var(--c-blue38);}
	.Anime.alt>a>.Title{color:var(--c-white);}
	.Anime.alt.B .Description{background:var(--c-lgrey);color:var(--c-white);}
	.fa-facebook-f:before, .fa-facebook:before {color:var(--c-fb);}
	.fa-youtube:before {color:var(--c-red);}

	.Wdgt.User .Avatar .Name{color:var(--c-gold);}
	.fa-twitter:before {color:#1DA1F2;}
	.fa-google-plus:before {color:var(--c-red);}

	.btn-default{color:var(--c-white);background:var(--c-grey);border:0;}
    .btn-default:hover {color:var(--c-white);background:var(--c-black);border:0;}
    .btn-default:active, .btn-default.active, .open > .dropdown-toggle.btn-default {color:var(--c-gold);background:var(--c-black);border:0;}
	.btn-default:active:hover, .btn-default.active:hover, .open > .dropdown-toggle.btn-default:hover, .btn-default:active:focus, .btn-default.active:focus, .open > .dropdown-toggle.btn-default:focus, .btn-default:active.focus, .btn-default.active.focus, .open > .dropdown-toggle.btn-default.focus {color:inherit;}
	.filters .btn-group.open>button, .filters .btn-group button:hover, .filters .btn-group button:focus{background:var(--c-black) !important;color:inherit;}
	.filters .open .caret:before{color:var(--c-gold);}
	.dropdown-menu{background:var(--c-lgrey);}
	.filters .multiselect-container:before{border-bottom:5px solid var(--c-lgrey);}
	.filters .multiselect-container>li>a>label:before{color:var(--c-white);}
	.dropdown-menu>li>a{color:var(--c-white);}
	.filters .multiselect-container>li.active>a, .filters .multiselect-container>li.active>a>label:before {color:var(--c-gold);}
	.fa-filter:before {color:var(--c-gold);}
	.Anime.alt>.Title{color:var(--c-white);}
    .WdgtCn{background:var(--c-grey);}
	.WdgtCn .Anime.alt .Image, .WdgtCn .Anime.alt .Description{box-shadow:0 3px 5px var(--c-blue38);}
	.Anime.alt .Description .Title{color:var(--c-white);}
	.Anime.alt .Description{background:var(--c-lgrey);color:var(--c-white);}
	.Anime.alt .Description .Vts{color:var(--c-white);}
	.Anime.alt .Description p:before{color:var(--c-white);}
	.Anime.alt .Description:before{background: -moz-linear-gradient(top,var(--c-lgrey)00 0%,var(--c-lgrey)FF 100%);background: -webkit-linear-gradient(top,var(--c-lgrey)00 0%,var(--c-lgrey)FF 100%);background: linear-gradient(to bottom,var(--c-lgrey)00 0%,var(--c-lgrey)FF 100%);}

	.CpCn.show .CpCnA:before, .CpCn.show .CpCnA:after{background:var(--c-black);}
	.CpCnA .CapiTop .Title{color:var(--c-white);}
	.CpCnA .CapiTop .SubTitle{color:var(--c-gold);}
	.CapiTnv>li>a {background:var(--c-grey);}
	.CapiTnv>li>a:hover {color:var(--c-gold);}
	.CapiTnv>li.active>a {background:var(--c-lgrey);box-shadow: inset 0 2px 0 var(--c-blue);color:var(--c-blue);}
	.Emision, .CapNv, .Rprt, .CVst, .Xpnd {background-color:var(--c-grey);color:var(--c-white);}
	.Emision a:hover {color:var(--c-blue);}
	.CapNvPv:before, .CapNvNx:before{color:var(--c-gold);}
	.fa-eye::before, .fa-expand::before{color:var(--c-red);}
	.fa-eye-slash::before, .fa-compress::before{color:var(--c-blue);}
	.NwBxCn figure span{background:var(--c-blue);}
	.alertify .alert>*, .alertify .dialog>*{background:var(--c-black); border:1px solid var(--c-gold)20;box-shadow: 0 0 10px 0 var(--c-blue)5F;}
	.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button), .alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){color:var(--c-blue);background:var(--c-lgrey);}
	.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active, .alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover, .alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active, .alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover {background-color: var(--c-grey);}
	.Sidebar .list-group{border:1px solid var(--c-grey);}
	.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {background:var(--c-grey);border:1px solid var(--c-grey);}
	.list-group-item{background:var(--c-black);border:none;}
	a.list-group-item, button.list-group-item{color:var(--c-blue);}
	.panel-default{border:none;}
	.panel-default > .panel-heading {color:var(--c-white);background:var(--c-grey);border-color:var(--c-grey);}
    .panel-heading{padding: 10px 15px;}
	.panel{background:var(--c-black);border:1px solid var(--c-grey);border-radius:5px;}
	.form-group>label{color:var(--c-blue);}
	.form-control {color: var(--c-white);background:var(--c-grey);border: 1px solid var(--c-blue)38}
	input[type="date"]::-webkit-calendar-picker-indicator {filter: invert(1);}
	.ListAnmRel>li{color: inherit;}
	.ListAnmRel>li>a{color: var(--c-gold);}
    .ListAnmRel>li:before{color: inherit;}
	.ListAnmRel>li>a:hover{color:var(--c-blue);}
	.ListCaps>li>a:hover {color:var(--c-gold);}
	.BtnNw{background:var(--c-grey);color: var(--c-white);}
	#eSearch{border:1px solid var(--c-lgrey);color:var(--c-gold);}
	.lstopt-frm .btn {background:var(--c-blue);color:var(--c-black);}`
	let sS = document.createElement("style")
	sS.setAttribute("type", "text/css");
	sS.innerHTML = Style
	document.head.appendChild(sS)

	function margin() {
		if (this.classList[this.classList.length - 1] == "on") {
			document.querySelector(".CpCnC").style.margin = "60px 0 0 0";
		} else {
			document.querySelector(".CpCnC").removeAttribute("style");
		}
	}

	if (document.getElementsByClassName("lvbx")[0]) {
		document.getElementsByClassName("lvbx")[0].remove();
	}

	if (window.location.href.slice(26, 29) == "ver") {
		document.getElementsByClassName("ShrCnB fa-share-alt")[0].remove();
		document.getElementsByClassName("Clgt")[0].remove();
		document.querySelectorAll(".BtnNw.Xpnd.BxSdw.AAShwHdd-lnk")[0].addEventListener("click", margin);

		document.querySelectorAll(".WdgtCn").forEach((el) => { el.style.background = black })
	} else if (window.location.href.slice(26, 31) == "anime") {
		document.getElementById("episodeList").removeAttribute("style");
	} else {
		document.getElementsByClassName("AnflvTl")[0].remove();
		document.querySelectorAll(".WdgtCn").forEach((el) => { el.style.background = grey })
	}
})();
