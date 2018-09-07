
var form = document.querySelector('form');
var thing = document.querySelector('.thing');

form.addEventListener('input', function(e){
	if (e.target.name === 'amount'){
		const value = parseFloat(e.target.value);
		console.log(value)

		thing.style.top = value + '%';
		thing.style.left = value + '%';


	}

});

