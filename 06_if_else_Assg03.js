function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore > 90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS Interview`);
        
    }
    else{
        console.log(`Unfortunately ${candidateName} you are not eligible for interview`);
    }
}
tcsInterviewEligibility(80,86,90, "Komal");
tcsInterviewEligibility(70,65,55, "Aishwarya");
tcsInterviewEligibility(60,79,88, "Snehal");