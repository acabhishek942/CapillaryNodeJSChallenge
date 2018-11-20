var rl = require('readline');

var prompts = rl.createInterface(process.stdin, process.stdout);

var array_length;
var actual_array;

prompts.question('', function(array_length_input){
    array_length = array_length_input;
    prompts.setPrompt('');
    prompts.prompt();
    prompts.on('line', function(actual_array_input){
        actual_array = actual_array_input;
        console.log(array_length, actual_array)
        prompts.close();
    });
});
