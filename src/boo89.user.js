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
$(document).ready(function() {
	console.log("boo89:run");
	var split = /^(.*\/)(.*)$/.exec($('#yn-boo').attr('src'));
	console.log("boo89:split");
	if (split) {
		console.log("boo89:if-split");
		if (split[2] === 'default.png') {
			console.log("boo89:if-default");
			$('#yn-boo')
				.attr('src', GM_getResourceURL('boo89'));
		}
		else if (split[2] === 'sleep.png') {
			console.log("boo89:if-sleep");
			$('#yn-boo')
				.nextAll('.z0').attr('src', GM_getResourceURL('boo89-sleep-z0')).end()
				.nextAll('.z1').attr('src', GM_getResourceURL('boo89-sleep-z1')).end()
				.nextAll('.z2').attr('src', GM_getResourceURL('boo89-sleep-z2')).end()
				.attr('src', GM_getResourceURL('boo89-sleep'));
		}
	}
});
