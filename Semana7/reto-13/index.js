const inputText = document.querySelector("#text-input");
const btnTraslate = document.querySelector("#btn-traslate");

btnTraslate.onclick = async function(){
  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", "en");
  encodedParams.append("target_language", "es");
  encodedParams.append("text", inputText.value);

  const response = await fetch(
    "https://text-translator2.p.rapidapi.com/translate",
    {
      method: "POST",
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '00d1b35502msh5c025e0b6baf3f3p159f40jsnd0f6c152c6ee',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: encodedParams,
    }
  );
  const data = await response.json();
  console.log(data);
};