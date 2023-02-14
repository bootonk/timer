const input = process.argv.slice(2);

const timer = function() {
  if (input.length === 0) {
    return;
  }

 for (let i = 0; i < input.length; i++) {
  if (input[i] < 0) {
    continue;
  }

  if (isNaN(input[i])) {
    continue;
  }
  
   setTimeout(() => {
    process.stdout.write('\x07');
   }, input[i] * 1000);
 }
};

timer(input);