// script.js

const sections = document.querySelectorAll(".section");

let current = 0;

// AUTO START AFTER LOADER
setTimeout(() => {
  nextSection();
}, 3000);

function nextSection() {

  sections[current].classList.remove("active");

  current++;

  if (current < sections.length) {
    sections[current].classList.add("active");

   
  }

}

// START BUTTON
document.getElementById("startBtn")
.addEventListener("click", () => {

    playMusic();
  nextSection();

});

// NEXT BUTTONS
document.querySelectorAll(".nextBtn")
.forEach(btn => {

  btn.addEventListener("click", () => {
    nextSection();
  });

});

// TYPEWRITER EFFECT
const message = `
Thank you for loving me,
supporting me,
and making my life brighter every single day.

You are my favorite person,
my safe place,
and my happiest memory.

Thank you for existing and for choosing to be part of my life.
I'm so proud of you and everything that you do.

I'll always be here for you,
cheering you on, supporting you, and loving you every step of the way.

Here's to many more birthdays, memories, and adventures together.

Happy Birthday, baby ❤️
`;

const typedText = document.getElementById("typedText");

let index = 0;

function typeWriter() {

  if(index < message.length) {

    typedText.innerHTML += message.charAt(index);

    index++;

    setTimeout(typeWriter, 40);

  }

}

// START TYPING WHEN LETTER OPENS
const observer = new MutationObserver(() => {

  if(document.getElementById("letter")
  .classList.contains("active")) {

    typeWriter();
    observer.disconnect();

  }

});

observer.observe(document.body, {
  attributes: true,
  subtree: true
});

// MUSIC
const music = document.getElementById("bgMusic");

function playMusic() {

  music.volume = 0.5;

  music.play().catch(() => {
    console.log("Autoplay blocked");
  });

}

// FIRST CHAT MODAL

const firstChatCard =
document.getElementById("firstChatCard");

const chatModal =
document.getElementById("chatModal");

const closeModal =
document.querySelector(".close-modal");

// OPEN MODAL
firstChatCard.addEventListener("click", () => {

  chatModal.classList.remove("hidden");

});

// CLOSE BUTTON
closeModal.addEventListener("click", () => {

  chatModal.classList.add("hidden");

});

// CLOSE WHEN CLICK OUTSIDE
chatModal.addEventListener("click", (e) => {

  if(e.target === chatModal) {

    chatModal.classList.add("hidden");

  }

});

const memoryItems = document.querySelectorAll(".memory-item");

const imageViewer = document.getElementById("imageViewer");
const viewerMainImg = document.getElementById("viewerMainImg");

const viewerClose = document.querySelector(".viewer-close");

memoryItems.forEach(item => {
  item.addEventListener("click", () => {

    const img = item.querySelector(".main-img");
    viewerMainImg.src = img.src;
    imageViewer.classList.remove("hidden");
  });
});

// Close button
viewerClose.addEventListener("click", () => {
  imageViewer.classList.add("hidden");
});

// Close when clicking background
imageViewer.addEventListener("click", (e) => {
  if (e.target === imageViewer) {
    imageViewer.classList.add("hidden");
  }
});

document.querySelectorAll(".gallery-img").forEach(img => {

  img.addEventListener("click", () => {

    viewerMainImg.src = img.src;
    imageViewer.classList.remove("hidden");

  });

});

document.getElementById("replayBtn")
.addEventListener("click", () => {

  location.reload();

});