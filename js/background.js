const images = [
    "ai_image_0.png",
    "ai_image_1.png",
    "ai_image_2.png",
    "ai_image_3.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage);