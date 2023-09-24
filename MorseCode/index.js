const MORSE_CODE_DICT = {
	'A': '.-', 'B': '-...',
	'C': '-.-.', 'D': '-..', 'E': '.',
	'F': '..-.', 'G': '--.', 'H': '....',
	'I': '..', 'J': '.---', 'K': '-.-',
	'L': '.-..', 'M': '--', 'N': '-.',
	'O': '---', 'P': '.--.', 'Q': '--.-',
	'R': '.-.', 'S': '...', 'T': '-',
	'U': '..-', 'V': '...-', 'W': '.--',
	'X': '-..-', 'Y': '-.--', 'Z': '--..',
	'1': '.----', '2': '..---', '3': '...--',
	'4': '....-', '5': '.....', '6': '-....',
	'7': '--...', '8': '---..', '9': '----.',
	'0': '-----', ', ': '--..--', '.': '.-.-.-',
	'?': '..--..', '/': '-..-.', '-': '-....-',
	'(': '-.--.', ')': '-.--.-'
};

const CODE_TO_CHAR = {};

Object.entries(MORSE_CODE_DICT).forEach(entry => {
	const [key, value] = entry;
	CODE_TO_CHAR[value] = key;
})

function runMorseCode(morseToEnglish, textToTranslate) {
	let translatedText = '';
	let isError = false;

	if (morseToEnglish) {
		textToTranslate.split('   ').forEach((word) => {
			const newWord = word.split(' ').map(el => {
				if (!CODE_TO_CHAR[el]) {
					isError = true;
				}
				return CODE_TO_CHAR[el]?.toLowerCase();
			}).join('');
			translatedText = `${translatedText} ${newWord}`;
		});
		if (isError) {
			translatedText = 'Invalid Morse Code Or Spacing';
		}
	} else {
		textToTranslate.split('').forEach((el) => {
			if (el === ' ') {
				translatedText = `${translatedText}  `;
			} else {
				translatedText = `${translatedText} ${MORSE_CODE_DICT[el.toUpperCase()]}`
			}
		});
	}

	return translatedText;
}

const inputs = [{ morseToEnglish: true, textToTranslate: "- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-" },
{ morseToEnglish: false, textToTranslate: "The wizard quickly jinxed the gnomes before they vaporized." },
{ morseToEnglish: true, textToTranslate: "..- .... ..-. .-.. --- .-    ...-" },
{ morseToEnglish: true, textToTranslate: "" }]

console.log(runMorseCode(inputs[0].morseToEnglish, inputs[0].textToTranslate));