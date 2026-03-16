
const form = document.getElementById("profileForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const resultDiv = document.getElementById("result");
const deleteBtn = document.getElementById("deleteBtn");


const showProfile = (profile) => {
  if (profile?.name && profile?.age) {
    resultDiv.innerHTML = `Tên: ${profile.name} | Tuổi: ${profile.age}`;
  } else {
    resultDiv.innerHTML = "Chưa có thông tin cá nhân";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age  = Number(ageInput.value);

  if (!name || isNaN(age) || age < 0) {
    alert("Vui lòng nhập tên và tuổi hợp lệ!");
    return;
  }

  const profile = { name, age };

  localStorage.setItem("myProfile", JSON.stringify(profile));
  showProfile(profile);

  nameInput.value = "";
  ageInput.value = "";
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("myProfile");
  showProfile(null);
  nameInput.value = "";
  ageInput.value = "";
});

window.addEventListener("load", () => {
  const savedData = localStorage.getItem("myProfile");

  if (savedData) {
    try {
      const profile = JSON.parse(savedData);
      showProfile(profile);
    } catch (error) {
      console.error("Dữ liệu profile bị lỗi:", error);
      localStorage.removeItem("myProfile");
      showProfile(null);
    }
  } else {
    showProfile(null);
  }
});

