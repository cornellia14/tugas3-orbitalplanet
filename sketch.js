let angle = 0;
let planetRadius = 50;
let sunRadius = 100;
let stars = [];

function setup() {
  createCanvas(600, 600);
  background(0);

  // membuat 100 bintang secara acak
  for (let i = 0; i < 100; i++) {
    stars.push(createVector(random(width), random(height)));
  }
}

function draw() {
  // gambar latar belakang hitam dan bintang-bintang
  background(0);
  fill(255);
  for (let i = 0; i < stars.length; i++) {
    ellipse(stars[i].x, stars[i].y, 2, 2);
  }

  // gambar matahari
  fill(255, 255, 0);
  ellipse(width/2, height/2, sunRadius, sunRadius);

  // gambar planet
  let x = width/2 + sunRadius * cos(angle);
  let y = height/2 + sunRadius * sin(angle);
  fill(0, 0, 255);
  ellipse(x, y, planetRadius, planetRadius);

  angle += 0.01; // kecepatan orbit planet
}