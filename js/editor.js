
var form = document.querySelector('form');
var thing = document.querySelector('.thing');
var body = document.querySelector('body');
rgb = [];

form.addEventListener('input', function(e){
	if (e.target.name === 'amount'){
		const value = parseFloat(e.target.value);

		const topValue = Math.sin((value / 100) * Math.PI)



		thing.style.top = topValue * 100 + 'vh';

		thing.style.left = value + 'vw';



		rgb = [
        value,
        value * 2,
        value / 2
		];

		thing.style.width = value/10 + 'rem';
		thing.style.height = value/10 + 'rem';
		thing.style.backgroundColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ");";
	    console.log(thing.style.backgroundColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")");
	}

});

