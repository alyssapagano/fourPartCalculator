//add
//the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
function addNums(num1, num2){ 
  var addResult = parseFloat(num1) + parseFloat(num2),
      stringOne = num1 + '+' + num2 + '=' + addResult;
      
    return stringOne;
}

function subtractNums(num1, num2){
  var subtractResult = parseFloat(num1) - parseFloat(num2),
stringTwo = num1 + '-' + num2 + '=' + subtractResult;

  return stringTwo;
}
function multiplyNums(num1, num2){
  var multResult = parseFloat(num1) + parseFloat(num2),
  stringThree = num1 + '*' + num2 + '=' + multResult;

  return stringThree;
}
function divideNums(num1, num2){
  var divideResult = parseFloat(num1) / parseFloat(num2),
  stringFour = num1 + "/" + num2 + '=' + divideResult;

  return stringFour;
}
// substract

// multiply

// divide
function populatehtml(arithmetic){
var input1 = document.getElementById('first').value;
var input2 = document.getElementById('second').value;
var output = arithmetic(input1, input2);
document.getElementById('result').innerText += output;
// this function will grab the inputs, populate the result div
// and run an operation

  // hint: define three variables: input1, input2, and output
  // use output.innerText to set the text within it

  // if input1 or input2 is an empty string, output.innerText will be
  // set to a message that tells user they need to put in the numbers
if (input1 == "" || input2 == ""){
  document.getElementById('result').innerText="You need to put in some numbers, yo."
} 
}
  // remember the parameter operation is a function,
  // it needs its own arguments


// grab a button element
// to each button, attach a click event to which the appropriate operation is assigned
document.getElementById('add').onclick = function(){populatehtml(addNums);
}

document.getElementById('subtract').onclick = function(){populatehtml(subtractNums);
}

document.getElementById('multiply').onclick = function(){
    populatehtml(multiplyNums) ;
  }

document.getElementById('divide').onclick = function(){
    populatehtml(divideNums) };