// ==UserScript==
// @name         Animate MVP Styler
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Styling and branding changes for Animate demo
// @author       You
// @match        https://45.33.103.236/animatemvp/*
// @match        http://45.33.103.236/animatemvp/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
'use strict';

/* -------------------------------
   CSS Styling Overrides
--------------------------------*/

const style = document.createElement('style');
style.textContent = `

/* Replace green buttons with blue */
.btn-success,
button.btn-success {
    background:#2563eb !important;
    border-color:#2563eb !important;
}

.btn-success:hover{
    background:#1d4ed8 !important;
}

/* Create Account link */
a {
    color:#2563eb !important;
}

/* Login box glow */
.signin-container,
.login-container,
.form-signin,
.panel,
div[class*="signin"] {

    box-shadow:0 0 30px rgba(37,99,235,0.35) !important;
    border-radius:12px !important;

}

/* Slightly modernize inputs */
input.form-control{
    border-radius:6px !important;
}

/* Keep background image but darken overlay slightly */
body{
    background-color:#0f172a !important;
}

`;

document.head.appendChild(style);


/* -------------------------------
   Replace Animate text
--------------------------------*/

function replaceAnimateText(node){

    if(node.nodeType === Node.TEXT_NODE){

        if(node.textContent.includes('Animate')){
            node.textContent = node.textContent.replace(/\bAnimate\b/g,'Animate Cyber');
        }

    } else {

        node.childNodes.forEach(replaceAnimateText);

    }

}


/* -------------------------------
   Replace Page Title
--------------------------------*/

function updateTitle(){

    if(document.title && document.title.includes('Animate')){
        document.title = document.title.replace(/\bAnimate\b/g,'Animate Cyber');
    }

}


/* -------------------------------
   Update Logo Header
--------------------------------*/

function updateLogo(){

    const headers = document.querySelectorAll("h1,h2,.logo,.brand");

    headers.forEach(el => {

        if(el.textContent.trim() === "Animate"){

            el.innerHTML = `
            <div style="
                text-align:center;
                font-weight:600;
                letter-spacing:2px;
                line-height:1.2;
            ">
                ANIMATE
                <br>
                <span style="color:#2563eb;font-size:14px;">
                    CYBER
                </span>
            </div>
            `;

        }

    });

}


/* -------------------------------
   Apply Changes
--------------------------------*/

function applyChanges(){

    if(document.body){
        replaceAnimateText(document.body);
    }

    updateTitle();
    updateLogo();

}


/* Run once */
applyChanges();


/* Watch for dynamic UI updates */
const observer = new MutationObserver(() => {
    applyChanges();
});

observer.observe(document.body,{
    childList:true,
    subtree:true
});

})();
