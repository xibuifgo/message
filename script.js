const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "OH YAAAAAAAAAAA! <br> I know you're upset but trust me you've got this";
  gif.src =
    "https://media.giphy.com/media/SkAkim7JbUG01dGzQ0/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  original_src = "https://media.giphy.com/media/cbOun7SXza6TpmyUTZ/giphy.gif";
  original_text = question.innerHTML;

  gif.src = 
  "https://media.giphy.com/media/Yt6GOxCQYXXevSZu4U/giphy.gif";

  question.innerHTML = "WHATTTTTTTTTTTTTTTT";

  setTimeout(function() {
    question.innerHTML = "Try again";
  }, 2000);

  setTimeout(function() {
    gif.src = original_src;
    question.innerHTML = original_text;
  }, 4000);
});