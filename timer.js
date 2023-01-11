const meter = document.querySelector('meter');
let ms = 0,
	s = 10,
	m = 0;
let timer;

start();
function start() {
	if (!timer) {
		timer = setInterval(run, 10);
	}
}
function run() {
	meter.value = getTimer();
	ms++;
	if (ms == 100) {
		ms = 0;
		s--;
	}

	if (s == 0 && ms == 99) {
		stopTimer();
		btns.forEach((btn) => {
			btn.disabled = true;
		});
		console.error('time is up');
		displayModal();
		gameover.innerHTML = `Time is up! <br> Refresh the page.`;
	}
}
function stop() {
	stopTimer();
	ms = 0;
	s = 10;
	m = 0;
}
function stopTimer() {
	clearInterval(timer);
	timer = false;
}

function getTimer() {
	return s;
}
function restart() {
	stop();
	start();
}

meter.value = 0;
