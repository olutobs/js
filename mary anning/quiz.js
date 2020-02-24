const get_id = x => document.getElementById(x);
const log = x => console.log(x);

const ageAnswer = 32; // PASS MARK
var feedback = get_id("resultShow");
const submit = get_id("button");
const ans = ["You have chosen the right answer", "Incorrect - Please try again"];
// function to change the answer's background color:
const bgChange = () => {
  feedback.style.backgroundColor =
    (feedback.innerHTML == ans[0]) ? "green" : "red";
};

const checkAnswer2 = () => {
  const theForm = get_id("quizForm");
  const radioName = theForm.elements.quiz;
  // log(radioName);
  // let olu = [1, 2, 4, 5, 6];
  for (let i = 0; i < radioName.length; i++) {
    if (radioName[i].checked) {
    
      feedback.innerHTML = (parseInt(radioName[i].value) === ageAnswer) ? ans[0] : ans[1];
    } 
  
  }

  // function for change of bg color
  bgChange();
};

submit.addEventListener("click", checkAnswer2);

