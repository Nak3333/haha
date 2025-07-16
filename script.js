document.getElementById("heart").addEventListener("click", function () {
  const heart = this;
  heart.classList.add("break");

  // Wait for animation to finish, then redirect
  setTimeout(() => {
    window.location.href = "broken.html";
  }, 800); // Duration matches the animation time
});
