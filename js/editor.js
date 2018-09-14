var form  = document.querySelector('form');
var thing = document.querySelector('.thing');

const properties = {
    'font-family': function(node, value) {
    	node.style.fontFamily = value;
    },
    'font-size': function(node, value){
    	node.style.fontSize = value + 'rem';
    },
    'rotate': function(node, value){
    	node.style.transform = 'rotate(' +value+ 'deg)';
    },
    'padding': function(node, value){
    	node.style.padding = value + 'rem';
    },
    'width': function(node, value){
    	node.style.width = value + 'rem';
    },
    'height': function(node, value){
    	node.style.height = value + 'rem';
    },
    'letter-spacing': function(node, value){
    	node.style.letterSpacing = value + 'em';
    },
    'line-heigth': function(node, value){
    	node.style.lineHeight = value + 'em';
    },
    'opacity': function(node, value){
    	node.style.opacity = value;
    },
    'visibility': function(node, value){
    	node.style.visibility = value;
    },
    'border-radius': function(node, value){
    	node.style.borderRadius = value + 'em';
    },
    'background-color': function(node, value){
    	node.style.backgroundColor = value;
    },
    'color': function(node, value){
    	node.style.color = value;
    },
    'text': function(node, value){
    	node.innerHTML = value;
    },
    'margin-left': function(node, value){
    	node.style.marginLeft = value + 'vw';
    },
    'text': function(node, value){
    	node.innerHTML = value;
    },
    'cursor': function(node, value){
    	node.style.cursor = value;
    },
    'margin-top': function(node, value){
    	node.style.marginTop = value + 'vh';
    },
    "visibility": function(node, value){
    	node.style.visibility = value ? "visible":"hidden";
    }


}




form.addEventListener('input', function(e) {
    const input = e.target;
    const name  = input.name;
    const value = input.type == "checkbox" ?
    	input.checked:
    	input.value;

    properties[name](thing,value);
});

