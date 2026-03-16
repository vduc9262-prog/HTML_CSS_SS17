let inputName = document.getElementById("name");

let buttonSubmit = document.getElementById("buttonSubmit");

let body = document.getElementsByTagName("body")[0]; // gọi từ vị trí 0 giống mảng nhưng ko nói là mảng 
buttonSubmit.addEventListener("click", () => {
    let valueInput = inputName.value 
    localStorage.setItem("name",valueInput)

    let pElement=document.createElement("p")
    pElement.textContent=`Hello ${inputName.value}` 
    body.appendChild(pElement)
});




