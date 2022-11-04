player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
answer_turn="player2"
question_turn="player1"
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
player1_score=0;
player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("question_turn").innerHTML="question turn= "+player1_name;
document.getElementById("answer_turn").innerHTML="answer turn= "+player2_name;


function send(){
    num1=document.getElementById("number1").value
    num2=document.getElementById("number2").value
    answer=num1*num2
    question_word="<h4 id='word_display'> Q."+num1 + "x" +num2+"</h4>";
    input_box='<input id="input"type="text"></input>'
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>"
     row=question_word+input_box+check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("answer").value="";

}
function check(){
    get_answer=document.getElementById("input").value
    if(answer==get_answer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score
        }}
        if(question_turn=="player1"){
            question_turn="player2"
            answer_turn="player1"
            document.getElementById("question_turn").innerHTML="question turn-"+player2_name
            document.getElementById("answer_turn").innerHTML="answer turn-"+player1_name
        }
        else{
            question_turn="player1"
            answer_turn="player2"
            document.getElementById("question_turn").innerHTML="question turn-"+player1_name
            document.getElementById("answer_turn").innerHTML="answer turn-"+player2_name 
        }
       
    
    
    
    document.getElementById("output").innerHTML="";

}
