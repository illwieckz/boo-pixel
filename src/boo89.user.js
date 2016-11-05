// ==UserScript==
// @name              Boo89
// @name:fr-FR        Boo89
// @namespace         http://www.yaronet.com/gmscripts
// @description       Display a pixelated Boo with grey level (like on a TI 89 calculator) instead of the default one.
// @description:fr-FR Affiche un Boo pixelisé en niveaux de gris (comme sur une calculatrice TI 89) à la place de celui par défaut.
// @version           1
// @include           /^https?://www\.yaronet\.com/.*$/
// @icon              boo89.png
// @resource          boo89.png      boo89.png
// @resource          sleep.png      boo89-sleep.png
// @resource          sleep-z0.png   boo89-sleep-z0.png
// @resource          sleep-z1.png   boo89-sleep-z1.png
// @resource          sleep-z2.png   boo89-sleep-z2.png
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
			elemBoo.setAttribute('src', GM_getResourceURL('boo89.png'));
		}
		else if (currentBoo === 'sleep.png') {
			console.log("boo89:if-sleep");
//			changeNextSiblings("z0");
//			changeNextSiblings("z1");
//			changeNextSiblings("z2");
			elemBoo.setAttribute('src', GM_getResourceURL('sleep.png'));
		}
	}

//	function changeNextSiblings(zzz) {
//		console.log("plop-" + zzz);
//		var list = document.getElementsByClassName(zzz);
//		console.log(list);
//		for (var i = 0; i < list.length; i++) {
//			var el = list[i];
//			while (el = el.nextSibling) {
//				el.setAttribute('src', GM_getResourceURL('boo89-sleep-' + zzz));
//			}
//		}
//	}
});
