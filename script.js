document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".pool");
  const centerCard = document.getElementById("auzi");

  // Center the 'auzi' card initially
  const centerCardPosition =
    centerCard.offsetLeft -
    scrollContainer.offsetWidth / 2 +
    centerCard.offsetWidth / 2;
  scrollContainer.scrollLeft = centerCardPosition;

  // Variables to track touch scrolling
  let isDown = false;
  let startX;
  let scrollLeft;

  // Event listeners for touch scrolling
  scrollContainer.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("touchend", () => {
    isDown = false;
  });

  scrollContainer.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Increase the factor to scroll faster
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
});
