function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
}

function draw() {
    resizeCanvas(innerWidth, innerHeight);
    background(0);

    rect(mouseX - 50, mouseY - 50, 100, 100);
}
