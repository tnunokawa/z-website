document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slider-track img');
  let current = 0;

  function slideToNext() {
    current = (current + 1) % slides.length;
    const offset = -current * 100;
    track.style.transform = `translateX(${offset}vw)`;
  }

  setInterval(slideToNext, 4000); // 3秒静止 + 0.5秒スライド
});
