
// 1 Declare a variable named submissions initialized to an array with the following objects:
let submissions = [
    {name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true},
    
    {name: "Joe", 
    score: 77,
    date: "2018-05-14", 
    passed: true},

    {name: "Jack", 
    score: 59,
    date: "2019-07-05", 
    passed: false},

    {name: "Jill", 
    score: 88,
    date: "2020-04-22", 
    passed: true}
]

// 2 Declare a function named addSubmission
// Parameter(s): array, newName, newScore, newDate
// Functionality: construct an object and push it into the array. 
//The object must have the same properties as the objects already in the array. 
//Use conditional statements to set the value for the passed property 
//to true if the score is greater than or equal to 60 and false otherwise.

function addSubmission (array, newName, newScore, newDate) {
 let newSubmission = { 
    name: newName,
    score: newScore,
    date: NewDate
    }

    if (newScore>=60){
        passed =true;
        } else {
        passed = false;
        }
    
    array.push(newSubmission)

}
addSubmission("Lelani", 91, "2020-04-23")); 
console.log(submissions);
//  3 Declare a function named deleteSubmissionByIndex
//Parameter(s): array, index
//Functionality: remove the object from the array at the specified index using the splice method.

function deleteSubmissionByIndex (array,index) {
let removed =array.splice(index, 1)
}
console.log(submissions.splice)

// // // 4 Declare a function named deleteSubmissionByName
// // // Parameter(s): array, name
// // // Functionality: remove the object from the array that has the provided name.  
// //Incorporate the findIndex method and the splice method.
function deleteSubmissionByName (array,name) {
}
console.log(array.findIndex())
// // // 5 Declare a function named editSubmission
// // // Parameter(s): array, index, score
// // // Functionality: update an object’s score in the array at the specified index. 
// // //Use conditional statements to set the value for the passed property to true 
// // //if the score is greater than or equal to 60 and false otherwise.
function editSubmission (array,index,score) {
    if(score>=60){;}
        passed =true;
        } else {
        passed = false;
        }

}
// // 6 Declare a function named findSubmissionByName
// // Parameter(s): array, name
// // Functionality: return the object in the array that has the provided name. Use the find method.
function findSubmissionByName (array,name){
    let found = array.find()

}
console.log(array.find(isJane));
// // 7 Declare a function named findLowestScore
// // Parameter(s): array
// // Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.
function findLowestScore (array){

}
// // // 8 Declare a function named findAverageScore
// // // Parameter(s): array
// // // Functionality: return the average quiz score.  Use a for...of loop.
function findAverageScore (array){
    for ( )
    // return with for of loop

// }
// // // 9 Declare a function named filterPassing
// // // Parameter(s): array
// // // Functionality: return a new  array using the filter method. The filter method should find objects in the array that have passing scores. 
function filterPassing (array){
    let passedScore = array.filter(item=>item.passed === true)
return passedScore
}
console.log(filterPassing(submissions));
// // // 10 Declare a function named filter90AndAbove
// // // Parameter(s): array
// // // Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.
function filter90andAbove (array){
    let greaterScore=array.filter(item=>item.score>=90);
    return greaterScore;
}
console.log(filter90andAbove(submissions));