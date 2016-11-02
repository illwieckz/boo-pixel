// ==UserScript==
// @name              Boo89
// @name:fr-FR        Boo89
// @namespace         http://www.yaronet.com/gmscripts
// @description       Display a pixelated Boo with grey level (like on a TI 89 calculator) instead of the default one.
// @description:fr-FR Affiche un Boo pixelisé en niveaux de gris (comme sur une calculatrice TI 89) à la place de celui par défaut.
// @version           1
// @include           /^https?://www\.yaronet\.com/.*$/
// @icon              boo89.png
// @resource          boo89          boo89.png
// @resource          boo89-sleep    boo89-sleep.png
// @resource          boo89-sleep-z0 boo89-sleep-z0.png
// @resource          boo89-sleep-z1 boo89-sleep-z1.png
// @resource          boo89-sleep-z2 boo89-sleep-z2.png
// @grant             GM_getResourceURL
// ==/UserScript==

console.log("boo89:load");
document.addEventListener("DOMContentLoaded", function(event) {
	console.log("boo89:run");
	var elemBoo = document.getElementById('yn-boo')
	var currentBoo = elemBoo.getAttribute('src').split('/').pop();
	console.log(currentBoo);
	if (currentBoo) {
		console.log("boo89:if-split");
		if (currentBoo === 'default.png') {
			console.log("boo89:if-default");
			console.log(GM_getResourceURL('boo89'));
			elemBoo.setAttribute('src', GM_getResourceURL('boo89'));
		}
		else if (currentBoo === 'sleep.png') {
			console.log("boo89:if-sleep");
			changeNextSiblings(elemBoo, "z0");
			changeNextSiblings(elemBoo, "z1");
			changeNextSiblings(elemBoo, "z2");
			elemBoo.setAttribute('src', GM_getResourceURL('boo89-sleep'));
		}
	}

	function changeNextSiblings(elemBoo, zzz) {
		var list = elemBoo.getElementsByClassName("." + zzz);
		for (var i = 0; i < list.length; i++) {
			var el = list[i];
			while (el = el.nextSibling) {
				el.setAttribute('src', GM_getResourceURL('boo89-sleep-' + zzz));
			}
		}
	}
});
