const btns = [...document.querySelectorAll('.btns')];
const hearts = [...document.querySelectorAll('i')];
const syllElement = document.querySelector('#syllElement');
let container = document.body;
let lives = 3;
const hiraganaSylls = [
	{
		syllable: 'あ',
		answer: 'a',
	},
	{
		syllable: 'い',
		answer: 'i',
	},
	{
		syllable: 'う',
		answer: 'u',
	},
	{
		syllable: 'え',
		answer: 'e',
	},
	{
		syllable: 'お',
		answer: 'o',
	},
	//ka
	{
		syllable: 'か',
		answer: 'ka',
	},
	{
		syllable: 'き',
		answer: 'ki',
	},
	{
		syllable: 'く',
		answer: 'ku',
	},
	{
		syllable: 'け',
		answer: 'ke',
	},
	{
		syllable: 'こ',
		answer: 'ko',
	},
	//sa
	{
		syllable: 'さ',
		answer: 'sa',
	},
	{
		syllable: 'し',
		answer: 'shi',
	},
	{
		syllable: 'す',
		answer: 'su',
	},
	{
		syllable: 'せ',
		answer: 'se',
	},
	{
		syllable: 'そ',
		answer: 'so',
	},
	//ta
	{
		syllable: 'た',
		answer: 'ta',
	},
	{
		syllable: 'ち',
		answer: 'chi',
	},
	{
		syllable: 'つ',
		answer: 'tsu',
	},
	{
		syllable: 'て',
		answer: 'te',
	},
	{
		syllable: 'と',
		answer: 'to',
	},
	//na
	{
		syllable: 'な',
		answer: 'na',
	},
	{
		syllable: 'に',
		answer: 'ni',
	},
	{
		syllable: 'ぬ',
		answer: 'nu',
	},
	{
		syllable: 'ね',
		answer: 'ne',
	},
	{
		syllable: 'の',
		answer: 'no',
	},
	//ha
	{
		syllable: 'は',
		answer: 'ha',
	},
	{
		syllable: 'ひ',
		answer: 'hi',
	},
	{
		syllable: 'ふ',
		answer: 'fu',
	},
	{
		syllable: 'へ',
		answer: 'he',
	},
	{
		syllable: 'ほ',
		answer: 'ho',
	},
	//ma
	{
		syllable: 'ま',
		answer: 'ma',
	},
	{
		syllable: 'み',
		answer: 'mi',
	},
	{
		syllable: 'む',
		answer: 'mu',
	},
	{
		syllable: 'め',
		answer: 'me',
	},
	{
		syllable: 'も',
		answer: 'mo',
	},
	//ya
	{
		syllable: 'や',
		answer: 'ya',
	},
	{
		syllable: 'ゆ',
		answer: 'yu',
	},
	{
		syllable: 'よ',
		answer: 'yo',
	},
	//ra
	{
		syllable: 'ら',
		answer: 'ra',
	},
	{
		syllable: 'り',
		answer: 'ri',
	},
	{
		syllable: 'る',
		answer: 'ru',
	},
	{
		syllable: 'れ',
		answer: 're',
	},
	{
		syllable: 'ろ',
		answer: 'ro',
	},
	//wa
	{
		syllable: 'わ',
		answer: 'wa',
	},
	{
		syllable: 'を',
		answer: 'wo',
	},
	//n/ng/m
	{
		syllable: 'ん',
		answer: 'ng/m/n',
	},
	//ga
	{
		syllable: 'が',
		answer: 'ga',
	},
	{
		syllable: 'ぎ',
		answer: 'gi',
	},
	{
		syllable: 'ぐ',
		answer: 'gu',
	},
	{
		syllable: 'げ',
		answer: 'ge',
	},
	{
		syllable: 'ご',
		answer: 'go',
	},
	//za
	{
		syllable: 'ざ',
		answer: 'za',
	},
	{
		syllable: 'じ',
		answer: 'ji',
	},
	{
		syllable: 'ず',
		answer: 'zu',
	},
	{
		syllable: 'ぜ',
		answer: 'ze',
	},
	{
		syllable: 'ぞ',
		answer: 'zo',
	},
	//da
	{
		syllable: 'だ',
		answer: 'da',
	},
	{
		syllable: 'ぢ',
		answer: 'dzi',
	},
	{
		syllable: 'づ',
		answer: 'dzu',
	},
	{
		syllable: 'で',
		answer: 'de',
	},
	{
		syllable: 'ど',
		answer: 'do',
	},
	//ba
	{
		syllable: 'ば',
		answer: 'ba',
	},
	{
		syllable: 'び',
		answer: 'bi',
	},
	{
		syllable: 'ぶ',
		answer: 'bu',
	},
	{
		syllable: 'べ',
		answer: 'be',
	},
	{
		syllable: 'ぼ',
		answer: 'bo',
	},
	//pa
	{
		syllable: 'ぱ',
		answer: 'pa',
	},
	{
		syllable: 'ぴ',
		answer: 'pi',
	},
	{
		syllable: 'ぷ',
		answer: 'pu',
	},
	{
		syllable: 'ぺ',
		answer: 'pe',
	},
	{
		syllable: 'ぽ',
		answer: 'po',
	},
	//ky
	{
		syllable: 'きゃ',
		answer: 'kya',
	},
	{
		syllable: 'きゅ',
		answer: 'kyu',
	},
	{
		syllable: 'きょ',
		answer: 'kyo',
	},
	//sh
	{
		syllable: 'しゃ',
		answer: 'sha',
	},
	{
		syllable: 'しゅ',
		answer: 'shu',
	},
	{
		syllable: 'しょ',
		answer: 'sho',
	},
	//ch
	{
		syllable: 'ちゃ',
		answer: 'cha',
	},
	{
		syllable: 'ちゅ',
		answer: 'chu',
	},
	{
		syllable: 'ちょ',
		answer: 'cho',
	},
	//ny
	{
		syllable: 'にゃ',
		answer: 'nya',
	},
	{
		syllable: 'にゅ',
		answer: 'nyu',
	},
	{
		syllable: 'にょ',
		answer: 'nyo',
	},
	//hy
	{
		syllable: 'ひゃ',
		answer: 'hya',
	},
	{
		syllable: 'ひゅ',
		answer: 'hyu',
	},
	{
		syllable: 'ひょ',
		answer: 'hyo',
	},
	//my
	{
		syllable: 'みゃ',
		answer: 'mya',
	},
	{
		syllable: 'みゅ',
		answer: 'myu',
	},
	{
		syllable: 'みょ',
		answer: 'myo',
	},
	//ry
	{
		syllable: 'りゃ',
		answer: 'rya',
	},
	{
		syllable: 'りゅ',
		answer: 'ryu',
	},
	{
		syllable: 'りょ',
		answer: 'ryo',
	},
	//gy
	{
		syllable: 'ぎゃ',
		answer: 'gya',
	},
	{
		syllable: 'ぎゅ',
		answer: 'gyu',
	},
	{
		syllable: 'ぎょ',
		answer: 'gyo',
	},
	//j
	{
		syllable: 'じゃ',
		answer: 'ja',
	},
	{
		syllable: 'じゅ',
		answer: 'ju',
	},
	{
		syllable: 'じょ',
		answer: 'jo',
	},
	//by
	{
		syllable: 'びゃ',
		answer: 'bya',
	},
	{
		syllable: 'びゅ',
		answer: 'byu',
	},
	{
		syllable: 'びょ',
		answer: 'byo',
	},
	//py
	{
		syllable: 'ぴゃ',
		answer: 'pya',
	},
	{
		syllable: 'ぴゅ',
		answer: 'pyu',
	},
	{
		syllable: 'ぴょ',
		answer: 'pyo',
	},
];
let choices = [];
let questionSeq;

