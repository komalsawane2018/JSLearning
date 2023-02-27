
console.log(`------------------------1st Step---------------------`);
function voteEligibility(age){

  if (age <=0 || age >120 || age== undefined || age == null) {
  console.log(`your ${age} age is invalid`);
  }
  if (age>=18  && age<=100 ) {
    console.log(`Your ${age} age is eligible for voting`);
  }
  if(age>0 && age <=17){
    console.log(`Your ${age} age is not eligible for voting`);
  }

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(-10);
voteEligibility(20);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined)
voteEligibility(null);


console.log(`------------------------2nd Step------------------------------------`);
function gradeCalculation(marks) {
  // if marks is 0 or less than 0 or greater than 100 or not in valid number format
  // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
  if (marks<=0 || marks > 100 || (typeof marks!= "number") || marks == null
     || marks!= marks){
        console.log(`Please provide the valid marks - ${marks}`) 

  }

  if (marks >= 90 && marks<=100 ) {
    console.log(`Funtastic marks ${marks} your grade is A+`);
  }

  if (marks >= 75 && marks < 90) {
    console.log(`Excellent marks ${marks} your grade is A`);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`Good marks ${marks} your grade is B+`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`marks ${marks} your grade is C, need improvement`);
  }
}


gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90)
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation("NaN"); 
gradeCalculation("null");
