const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const HH = document.getElementsByClassName("HH");

for(var i = 0; i <= HH.length; i++){
    HH[i].onmouseover = event => {
        let iterations = -1;
        const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }
        return letters[Math.floor(Math.random() * 26)]
        }).join("");

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1/5;
    }, 30);
    }
}