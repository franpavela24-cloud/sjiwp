let canvas = document.getElementById("polje");
let ctx = canvas.getContext("2d");

// nebo
ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, 500, 250);

// polje
ctx.fillStyle = "green";
ctx.fillRect(0, 250, 500, 150);

// sunce
ctx.beginPath();
ctx.arc(80, 80, 40, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();

// ograda
ctx.strokeStyle = "blue";
ctx.strokeRect(100, 300, 300, 50);
ctx.fillStyle = "blue";
ctx.fillRect(100, 300, 300, 50);


