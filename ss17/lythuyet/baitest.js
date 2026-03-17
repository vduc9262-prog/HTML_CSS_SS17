const form = document.getElementById("contact-form");
const NameInput = document.getElementById("contactName");
const phoneInput = document.getElementById("contact-phone");
const emailInput = document.getElementById("contact-email");
const tbodyInput = document.getElementById("contact-tbody");
const buttonEl = document.getElementsByClassName("btn-add")[0];

buttonEl.addEventListener("click", (e) => {
    e.preventDefault();
    if(NameInput.value == ""){
        alert("tên ko đc để trống ");
    } else if(NameInput.value.lenght < 2){
        alert("tên nhỏ hơn 2 ký tự !");
    }
     if(phoneInput.value == ""){
        alert("số ko đc để trống ");
     }
    
     if (phoneInput.value[0] !== "0"){
        alert("ký tự đầu tiên phải bắt đầu bằng 0 !");
    } else if (phoneInput.value.trim().lenght !== 10){
        alert("bắt buộc số điện thoại phải có 10 chứ số ");
    }
    if (emailInput.value == ""){
        alert("email ko đc để trống !");
    } else if (!emailInput.value.includes("@gmail.com")){
        alert("email ko đúng định dạng ! ");
    }

});

const showProfile = (profile) => {
  if (profile?.contactName && profile?.contact-phone && profile?.contact-email) {
    buttonEl.innerHTML = ` tên:  ${profile.contactName} | số Đt:  ${profile.contact-phone} | email:  ${profile.contact-email}`;
    alert("đã thêm thành công ! ")
  } else {
    alert("chưa có thông tin cá nhân !")
    buttonEl.innerHTML = "Chưa có thông tin cá nhân";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = NameInput.value.trim();
  const phone  = phoneInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || isNaN(phone) || phone < 0 || !email) {
    alert("Vui lòng nhập tên và tuổi hợp lệ!");
    return;
  }

  const profile = { name, phone, email };

  localStorage.setItem("myProfile", JSON.stringify(profile));
  showProfile(profile);

  NameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
});
