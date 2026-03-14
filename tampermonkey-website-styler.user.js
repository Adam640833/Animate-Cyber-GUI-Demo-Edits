// ==UserScript==
// @name         Animate MVP Styler
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Change how a website looks when you show it
// @author       You
// @match        https://45.33.103.236/animatemvp*
// @match        http://45.33.103.236/animatemvp*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Adam640833/Animate-Cyber-GUI-Demo-Edits/main/tampermonkey-website-styler.user.js
// @downloadURL  https://raw.githubusercontent.com/Adam640833/Animate-Cyber-GUI-Demo-Edits/main/tampermonkey-website-styler.user.js
// ==/UserScript==

(function() {
    'use strict';

    // --- OPTION A: Inject custom CSS ---
    const style = document.createElement('style');
    style.textContent = `
        /* Add your CSS below. Examples: */

        /* Change background */
        /* body { background: #1a1a2e !important; } */

        /* Hide something by class or id */
        /* .ads, #sidebar { display: none !important; } */

        /* Change fonts/colors */
        /* body { font-family: 'Georgia', serif !important; color: #eee !important; } */
    `;
    document.head.appendChild(style);

    // --- Replace "Animate" with "Animate Cyber" on login/page ---
    function replaceAnimateWithAnimateCyber(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.includes('Animate')) {
                node.textContent = node.textContent.replace(/\bAnimate\b/g, 'Animate Cyber');
            }
        } else {
            node.childNodes.forEach(replaceAnimateWithAnimateCyber);
        }
    }

    function applyChanges() {
        // Page title
        if (document.title && document.title.includes('Animate')) {
            document.title = document.title.replace(/\bAnimate\b/g, 'Animate Cyber');
        }
        // All text on the page (login and elsewhere)
        replaceAnimateWithAnimateCyber(document.body);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyChanges);
    } else {
        applyChanges();
    }
})();
