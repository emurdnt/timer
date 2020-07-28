//read the input
const numOfRolls = process.argv;
const timer = array =>{
  if(array.length !== 0){
    for(let time of array){
      if(time > 0 && Number.isInteger(parseInt(time))){
        allotedTime = time * 1000;
        setTimeout(() => {
          // print the char here
          process.stdout.write('\x07');
        }, Number(time * 1000))
      }
    }
  }
}

timer(numOfRolls.slice(2).sort());

//go through the array
//multiply by a thousand because it's in milliseconds
//try recurssion on this one

//No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
//An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
//An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
