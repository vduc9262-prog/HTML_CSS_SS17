let count = localStorage.getItem("visit_count") | 0;

let countEl = document.getElementById("count");

window.addEventListener("load", () => {
    count++;
    localStorage.setItem("visit_count",count);
    countEl.innerText = count;
 
});