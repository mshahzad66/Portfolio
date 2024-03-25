let words = document.querySelectorAll(".word");

words.forEach((word) =>{
    let letters = word.textContent.split("");
    word.textContent = "";

    letters.forEach((letter) =>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append (span);
        
    })
})

let currentwordindex = 0;
let maxwordIndex = words.length -1;

words[currentwordindex].style.opacity = "1";

let changetext = () =>{
    let currentword = words[currentwordindex];
    let nextword = currentwordindex === maxwordIndex ? words[0] : words[currentwordindex + 1];

Array.from(currentword.children).forEach((letter,i)  =>{
    setTimeout(() => {
        letter.className  = "letter out";
    },i * 80);
});

nextword.style.opacity = "1";

Array.from(nextword.children).forEach((letter,i)  =>{
    letter.className = "letter behind";
    setTimeout(() => {
        letter.className  = "letter in";
    },340 + i * 80);

});
currentwordindex = currentwordindex === maxwordIndex ? 0 : currentwordindex  + 1;
};

changetext()
setInterval(changetext,3000)