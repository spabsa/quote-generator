const quotes = [
		{
			name: 'Abraham Lincoln',
			quote: 'Nearly all men can stand adversity, but if you want to test a mans character give him power.'
		},
		{
			name: 'Martin Luther King Jr',
			quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.'
		},
		{
			name: 'Winston Churchill',
			quote: "If you're goimg through hell, keep going"
		},
		{
			name: 'John F. Kennedy',
			quote: 'Ask not what your country can do for you, but what you can do for your country.'
		},
		{
			name: 'Albert Einstein',
			quote: 'Education is what remains after one has forgotten what one has learned in school.'
		}, 
		{
			name: 'Alan Watts',
			quote: 'The ego is nothing other than the focus of concious attention.'
		},
		{
			name: 'Johnny Cash',
			quote: 'Success is having to worry about every damn thing in the world, except money.'
		},
		{
			name: 'Mark Twain',
			quote: 'The secret to getting ahead is getting started'
		},
		{
			name: 'George Washington',
			quote: 'It is far better to be alone than to be in bad company'
		}
	]

const quote = document.querySelector('#quote');
const author = document.querySelector('#quote-author');
const button = document.querySelector('button');

button.addEventListener('click', showQuote);

function showQuote() {
	let random = Math.floor(Math.random() * quotes.length);

 	quote.innerHTML = quotes[random].quote;
 	author.innerHTML = quotes[random].name;
 	

}
