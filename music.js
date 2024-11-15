const myAudio = document.getElementById("audio");
const btn = document.getElementById("btn-playback");
const btnIcon = document.querySelector("#btn-playback > i");
const btnText = document.getElementById("btn-text");

const toggleMusic = () => {
    const dataPlay = btn.getAttribute('data-play');

    if(dataPlay === 'false') {
        btn.setAttribute('data-play', 'true');
        myAudio.play();
        btnIcon.classList.remove("fa-play");
        btnIcon.classList.add("fa-pause");
        btnText.innerText = "BOY👦";
    } else {
        btn.setAttribute('data-play', 'false');
        myAudio.pause();
        btnIcon.classList.remove("fa-pause");
        btnIcon.classList.add("fa-play");
        btnText.innerText = "STAR😎";
    }
};