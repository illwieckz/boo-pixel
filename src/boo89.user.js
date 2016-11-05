// ==UserScript==
// @name              Boo89
// @name:fr-FR        Boo89
// @namespace         http://www.yaronet.com/gmscripts
// @description       Display a pixelated Boo with grey level (like on a TI 89 calculator) instead of the default one.
// @description:fr-FR Affiche un Boo pixelisé en niveaux de gris (comme sur une calculatrice TI 89) à la place de celui par défaut.
// @version           1
// @include           /^https?://www\.yaronet\.com/.*$/
// @icon              boo89.png
// @resource          boo89.png          boo89.png
// @resource          sleep.png    boo89-sleep.png
// @resource          sleep-z0.png boo89-sleep-z0.png
// @resource          sleep-z1.png boo89-sleep-z1.png
// @resource          sleep-z2.png boo89-sleep-z2.png
// @grant             GM_getResourceURL
// ==/UserScript==

// The sleep-z#.png images are loaded by an already existing script (…/layout/html/page.js),
// computing path from existing image path if it ends with “.png” so there is no need to care
// about them. Also, since these images are loaded by a script at run-time, we can't substitute
// them when DOMContentLoaded occurs (document-end). It's better to let the already running
// script do it, feeding it with what it looks for. That's also why we named the resources with
// file extension even if GreaseMonkey does not require it.

//document.addEventListener("DOMContentLoaded", function(event) {
	var elemBoo = document.getElementById('yn-boo')
	var currentBoo = elemBoo.getAttribute('src').split('/').pop();
	if (currentBoo) {
		if (currentBoo === 'default.png') {
			console.log(GM_getResourceURL('boo89'));
			elemBoo.setAttribute('src', GM_getResourceURL('boo89.png'));
		}
	else if (currentBoo === 'sleep.png') {
			elemBoo.setAttribute('src', GM_getResourceURL('sleep.png'));
		}
	}
//};
