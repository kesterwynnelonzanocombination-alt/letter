const message = `Good luck on your UPCAT tomorrow, my Fish! 🐠🤍

I'll be praying for you tonight for your peace, wisdom, and that God reminds you of everything you've worked so hard for.

Please remember that whatever the results may be, I'll always be proud of you! You don't have to be perfect, just do your best, because I already know how amazing you are.

I believe in you, and I know you can ace it! I'm always rooting for you.

Good luck, my Fish! 🫶🏻✨`;

const signature = `

From:
Di mo kilala. 😛🤍`;

let index = 0;
let sigIndex = 0;
let envelopeOpened = false;
let letterStarted = false;

const intro = document.getElementById("intro");
const envelopePage = document.getElementById("envelopePage");
const envelope = document.getElementById("envelope");
const photo = document.getElementById("photo");
const tapLetter = document.getElementById("tapLetter");
const messageBox = document.getElementById("message");
const signatureBox = document.getElementById("signature");
const endingHeart = document.getElementById("endingHeart");
const endingText = document.getElementById("endingText");

/* ---------- INTRO ---------- */

intro.addEventListener("click", () => {

    intro.style.pointerEvents = "none";

    introHearts();

    intro.style.opacity = "0";

    setTimeout(() => {

    photo.classList.add("show");

    setTimeout(() => {

        document.getElementById("title").classList.add("show");

        tapLetter.style.display = "block";

    }, 900);

}, 1200);

});

/* ---------- ENVELOPE ---------- */

envelope.addEventListener("click", () => {

    if(envelopeOpened) return;

    envelopeOpened = true;

    envelope.classList.add("open");

    setTimeout(() => {

        photo.classList.add("show");
        tapLetter.style.display = "block";

    }, 1200);

});

/* ---------- LETTER ---------- */

tapLetter.addEventListener("click", () => {

    if(letterStarted) return;

    letterStarted = true;

    tapLetter.style.display = "none";

    typeWriter();

});

/* ---------- TYPEWRITER ---------- */

function typeWriter(){

    if(index < message.length){

        messageBox.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,75);

    }else{

        setTimeout(typeSignature,800);

    }

}

/* ---------- SIGNATURE ---------- */

function typeSignature(){

    if(sigIndex < signature.length){

        signatureBox.innerHTML += signature.charAt(sigIndex);

        sigIndex++;

        setTimeout(typeSignature,75);

    }else{

        endingHeart.classList.add("show");

        setTimeout(()=>{

            endingText.classList.add("show");

        },1200);

    }

}

/* ---------- INTRO HEARTS ---------- */

function introHearts(){

    for(let i=0;i<18;i++){

        const heart=document.createElement("div");

        heart.className="heartTransition";

        heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

        heart.style.left=Math.random()*window.innerWidth+"px";

        heart.style.top=window.innerHeight+"px";

        heart.style.animationDelay=(Math.random()*0.5)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },1500);

    }

}

/* ---------- FLOATING HEARTS ---------- */

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML=["❤️","💕","💖","💗","💞"][Math.floor(Math.random()*5)];

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(18+Math.random()*18)+"px";
    heart.style.pointerEvents="none";
    heart.style.animation="floatUp 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,350);

/* ---------- HEART ANIMATION ---------- */

const style=document.createElement("style");

style.innerHTML=`
@keyframes floatUp{

0%{
transform:translateY(0) scale(.5);
opacity:1;
}

100%{
transform:translateY(-120vh) scale(1.5);
opacity:0;
}

}
`;

document.head.appendChild(style);
