// ==UserScript==
// @name		AnimeFLV - NoDistraction
// @namespace		https://github.com/Apryed/AnimeFLV_DarkMode
// @version		0.0.1
// @description		Removes AnimeFLV Right pannel and resize main content.
// @author		Apryed
// @match		https://www3.animeflv.net/ver/*
// @icon		https://www.google.com/s2/favicons?sz=64&domain=animeflv.net
// @downloadURL		https://raw.githubusercontent.com/Apryed/AnimeFLV_DarkMode/main/AnimeFLV_NoDistraction.user.js
// @updateURL		https://raw.githubusercontent.com/Apryed/AnimeFLV_DarkMode/main/AnimeFLV_NoDistraction.user.js
// @supportURL		https://github.com/Apryed/AnimeFLV_DarkMode/issues
// @run-at		document-end
// @grant		none
// ==/UserScript==

(function () {
	'use strict'
	// Removes Right Pannel - TikTock, News and Discord invitation
	document.querySelector("div.CpCnC").remove()
	// Resize main DIV to proper display width
	document.querySelectorAll("div.Container")[1].children[0].style.padding = "0"
	document.querySelectorAll("div.Container")[1].style.maxWidth = "100%"
	document.querySelectorAll("div.Container")[1].style.padding = "0 15%"
	document.querySelector(".CapiTop").style.padding = "0"
})()
