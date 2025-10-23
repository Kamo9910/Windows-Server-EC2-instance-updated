document.querySelectorAll(".myImage").forEach((img) => {
  img.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      img.requestFullscreen();
    }
  });
});