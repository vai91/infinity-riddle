/*
+1) get the values from the input after submitting, print them to the console.
+2) try without forms
+3) parseInt
+4) isNaN
+5) array for users objects

late dev 
1) default and customizable modes
Mathematical formula 
Rate = Output/Time
*/
var submit = document.querySelector("#submit");
var problemSize = document.querySelector("#problemSize");
var time1 = document.querySelector("#time1");
var time2 = document.querySelector("#time2");
var time3 = document.querySelector("#time3");
//users will be added to this array when they are created.
var users = [];
var rate;
var totalRate = 0;
var result = 0;
var resultParsed = 0;
var collaborative1;
var collaborative2;
var collaborative3;
var minutesTime = 0;
var output = 0;

class User {
    constructor(name, minutesTime, output){
        this.name = name;
        this.minutesTime = minutesTime;
        this.output = output;
        users.push(this);
    }
    calculateRate(){
        rate = this.output/this.minutesTime;
        console.log(`Rate of ${this.name} is: ${rate}(pierogi/minute)`);
        this["rate"] = rate;
        totalRate += this["rate"];
        return this;
    }
} 

function printVariables() {
    console.log(`==========Hello there from console.log==========
problemSize:    ${problemSize}      type: ${typeof problemSize}
time1:          ${time1}        type: ${typeof time1}
time2:          ${time2}        type: ${typeof time2}
time3:          ${time3}        type: ${typeof time3}`);
}

function getValues(){
    problemSize = parseInt(problemSize.value);
    time1 = parseInt(time1.value);
    time2 = parseInt(time2.value);
    time3 = parseInt(time3.value);
    printVariables();
}

submit.addEventListener("click", function() {
    getValues();
    if(isNaN(time1&&time2&&time3&&problemSize)){
        console.log("some variables are NaN, listener not executed.");
    }else{
        createUsers();
        users.forEach(function(user){
            user.calculateRate();
        })
        //get the final calculation, for the given problemSize
        result = problemSize / totalRate;
        resultParsed = parseFloat(result).toPrecision(2);
        console.log(
        `For the given input size(problemSize: ${problemSize}),
        collaboratives count(${users.length}),
        and their personal rates added (${totalRate} pierogi/minute)
        if they work together, they will do the job in ${resultParsed}(minutes)`);
    }
    
});

function createUsers(){
    printVariables();
    collaborative1 = new User("Collaborative1", time1, problemSize);
    collaborative2 = new User("Collaborative2", time2, problemSize);
    collaborative3 = new User("Collaborative3", time3, problemSize);
    console.log(collaborative1, collaborative2, collaborative3);
}

