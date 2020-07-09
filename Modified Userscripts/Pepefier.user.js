// ==UserScript==
// @name         Pepefier
// @namespace    https://mhofutheweirdo.github.io/ or https://github.com/mhofutheweirdo
// @version      1.0
// @description  Replaces all images with Pepe the frog
// @author       Mhofuthefrickingweirdo
// @match        https://*/*
// @match        http://*/*
// @grant        all
// ==/UserScript==

Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){
	el.src = 'https://i.kym-cdn.com/entries/icons/original/000/017/618/pepefroggie.jpg';
});

