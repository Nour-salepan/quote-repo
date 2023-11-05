const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("author");
const quoteBtn = document.getElementById("generateBtn");
const quoteLength = document.getElementById("quote-length");

async function getRendom() {
  const res = await fetch(" https://api.quotable.io/random");
  const quotes = await res.json();
  console.log(quotes);
  let { content, author, length } = quotes;
  quoteText.innerText = content;
  quoteAuthor.innerText = author;
  quoteLength.innerText = length;
}

quoteBtn.addEventListener("click", () => {
  getRendom();
});
