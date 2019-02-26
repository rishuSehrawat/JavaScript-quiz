var questionCounter = 0, globalScore = 0;

function Questions(titleStr,answersArr,correctAnswer){
    this.titleStr = titleStr;
    this.answersArr = answersArr;
    this.correctAnswer = correctAnswer;
    this.show = function(){
        document.getElementById('mainDashboard').innerHTML = '';
        document.getElementById('mainDashboard').insertAdjacentHTML('beforeend','<h1>' + this.titleStr + '</h1><div class="row"><div class="col"><label class="d-block"><input class="mr-2" onClick="btnClick(this);" type="radio" name="question1" value="'+ this.answersArr[0] +'">'+this.answersArr[0]+'</label><label class="d-block"><input onClick="btnClick(this);" classs="mr-2" type="radio" style="margin-right: .5rem!important;"name="question1" value="'+this.answersArr[1]+'">'+this.answersArr[1]+'</label></div><div class="col"><label class="d-block"><input onClick="btnClick(this);" class="mr-2"  type="radio" name="question1" value="'+this.answersArr[2]+'">'+this.answersArr[2]+'</label><label class="d-block"><input class="mr-2"  onClick="btnClick(this);" type="radio" name="question1" value="'+this.answersArr[3]+'">'+this.answersArr[3]+'</label></div></div>')
    }
}

var question1 = new Questions('Capital of India?',['Haryana', 'Delhi', 'Punjab', 'Chandigarh'],'Delhi');
var question2 = new Questions('Full Form of IIT?',['Indian Institute of Tennis', 'Indian Institute of Terrorists', 'Indian Information Technology', 'Indian Institute of Tecnology'],'Indian Institute of Tecnology');

var quesArr = [question1,question2];

function init() {
    document.querySelector('.btn').style.display = 'none';
    quesArr[questionCounter].show();
};


function btnClick(s){
    if (s.value == quesArr[questionCounter].correctAnswer) {
        globalScore++;
        if(questionCounter < quesArr.length -1){
            questionCounter++;
            quesArr[questionCounter].show();
        } else{
            console.log('Total Score = '+globalScore);
        }
    } else{
        console.log('Try Again');
    }
}