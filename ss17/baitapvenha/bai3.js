
const body = document.body;
const nut = document.getElementById("btn");

let doiTheme = (themeMoi)  =>  {
  if (themeMoi === "dark") {
    body.className = "dark";
  } else {
    body.className = "light";
  }
  localStorage.setItem("theme", themeMoi);
}

nut.onclick = h = () =>  {
  let hienTai = body.className;
  if (hienTai === "light") {
    doiTheme("dark");
  } else {
    doiTheme("light");
  }
};

