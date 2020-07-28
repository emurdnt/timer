
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
 
  let isNumber = Number.isInteger(parseInt(key.name));
  // //b will beep
  // //input number from 1-9
  // //output setting timer for x seconds...
  // //beep at the time
  // //exit

  if(isNumber && parseInt(key.name) > 0){
    process.stdout.write('setting timer for '+key.name+' seconds...\n');
    setTimeout(() => {
      // print the char here
      process.stdout.write('\x07');
      process.stdout.write('*beep*\n');
    }, Number(1000 * parseInt(key.name)))
  } else{
    if(key.name === 'b'){
      process.stdout.write('\x07');
    } else{
      //it doesn't seem to recognize control in mac :(
      if( key.name == 'escape' ) {
        process.stdout.write('Thanks for using me, ciao!\n');
        process.exit();
      }
    }
  }
  
})

// process.stdin.on("end", function () {
//   if()
// });
// { sequence: '',
//   name: 'backspace',
//   ctrl: false,
//   meta: false,
//   shift: false }
