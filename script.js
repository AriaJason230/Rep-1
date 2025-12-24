function goToSlide(number) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));
  document.getElementById(`slide-${number}`).classList.add("active");
}
