let h1 = document.getElementsByTagName("h1")[0];
let btn = document.getElementById("btn");
let body = document.getElementsByTagName("body")[0];
let statusTheme = localStorage.getItem("Theme");
if (statusTheme == null) {
    localStorage.setItem("Theme", "light");
}
const render = () => {
    let getTheme = localStorage.getItem("Theme");
    if (getTheme == "light") {
        body.style.color = "black";
        body.style.backgroundColor = "white";
    }
    else if (getTheme == "dark") {
        body.style.color = "white";
        body.style.backgroundColor = "black";
    }
}
const changeTheme = () => {
    let statusTheme = localStorage.getItem("Theme");
    if (statusTheme == "light") {
        localStorage.setItem("Theme" , "dark");
    }
    else if (statusTheme == "dark") {
        localStorage.setItem("Theme", "light");
    }
    render();
}
btn.addEventListener("click", changeTheme);
render();