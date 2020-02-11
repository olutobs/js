const nString = "Daddy";
const nLoan = 1000; // number
const option = true; // boolean
const emptzy = null;
const notDefined = undefined;

const answer = "Option is false";

if (option == false) {
  console.log(an.swer);
} else {
  console.log("Option is very true");
}

if (nLoan === null) {
  console.log("Please apply for the loan");
}

var x = x => console.log(x);
// check data type using typeof
/* 
console.log(typeof notDefined);

console.log(option)

x(nString.length)

x(nString.toUpperCase())

x(nString.toLowerCase()) */

// array

myDaddy = ["Olawale", 27, "Business Man", 1000];
const int = 20;

// x(myDaddy[0].toUpperCase());
// x(myDaddy[3] * int)
// x(myDaddy[1] * int)
// myDaddy.pop()
// x(myDaddy)
// myDaddy.push(1000)
// x(myDaddy)

// function

function totalAge() {
  return 20 * 2;
}

const totalAge2 = x => {
  console.log(x * 2);
};

totalAge2(400);
console.log(totalAge());

// build a function cal the age of jummy and oladele

const currentYear = 2020;
const yobJummy = 2003;
const yobOladele = 2005;
const yobTobs = 2009;

// define function
const calAge = (year, yob) => {
  console.log(year - yob);
};
// call function
calAge(yobJummy, yobTobs);

const daughters = {
  name: ["Jummy", "Olutobs"],
  age: [35, 102],
  hair: ["black", "brown"],
  isGlasses: false,
  height: [185, 250],
  heightMetric: "cm",
  totalAge: () => {
    x("fine");
  }
};

x(daughters.totalAge());

const holiday = ["Greece", "Spain", "Nigeria"];
const cost = [3000, 3500, 6000];
const name = ["Daddy", "Olutobs", "Oladele"];

// build a function that tell where each name wants to go and the cost
/* 1. define my function
    2. function needs 3 parameters
    3. return the outcome
*/

const holPass = (name, dest, cost) => {
  return `${name} is going to ${dest} and it is going to cost £${cost}`;
};

// call the function

x(holPass(name[2], holiday[2], cost[2]));

//new project
// build a function that tells me the budget and the price of the holiday and to say whether it is to expensive or under the budget

const holiday2 = ["France", "Spain", "Nigeria", "Greece", "Niger", "China"];
const cost2 = [2000, 3000, 3500, 2250, 4334, 6000];
const budget = 3400;


const holPrice = ( holiday2, cost2, budget) => {
    const subtract = budget-cost2;
  if (cost2 <= budget) {

    console.log(`The ${holiday2} holiday at the cost of £${cost2} is below or equal to the budget by £${subtract}`);
  } else {
      console.log(
        `The ${holiday2} holiday at the cost of £${cost2} is higher the budget by £${subtract}`
      );
  }
}

holPrice(holiday2[0], cost2[0], budget);

//
const holiday3 = ["France", "Spain", "Nigeria", "Greece", "Niger", "China"];
const cost3 = [2000, 3000, 3500, 2250, 4334, 6000];

const budget3 =[1000,1250, 1500,2000,2250,2500,3250,3500,4250,4500] ;

const budget31 =[1000,1250, 1500,2000,2250,2500,3250,3500,4250,4500] ;

const holP = (holiday3, cost3, budget3 ,budget31) => {
  const subtract = budget3 - cost3;
  if (cost2 <= budget) {
    console.log(
      `The holiday to ${holiday3}  at the cost of £${cost3} is below the budget of ${budget31} or equal to the budget by £${subtract}`
    );
  } else {
    console.log(
      `The holiday to ${holiday3}  at the cost of £${cost3} is higher the budget of £${budget31} by £${subtract}`
    );
  }
};

holP(holiday3[5], cost3[5], budget3[8], budget31[8]);



