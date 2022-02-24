(()=>{"use strict";let e=[];null!==localStorage.getItem("taskList")&&(e=JSON.parse(localStorage.getItem("taskList")));const t=e;function n(e){localStorage.setItem("taskList",JSON.stringify(e))}class s{constructor(e){this.desc=e,this.completed=!1,t.length>0?this.index=t.at(-1).index+1:this.index=1;const s=t;s.push(this),n(s)}}function d(){const e=t,s=document.getElementById("list");s.innerHTML="",0===e.length?s.innerHTML="You have nothing left to do!":(e.forEach(((t,d)=>{let o="";const c=document.createElement("li");c.setAttribute("id",`task-${t.index}`),c.classList.add("task"),t.completed&&(o="checked",c.classList.add("task-done")),c.innerHTML=`<input type="checkbox" id="box-${t.index}" ${o}></input> <p>${t.desc}</p>`;const a=document.createElement("div");a.classList.add("manageTask"),a.innerHTML=`<div class="vertical-button"></div> <div class="edit-button off" id="edit-${d}"></div> <div class="delete-button off"></div>`,c.appendChild(a),s.appendChild(c),document.getElementById(`edit-${d}`).addEventListener("click",(()=>{const s=document.querySelector(`#task-${t.index} p`);s.setAttribute("contenteditable","true"),s.focus(),s.addEventListener("input",(()=>{t.desc=s.innerText,n(e)}))})),document.getElementById(`box-${t.index}`).addEventListener("change",(()=>{document.getElementById(`task-${t.index}`).classList.toggle("task-done"),e[d].completed=!t.completed,n(e)}))})),function(){const e=document.getElementsByClassName("vertical-button"),t=Array.from(e),n=document.getElementsByClassName("edit-button"),s=Array.from(n),d=document.getElementsByClassName("delete-button"),o=Array.from(d);t.forEach(((e,t)=>{e.addEventListener("click",(()=>{e.classList.toggle("off"),s[t].classList.toggle("off"),o[t].classList.toggle("off")}))}))}())}function o(e){const s=t;let d=0;e.forEach((e=>{s.splice(e-d,1),d+=1})),n(s)}const c=document.getElementById("addText");function a(){const e=document.getElementsByClassName("delete-button");Array.from(e).forEach(((e,t)=>{e.addEventListener("click",(()=>{const n=[];n.push(t),o(n),e.parentElement.parentElement.remove()}))}))}function i(){if(""!==c.value){new s(c.value);d(),c.value="",a()}}document.getElementById("clear-button").addEventListener("click",(()=>{!function(){const e=document.getElementsByClassName("task"),t=Array.from(e);let n=[];t.forEach(((e,t)=>{e.classList.contains("task-done")&&n.push(t)})),o(n),n=[],d(),a()}()})),c.addEventListener("click",(()=>{i()})),c.addEventListener("keypress",(e=>{"Enter"===e.key&&i()})),document.addEventListener("DOMContentLoaded",(()=>{d(),a()}))})();