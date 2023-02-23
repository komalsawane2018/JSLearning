
function tcsInterviewEligiblity(gradScore, hscScore, sscScore, candidateName){
 var result = (gradScore >= 70 || hscScore >= 80 || sscScore > 90)? `Congrates ${candidateName} you are eligible for TCS interview`: `Else unfortunately you are not eligible for TCS interview`;
console.log(`${result}`);
}
tcsInterviewEligiblity(80, 86, 90, "Komal");
tcsInterviewEligiblity(70, 65, 55, "Aishwarya")
tcsInterviewEligiblity(60, 79, 88, "Snehal");