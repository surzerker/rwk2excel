// ==UserScript==
// @name         RWK Map to Excel
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Tampermonkey userscript which adds a "Download as Excel" option to RWK maps pages. Approved by Glitchless for use on the map page.
// @author       Surzerker (S2)
// @match        https://rwk2.racewarkingdoms.com/msur.htm
// @match        https://rwk2.racewarkingdoms.com/mdun.htm
// @match        https://rwk2.racewarkingdoms.com/mhel.htm
// @match        https://rwk2.racewarkingdoms.com/mfor.htm
// @match        https://rwk2.racewarkingdoms.com/msky.htm
// @match        https://rwk2.racewarkingdoms.com/mhev.htm
// @match        https://rwk1.racewarkingdoms.com/msur.htm
// @match        https://rwk1.racewarkingdoms.com/mdun.htm
// @match        https://rwk1.racewarkingdoms.com/mhel.htm
// @match        https://rwk1.racewarkingdoms.com/mfor.htm
// @match        https://rwk1.racewarkingdoms.com/msky.htm
// @match        https://rwk1.racewarkingdoms.com/mhev.htm
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    var externalScriptUrl = 'https://surzerker.github.io/rwk2excel/rwk2excel_vanillajs.js';

    GM_xmlhttpRequest({
        method: 'GET',
        url: externalScriptUrl,
        onload: function(response) {
            var scriptElement = document.createElement('script');
            scriptElement.textContent = response.responseText;
            document.body.appendChild(scriptElement);
        },
        onerror: function(error) {
            console.error('Script loading failed:', error);
        }
    });
})();