
var form = document.querySelector('form');
var thing = document.querySelector('.thing');
var body = document.querySelector('body');
rgb = [];

form.addEventListener('input', function(e){
	if (e.target.name === 'amount'){
		const value = parseFloat(e.target.value);


		thing.style.top = value + '%';
		thing.style.left = value + '%';

		rgb = [
        value,
        value + 155,
        value + 100
		];

		thing.style.width = value/10 + 'rem';
		thing.style.height = value/10 + 'rem';
	    body.style.color = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] +');';
	}

});

