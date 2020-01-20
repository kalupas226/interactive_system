	// canvas要素のDOMオブジェクトを取得
	var canvas = document.getElementById("canvas1");
	// 描画コンテキストを取得する
	var context = canvas.getContext("2d");

	var mouseX = 0;
	function movehandler(event)
	{
		mouseX = event.clientX;
	}
	window.onmousemove = movehandler;

	var x = 10;
	var y = 10;
	var dx = 1;
	var dy = 2;

	var count = 0;

	function draw()
	{
		if (x > 400) {
			dx = -1;
		} else if (x < 0) {
			dx = 1;
		}

		if (y > 300) {
			dy = -2;
		} else if (y < 0) {
			dy = 2;
		}

		x = x + dx;
		y = y + dy;

		context.fillStyle = "rgb(192, 192, 255)";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(x, y, 5, 5);	// ball

		context.fillRect(mouseX, 250, 50, 3);	// pad

		context.fillText("" + count, 10, 280);

		if (y >= 250) {
			if (x >= mouseX && x <= mouseX + 50) {
				dy = -2;
				count = count + 1;
			} else {
				dy = 0;
				x = 0;
				y = 0;
				dx = 1;
				dy = 2;
				count = 0;
			}
		}
	}
	setInterval(draw, 10);

