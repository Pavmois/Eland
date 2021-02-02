ram();
x = document.getElementById("canvas").width * 0,5;
y = document.getElementById("canvas").height * 0.5;

// При нажатии шарики плывут к курсору
document.addEventListener('mousedown', e => {
	x = e.offsetX;
	y = e.offsetY;
  });

// Шарики следуют за курсором
document.addEventListener("mousemove", function (a) {
	x = a.clientX;
	y = a.clientY;
}, 0);

// Определение массива с шариками, их к-вом и свойствами
l = [];
i = 0;
while (++i < 150) {
	p = {
		x: x,
		y: y,
		z: x,
		v: y,
		size: 10 + Math.random(), // размер шариков
		a: 0,
		b: 0.01 + Math.random() * 0.04, // Разрброс шариков
		f: "#" + (Math.random() * 4210752 + 11184810 | 0).toString(16), //выбора цветовой палитры 
		o: 55 + (55 * Math.random()) // Диаметр кольца вокруг которого шарики кружатся
	};
	l.push(p)
}

// Определение интервала вызова функции + вся механика шариков
setInterval(function () {
	document.getElementById("canvas").getContext("2d").fillStyle = "#837f7f";
	document.getElementById("canvas").getContext("2d").fillRect(0, 0, document.getElementById("canvas").width, document.getElementById("canvas").height); //очищение холста
	i = 0;
	while (p = l[++i]) {
		l.p = {
			x: p.x,
			y: p.y
		};
		p.a += p.b;
		p.z += (x - p.z) * p.b;
		p.v += (y - p.v) * p.b;
		p.x = p.z + Math.cos(i + p.a) * p.o;
		p.y = p.v + Math.sin(i + p.a) * p.o;
		p.x = Math.max(Math.min(p.x, document.getElementById("canvas").width), 0);
		p.y = Math.max(Math.min(p.y, document.getElementById("canvas").height), 0);
		with(document.getElementById("canvas").getContext("2d")) {
			beginPath();
			fillStyle = p.f;
			lineWidth = p.size;
			moveTo(p.x, p.y);
			arc(p.x, p.y, p.size / 2, 0, Math.PI * 2,); 
			fill()  
		}
	}
}, 10);

function ram() {
	document.getElementById("canvas").width = document.documentElement.clientWidth;
	document.getElementById("canvas").height = document.documentElement.clientHeight;
};