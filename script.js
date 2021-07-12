// JavaScript source code
//This is the firstName string
const firstName = 'Jennifer';
// This is the lastName string
const lastName = 'Joplin';
// This is a concatenate
const name = firstName + " " + lastName;
//This is the age number
const age = 34;
//This is the birthday string
const birthday = ("September 5");
//boolean DetroitGC
const detroitGC = true;
//These are arrays with 4 life events
const lifeEvents = [
    "I was born in Memphis, Tennessee.",
    "I went to Eastern Michigan University.",
    "In 2nd grade I wrote short stories that received accolades from my teachers.",
    "I will graduate from the Grand Circus DevelopHer Full Stack Front End Javascript Boot camp on December 17th 2021."
];
// if else statement
if (detroitGC) {
    console.log("My name is " + name + " and I am a student at Grand Circus in Detroit, Michigan. I am currently " + age + " years old and my birthday is on " + birthday + ".");
    }
    else {
    console.log("My name is " + name + " and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " + age + " years old and my birthday is on " + birthday + "."); 
}
// for loop Arrays
for ( i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i])
    }
//Write while loop that loops while true and Write if statement with condition not equal to 5 and else statment condition is equal to 5 with a break
let counter = 0;
let randomNumber;
while (randomNumber = Math.floor(Math.random() * 10) + 1) {
if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} !==5`);
    }
    else {
        counter++;
        console.log("5 === 5. It took " + counter + " iterations to randomly generate the number 5.");
        break;
    }   
}
