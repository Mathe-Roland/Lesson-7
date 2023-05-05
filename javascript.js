//exercise 1
//generate even numbers until n is reached
function generateEvenNumbersUntil(numbers){
    for (let i=0;i<=numbers;i++){
        if (i%2 ===0){
            console.log(i);
        }
    }
}

generateEvenNumbersUntil(50)
//insert the funtion plus the number which you want to generate even numbers towards

//exercise 2

//calculate the sum of numbers in a list 


function sumList(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      count += list[i];
    }
    return count;
  }
  
var variabila = sumList([1, 2, 3, 4, 5, 6]);
  
console.log(variabila);
  
//assign a variable with the named function with the array inside of it

//exercise three
//make a list appear in reverse
function numberListReverse(numberlist) {
    var myList = [];
    for (let i = numberlist.length - 1; i >= 0; i--) {
      myList.push(numberlist[i]);
    }
    return myList;
  }
  
  // Call the function with an array of numbers
  var reversedList = numberListReverse([1, 2, 3, 4, 5]);
  
  console.log(reversedList);

  var reversedList2= numberListReverse([5,6,7,8,9])

  console.log(reversedList2)


//exercise four
// count vowels

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
function countvowels(word){
    let count=0
    for (let i=0;i<word.length;i++){
        
        if (vowels.includes(word[i])){
             count=count+1;
        }  

    }
    return count

}
let numero1=countvowels("forclosure")

console.log(numero1)