const quotes = [
  "Every expert was once a beginner who didn’t quit.",
  "Small steps today become big wins tomorrow.",
  "Progress is progress, even if it’s slow.",
  "Your future is built by what you practice daily.",
  "Consistency beats talent when talent isn’t consistent.",
  "Learning is a journey, not a race.",
  "The only bad day is the one you stop trying.",
  "Discipline is choosing what you want most over what you want now.",
  "If it doesn’t challenge you, it won’t change you.",
  "Every line of code makes you better than yesterday.",
  "Dream big. Start small. Stay consistent.",
  "You grow when you push beyond your comfort zone.",
  "Success is built on daily habits.",
  "Don’t compare your chapter 1 with someone else’s chapter 20.",
  "Your mindset is your strongest tool.",
  "Keep going — your breakthrough might be one step away.",
  "Stay curious. That’s where real learning begins.",
  "The best project you’ll ever work on is yourself.",
  "Failure is not the opposite of success; it’s part of it.",
  "Show up every day, even on the days you don’t feel like it."
];

function repeat(){
const element=document.getElementsByClassName('quote')[0];
const index= Math.floor(Math.random()*quotes.length);
element.textContent=quotes[index];
} 

setInterval(repeat,2000);