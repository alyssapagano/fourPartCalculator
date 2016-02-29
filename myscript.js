//add

//the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
function addNums(num1, num2){ 

  var num1 = document.getElementById('first').value
  var num2 = document.getElementById('second').value
  var addResult = parseFloat(num1) + parseFloat(num2),
      
      stringOne = num1 + '+' + num2 + '=' + addResult;
      
      onclick=addNums(){
document.getElementByID('result').innerHTML=stringOne;
}
}

function subtractNums(num1, num2){
  var subtractResult = parseFloat(num1) - parseFloat(num2);
stringTwo = num1 + "-" + num2 + '=' + subtractResult;
}
// substract

// multiply

// divide

// this function will grab the inputs, populate the result div
// and run an operation

  // hint: define three variables: input1, input2, and output
  // use output.innerText to set the text within it

  // if input1 or input2 is an empty string, output.innerText will be
  // set to a message that tells user they need to put in the numbers

  // remember the parameter operation is a function,
  // it needs its own arguments


// grab a button element
// to each button, attach a click event to which the appropriate operation is assigned
document.getElementById('add').onclick = function(){populatehtml(addNums)};

document.getElementById('subtract').onclick = function(){
    populatehtml(subtract) };

document.getElementById('multiply').onclick = function(){
    populatehtml(multiply) };

document.getElementById('divide').onclick = function(){
    populatehtml(divide) };