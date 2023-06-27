function showModal() {
  document.querySelector(".background").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal(event) {
  event.preventDefault(); // 기본 동작 취소
  document.querySelector(".background").classList.remove("show");
  document.body.style.overflow = "auto";  // 스크롤 활성화
}

document.querySelector("#show").addEventListener("click", showModal);

document.querySelector("#close").addEventListener("click", closeModal);

// event: Event