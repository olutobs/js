const ageAnswer = 50; // PASS MARK
const age1 = document.getElementById("inlineRadio1"); // FIRST OPTION
const age2 = document.getElementById("inlineRadio2"); // SECOND OPTION

// get all the childnodes
const allDiv = document.getElementById("quizSection");
const nodeListDiv = allDiv.childNodes;

var feedback = document.getElementById("resultShow");

// pick the values of the radio
const age1Radio = nodeListDiv[5].firstElementChild.value;
const age2Radio = nodeListDiv[7].firstElementChild.value;
const correct = "You have chosen the right answer";
const incorrect = "Incorrect - Please try again";

// function to change the answer's background color: 

const bgChange =()=> {
    
    feedback.style.backgroundColor = (feedback.innerHTML == correct) ? "green" : "red";
};

// function to activate once clicked

const check1 = ()=> {

    feedback.innerHTML = (age1Radio == ageAnswer)? correct : incorrect;
    bgChange();
};


const check2 = () => {

  feedback.innerHTML = age2Radio == ageAnswer ? correct : incorrect;
  bgChange();
};


// check once click if the value is the right answer

age1.addEventListener("click", check1);

age2.addEventListener("click", check2);
