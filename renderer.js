document.addEventListener("DOMContentLoaded", () => {
  const envelopes = document.querySelectorAll(".envelope, .envelope-train");
  const counter = document.getElementById("envelope-counter");
  let openedCount = 0;

  envelopes.forEach(envelope => {
    envelope.addEventListener("click", () => {
      if (envelope.classList.contains("opened")) return;

      envelope.classList.add("opened");
      envelope.style.opacity = "0";
      envelope.style.pointerEvents = "none";

      
      openedCount++;

      // Update the counter
      counter.textContent = `Collect the love letters: ${openedCount}/3`;

      if (openedCount === envelopes.length) {
        showFinalMessage();
      }
    });
  });

  function showFinalMessage() {
    const finalMessage = document.getElementById('final-message');
    finalMessage.style.display = 'block';

    const noBtn = document.getElementById('no-btn');
    let scale = 1;

    noBtn.addEventListener('click', () => {
      scale *= 0.8;
      noBtn.style.transform = `scale(${scale})`;
      if (scale < 0.3) noBtn.remove();
    });

    document.getElementById('yes-btn').addEventListener('click', () => {
      alert('❤️ Yay! ❤️');
    });
  }
});