//generate 16 random syllables from hiraganaSylls
while (choices.length < 16) {
	/* let rndN = Math.floor(Math.random() * 104) + 1; */
	let rndN = Math.floor(Math.random() * 104) + 1;
	if (choices.indexOf(rndN) === -1) {
		choices.push(rndN);
	}
}
console.log(choices);
//generate question sequence
questionSeq = [...choices];
questionSeq.shift();
for (let i = questionSeq.length - 1; i > 0; i--) {
	const j = Math.floor(Math.random() * (i + 1));
	[questionSeq[i], questionSeq[j]] = [questionSeq[j], questionSeq[i]];
}

/* setTimeout(() => { */
console.log(choices);

//assign choses value to btns
for (let i = 0; i < btns.length; i++) {
	/* btns[i].innerHTML = unique[i]; */
	btns[i].innerHTML = hiraganaSylls[choices[i]].answer;
}

//THIS IS THE SEQUENCE OF QUESTIONS
console.log(questionSeq);
syllElement.innerHTML = `${hiraganaSylls[questionSeq[0]].syllable}`;

/* }, 1500); */

function displayModal() {
	let container = document.body;
	let modalCont = document.createElement('div');
	container.appendChild(modalCont);
	modalCont.setAttribute('class', 'modalContainer');
	modalCont.setAttribute('onclick', 'location.reload()');

	let modal = document.createElement('div');
	modalCont.appendChild(modal);
	modal.setAttribute('class', 'modal');

	let newP1 = document.createElement('p');
	modal.appendChild(newP1);
	newP1.setAttribute('id', 'gameover');
	newP1.setAttribute('class', 'gameover');
	/* 	newP1.innerHTML = 'Time is up!' + '<br>' + 'Refresh the page.';
	 */
	let refreshbtn = document.createElement('input');
	modal.appendChild(refreshbtn);
	refreshbtn.setAttribute('class', 'refreshbtn');
	refreshbtn.setAttribute('type', 'submit');
	refreshbtn.setAttribute('value', 'Refresh');
	refreshbtn.setAttribute('onclick', 'location.reload()');

	let gameover = document.querySelector('#gameover');
}

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (lives > 0) {
			if (btn.innerHTML == hiraganaSylls[questionSeq[0]].answer) {
				console.log('correct');
				btn.classList.add('correct');
				btn.disabled = true;
				questionSeq.shift();
				try {
					syllElement.innerHTML = `${hiraganaSylls[questionSeq[0]].syllable}`;
					restart();
				} catch (error) {
					stopTimer();
					displayModal();
					gameover.innerHTML = `Finished! <br> Refresh the page.`;
					gameover.style.color = `#333`;
					console.log('Question set now empty');
				}
			} else {
				hearts[lives - 1].classList.replace('fa-heart', 'fa-heart-o');
				hearts[lives - 1].classList.replace('green-heart', 'red-heart');
				lives--;
				if (lives == 0) {
					stopTimer();
					btns.forEach((btn) => {
						btn.disabled = true;
					});
					displayModal();
					gameover.innerHTML = `Game over! <br> Refresh the page.`;
				}
				console.log('wrong');
				btn.classList.add('wrong');

				setTimeout(() => {
					btn.classList.remove('wrong');
				}, 600);
			}
			console.log(lives);
		} else {
		}
	});
});
