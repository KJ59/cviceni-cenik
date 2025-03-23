const selectPlan = (planNumber) => {
   //convert number of plan into id
 const planId = String(planNumber).padStart(5,"plan");
 const planEl = document.getElementById(planId); 
//clear all selections
const allPlans = document.querySelector(".plan--selected");
if (allPlans)  {
allPlans.classList.remove("plan--selected");}
   //highlight selected plan
 planEl.classList.add("plan--selected");
}


selectPlan(1);
selectPlan(2);
selectPlan(3);
selectPlan(2);