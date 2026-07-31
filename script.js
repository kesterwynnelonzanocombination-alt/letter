const message = `Good luck on your UPCAT tomorrow, my Fish! 🐠🤍

I'll be praying for you tonight for your peace, wisdom, and that God reminds you of everything you've worked so hard for.

Please remember that whatever the results may be, I'll always be proud of you! You don't have to be perfect, just do your best, because I already know how amazing you are.

I believe in you, and I know you can ace it! I'm always rooting for you.

Good luck, my Fish! 🫶🏻✨`;

let index = 0;
let opened = false;

const envelope = document.getElementById("envelope");
const messageBox = document.getElementById("message");

envelope.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

    setTimeout(typeWriter, 800);

});

function typeWriter(){

    if(index < message.length){

        messageBox.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,35);

    }

}

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = ["❤️","💕","💖","💗","💞"][Math.floor(Math.random()*5)];

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.pointerEvents="none";
    heart.style.animation="floatUp 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),6000);

}

setInterval(createHeart,300);

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
