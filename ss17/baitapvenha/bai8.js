let textarea = document.getElementById("space");

let btn = document.getElementsByTagName("button")[0];

//window.addEventListener("load" , () => {

    let value = localStorage.getItem("draft");

    textarea.value = value;
//});

textarea.addEventListener("input" , () => {

    localStorage.setItem("draft", textarea.value);
});

btn.addEventListener("click" , () => {

    localStorage.clear();
    
    textarea.value = "";
});