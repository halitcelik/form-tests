var form  = document.querySelector('form');
var thing = document.querySelector('.thing');
var unit = document.getElementById('unit');


const properties = {
    'unit' : function(unit, value){
        value = value;
    },   
    'font-family': function(node, value) {
    	node.style.fontFamily = value;
    },
    'font-size': function(node, value){
    	node.style.fontSize = value;
    },
    'rotate': function(node, value){
    	node.style.transform = 'rotate(' + value + ')';
    },
    'padding': function(node, value){
    	node.style.padding = value;
    },
    'width': function(node, value){
    	node.style.width = value;
    },
    'height': function(node, value){
    	node.style.height = value;
    },
    'letter-spacing': function(node, value){
    	node.style.letterSpacing = value;
    },
    'line-heigth': function(node, value){
    	node.style.lineHeight = value;
    },
    'opacity': function(node, value){
    	node.style.opacity = value;
    },
    'visibility': function(node, value){
    	node.style.visibility = value;
    },
    'border-radius': function(node, value){
    	node.style.borderRadius = value;
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
    	node.style.marginLeft = value;
    },
    'text': function(node, value){
    	node.innerHTML = value;
    },
    'cursor': function(node, value){
    	node.style.cursor = value;
    },
    'margin-top': function(node, value){
    	node.style.marginTop = value;
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
        input.type == "radio" || input.name == "cursor" || input.type == "textarea" ?
        input.value:
        input.value + unit.value;
    console.log(value);

    properties[name](thing,value);
});





