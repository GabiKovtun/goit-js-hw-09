const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");startChangeColor=()=>{console.log("start"),changeId=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0},stopChangeColor=()=>{t.disabled=!1,clearInterval(changeId)},t.addEventListener("click",startChangeColor),e.addEventListener("click",stopChangeColor);
//# sourceMappingURL=01-color-switcher.cbd7f630.js.map
