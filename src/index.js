function displayPoem(response) {
  new Typewriter("#output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
} 
  function generatePoem(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "fa02684f7db0feb365o91eta3c0acd12";
    let context =
      "You are a Poem expert and love to write short poems. Your mission is to generate a 4 line poem. Make sure to follow the user instructions. Do not include a title to the poem.";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#output");
    // poemElement.classList.remove("hidden");
    //poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayPoem);
  }
  
  let poemFormElement = document.querySelector("#input");
  poemFormElement.addEventListener("submit", generatePoem);