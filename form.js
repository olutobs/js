// function to get input value
const idValue = (element)=> {
    return document.getElementById(element).value
}

const getId = (element) => {
    return document.getElementById(element);
}

// function to return innerHTML

const getInnerHtml = (element, html) => {
  return document.getElementById(element).innerHTML = html;
};

// function to process our form
const showItem = (element, value)=> {
    const voalue = idValue(value)
    
    if(typeof voalue == 'string'){

       return document.getElementById(element).innerHTML = voalue.toUpperCase()

    } else {
       
        return document.getElementById(element).innerHTML = `£ ${voalue}`
    }
   
  
}

const processForm = ()=> {

     const name = idValue('name');
     const holiday = idValue("holiday");
     const cost = idValue("cost");
     const budget = 1000;
     const diff = budget- cost;

     var outcome = '';

     if (cost > budget) {
         
        outcome = `<div class='alert alert-danger' role='alert'>Hello ${name}, your holiday - ${holiday}, with a cost of £${cost} is more than the set budget of ${budget} at a difference of £${diff}.</div>`;

    } else if (cost == budget) {
        outcome = `<div class='alert alert-primary role='alert'>Hello ${name},<br> your holiday - ${holiday}, with a cost of £${cost} is the same as the set budget of ${budget}. </div>`

     } else {
        outcome = `<div class='alert alert-success' role='alert'>Hello ${name},<br> your holiday - ${holiday}, with a cost of £${cost} is below the set budget of ${budget}, which means you will still have about £${diff} to for shopping   </div>`
     }
     //alert(`${name}  ${holiday}  ${cost}`)
     // create a variable for decision 
    // const outcome = `Hello ${name}, your holiday - ${holiday}, will cost £${cost}.`;
    // make the innertext or innerHTML of getElementByID(decision), the decision variable.
    //document.write(outcome)
    // document.getElementById('decision').innerHTML = outcome;
    getInnerHtml('decision', outcome);  
}

// use the getElementbyId to get the id to get the value of the input
// put it in a variable
// use addEventListener function to check for a click event 





// once there is click event, then do something ->  addEventListener(event, function)
// document.getElementById("submit").addEventListener("click", () => {
//   //  name.toUpperCase()
//   const name = document.getElementById("name").value;
//   alert(name);
// });

const outcome = document.getElementById('submit');
outcome.addEventListener('click', processForm)

document.getElementById('name').addEventListener('keyup', ()=>{
    alert(idValue( 'name'))
})

