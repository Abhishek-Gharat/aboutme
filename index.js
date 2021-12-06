var readlinesync = require("readline-sync");
var username = readlinesync.question("Hey,whats your name :"); 
console.log("Welcome " + username + " ,How well do you know Abhishek!");
console.log("To answer only small letters!");
 var score=0;
function play(question,answer){
  var username = readlinesync.question(question);

  if(username === answer){
    console.log("Right");
    score = score + 1;
    console.log("Your score is :" ,score);
    console.log("------------");
  }else{
    console.log("OOps");
    console.log("------------");
  }
}
play("what do i do :","student");
play("where do i live :","maharashtra");
play("what makes me happy? :","good vibes");
play("what makes me happy? :"," my success");
play("what makes me tired? :","college time");
play(" how do I want others to see me? :"," as a good human being")
console.log("Thank you ^_^ !");
console.log(" your Final score is :" ,score);