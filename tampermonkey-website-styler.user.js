// ==UserScript==
// @name         Animate MVP Styler
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change how a website looks when you show it
// @author       You
// @match        https://45.33.103.236/animatemvp/*
// @match        http://45.33.103.236/animatemvp/*
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

    // --- OPTION B: Run after page loads (for DOM changes) ---
    function applyChanges() {
        // Example: hide an element by selector
        // document.querySelector('.annoying-banner')?.remove();

        // Example: change text
        // const el = document.querySelector('h1');
        // if (el) el.textContent = 'My custom title';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyChanges);
    } else {
        applyChanges();
    }
})();
