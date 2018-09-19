const svgNamespace = 'http://www.w3.org/2000/svg';
const svg = document.querySelector('svg');
function drawPath(data){
	const path = document.createElementNS(svgNamespace, 'path');
	path.setAttribute('d', data);
	svg.appendChild(path);
}





function get(prop) {
	return function(object){
		return object[prop];
	}
}

function toSeconds(e){
	e = e / 1000;
	return e;
}


document.addEventListener('mousedown', function (e) {
	const array = [];
	array.push(e);

	function mousemove(e){
		array.push(e);
	}

	document.addEventListener('mousemove', mousemove);

	document.addEventListener('mouseup', function mouseup(e){
		array.push(e);

		document.removeEventListener('mousemove', mousemove);
		document.removeEventListener('mouseup', mouseup);

		const d = array
		.map(function(e){
			return{
				type: e.type,
				x: e.pageX / window.innerWidth,
				y: e.pageY / window.innerWidth
			};
		})
		.reduce(function(string, data) {
			return string 
			+(data.type === 'mousedown' ? 'M' : 'L') +
			(data.x * 100) + ' ' +
			(data.y * 100) + ' ' ;
		}, '');

		console.log(d);
		drawPath(d);
	});
});

window.drawPath = drawPath;