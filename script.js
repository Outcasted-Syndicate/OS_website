console.log("JS loaded");

let loaded = false;

const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const progress = Math.min(scroll / 500, 1);

    const scale = 1 - progress * 0.7;

    logo.style.transform = `scale(${scale})`;
});



/*/*/
document.getElementById("susvidbtn").onclick = function () {
    if (loaded) return;

    document.getElementById("videoContainer").innerHTML = `
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      frameborder="0" 
      allow="autoplay"
      allowfullscreen>
    </iframe>
  `;

    loaded = true;
};
