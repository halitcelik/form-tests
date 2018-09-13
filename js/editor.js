var form  = document.querySelector('form');
var thing = document.querySelector('.thing');

console.log('what?')
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
    'font-size': function(node, value){
    	node.style.padding = value + 'rem';
    },
    'font-size': function(node, value){
    	node.style.width = value + 'rem';
    },
    'font-size': function(node, value){
    	node.style.height = value + 'rem';
    }
}


form.addEventListener('input', function(e) {
    const input = e.target;
    const name  = input.name;
    const value = input.value;

    properties[name](thing,value);
});

