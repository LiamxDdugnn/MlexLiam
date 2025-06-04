document.querySelectorAll(".avatar").forEach(function (avatar) {
    avatar.addEventListener("click", function () {
      document.querySelector(".popup").style.display = "flex";
    });
  });

  // Đóng popup khi click dấu X
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });

  // Đóng popup khi click ra ngoài nội dung
  document.querySelector(".popup").addEventListener("click", function (e) {
    if (e.target.classList.contains("popup")) {
      document.querySelector(".popup").style.display = "none";
    }
  });
