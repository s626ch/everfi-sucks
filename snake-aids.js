// ==UserScript==
// @name        lol-gg-ez-everfi
// @description i hate this and so do you, why not make it easier?
// @match       *://platform.everfi.net/curriculum/*
// @grant       GM_addStyle
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'enable disabled buttons</button>'
                ;
zNode.setAttribute ('id', 'myContainer', 'class', 'row');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    document.getElementsByClassName("button")[0].removeAttribute("disabled");
}


document.onmousedown=disableclick;
function disableclick(event)
{
if(event.button==2)
  {
      return false;
  }
}

//--- Style our newly added elements using CSS.
GM_addStyle ( `
    #myContainer {
            position: absolute;
    bottom: 0;
    left: 0;
    font-size: 20px;
    margin: 0px;
    opacity: 0.9;
    z-index: 1100;
    width: 100%;
    text-align: center;
    }
    #myButton {
        cursor:                 pointer;
        background:none;
        color:white;
        border:none;
        padding:                5px 20px;
        background:             black;
        border:                 3px solid white;
        -webkit-box-shadow: 0px 0px 50px -12px #000000;
        box-shadow: 0px 0px 50px -12px #000000;
        font-family: Helvetica Neue, monospace;
        width:100%;
    }
    /* span / a buttons */
#site-container .disabled, #site-container [disabled=disabled] {
    cursor: initial!important;
    pointer-events: initial!important;
    opacity: unset!important;
}
#site-container .navigate-links a.forward-link {
    background-color: #ea472c !important;
    color: #fff !important;
}
` );