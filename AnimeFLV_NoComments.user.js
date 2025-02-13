// ==UserScript==
// @name			AnimeFLV - Comments Removal
// @namespace		https://github.com/Apryed/AnimeFLV_DarkMode
// @version			0.0.1
// @description		Removes AnimeFLV Comment section - Will try to remove everything from Disqus in due time
// @author			Apryed
// @match			https://www3.animeflv.net/ver/*
// @icon			https://www.google.com/s2/favicons?sz=64&domain=animeflv.net
// @downloadURL		https://raw.githubusercontent.com/Apryed/AnimeFLV_DarkMode/main/AnimeFLV_NoComments.user.js
// @updateURL		https://raw.githubusercontent.com/Apryed/AnimeFLV_DarkMode/main/AnimeFLV_NoComments.user.js
// @supportURL		https://github.com/Apryed/AnimeFLV_DarkMode/issues
// @run-at			document-end
// @grant			none
// ==/UserScript==

(function () {
	'use strict';
		document.querySelectorAll("div.WdgtCn[style='background: rgb(0, 0, 0);'")[1].remove()
	}
)();
