//begining of to be deleted
function hideThingsTemporarily() {
  document.getElementById('storedData').style.visibility = 'hidden';
};
hideThingsTemporarily();

// var answers = {
// question1:'9',
// question2:'6',
// question3:'5',
// question4:'3',
// question5:'3',
// question6:'5',
// question7:'4',
// question8:'5',
// question9:'6',
// question10:'8',
// question11:'8',
// question12:'2',
// question13:'2',
// question14:'2',
// question15:'5',
// question16:'9',
// question17:'7',
// question18:'7',
// question19:'6',
// question20:'9'
// }

var answers = {
  question1:'9',
  question2:'6',
  question3:'5',
  question4:'3',
  question5:'3',
  question6:'5',
  question7:'4',
  question8:'5',
  question9:'6',
  question10:'8',
  question11:'8',
  question12:'2',
  question13:'2',
  question14:'2',
  question15:'5'
};

sansCriticalControlsBarChartLabelsArray = ['CSC-1','CSC-2','CSC-3','CSC-4','CSC-5','CSC-6','CSC-7','CSC-8','CSC-9','CSC-10','CSC-11','CSC-12','CSC-13','CSC-14','CSC-15','CSC-16','CSC-17','CSC-18','CSC-19','CSC-20'];

countNumOfTotalQuestions();
countNumOfQuestionsAnswerd();
calcPercentageComplete();
objectKeyExtraction();


//end of to be deleted
