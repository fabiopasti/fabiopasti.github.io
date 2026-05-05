document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;

    function changeSlide(direction) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    document.querySelector(".prev").onclick = () => changeSlide(-1);
    document.querySelector(".next").onclick = () => changeSlide(1);

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") changeSlide(-1);
        if (event.key === "ArrowRight") changeSlide(1);
    });
});
