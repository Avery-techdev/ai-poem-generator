function generatePoem(event) {
    event.preventDefault();
  
    new Typewriter("#output", {
      strings: "In shadows soft, where moonlight gleams Whiskered whispers, in midnight dreams. Graceful prowlers, velvet paws, Cats dance silently, nature's applause.",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  let poemFormElement = document.querySelector("#input");
  poemFormElement.addEventListener("submit", generatePoem);