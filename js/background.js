const images = [
  '0.png',
  '1.jpg',
  '2.jpg',
  '3.png',
  '4.png',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.png',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;

document.body.append(bgImage);
