//task 1
let arr = [1,2,3,4,5];

function cubeTheNumber(arr){
    newArr = arr.map(num => num*num*num)
    return newArr
}
//task 2

function sumOfNumbers(arr){
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return sum 
}
sumOfNumbers(arr)
//task 3
function checkPrime(num){
    if(num==1)return 0
    if(num==2)return 1;
    for(i=2;i<=Math.sqrt(num);i++){
        if((num%i)===0)return 0;
    }
    return 1;
}

function returnPrimeNumbers(arr){
    newArr = arr.filter(num=>checkPrime(num)===1)
    // console.log(newArr);
    return newArr
}
//task 4
function averageOfSquaredOdds(numbers) {

    const oddNumbers = numbers.filter(num => num % 2 !== 0);

    const squaredOdds = oddNumbers.map(num => num * num);

    const sumOfSquaredOdds = squaredOdds.reduce((sum, num) => sum + num, 0);

    const average = sumOfSquaredOdds / squaredOdds.length;

    return average;
}
//task 5
function findLongestString(strings) {
    const onlyStrings = strings.filter(str => typeof str === 'string');

    const longestString = onlyStrings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");

    return longestString;
}
//task 6
function capitalizeFirstLetter(sentence){
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');  
}

//task 7
students = [{name:"Hrishi",score:61},{name:"byakuya",score:59}]
function passedStudents(students){
    return students.filter(student => student.score>=60)    
}
//task 10
function totalScore(arr){
    let sum = 0
    arr.forEach(obj => sum = sum + obj.score)
    return sum
}
