// const sourceLenguage = document.querySelector("#source-text");
// const btnTraslate = document.querySelector("#btn-traslate");
// const targetLenguage= document.querySelector("target-text")

// btnTraslate.onclick = async function(){
//   const encodedParams = new URLSearchParams();
//   encodedParams.append("source_language", "en");
//   encodedParams.append("target_language", "es");
//   encodedParams.append("text", inputText.value);

//   const response = await fetch(
//     "https://text-translator2.p.rapidapi.com/translate",
//     {
//       method: "POST",
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         'X-RapidAPI-Key': '00d1b35502msh5c025e0b6baf3f3p159f40jsnd0f6c152c6ee',
//         'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
//       },
//       body: encodedParams,
//     }
//   );
//   const data = await response.json();
//   console.log(data);
// };


// select
const targetLanguage = document.querySelector("#target-language");
const sourceLanguage = document.querySelector("#source-language");
sourceLanguage.focus();
// textarea
const sourceText = document.querySelector("#source-text");
const targetText = document.querySelector("#target-text");
// button
const btnTranslate = document.querySelector("#btn-translate");

async function getLanguages() {
  const response = await fetch(
    "https://text-translator2.p.rapidapi.com/getLanguages",
    {
      headers: {
        "X-RapidAPI-Key": "00d1b35502msh5c025e0b6baf3f3p159f40jsnd0f6c152c6ee",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  renderLanguages(data.data.languages, sourceLanguage);
  renderLanguages(data.data.languages, targetLanguage);
}

getLanguages();

function renderLanguages(languages, select) {
  languages.forEach((language) => {
    select.innerHTML += `<option value="${language.code}">${language.name}</option>`;
  });
}

sourceText.onkeypress = async function () {
  if (!sourceLanguage.value || !targetLanguage.value || !sourceText.value)
    return;

  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", sourceLanguage.value);
  encodedParams.append("target_language", targetLanguage.value);
  encodedParams.append("text", sourceText.value);

  const response = await fetch(
    "https://text-translator2.p.rapidapi.com/translate",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "00d1b35502msh5c025e0b6baf3f3p159f40jsnd0f6c152c6ee",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: encodedParams,
    }
  );
  const data = await response.json();

  targetText.value = data.data.translatedText;
};

