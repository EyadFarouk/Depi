let imgs = ["img1", "img2", "img3"];
let i=0;
setInterval(() => {
    let img = document.querySelector("img");
    i = i % imgs.length;
    img.src = `Imgs/${imgs[i]}.jpg`;
    img.alt = `This is image number ${i+1}`;
    i++;
}, 1000);