var player1_name=localStorage.getItem("player1_name_input");
var player2_name=localStorage.getItem("player2_name_input");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;
function send(){
    var get_word=document.getElementById("word").value;
    console.log(get_word);
    var word=get_word.toLowerCase();
    console.log(word);

var letter1=word.charAt(1);
console.log(letter1);

var length_divide=Math.floor(word.lenght/2);
var letter2=word.charAt(length_divide);
console.log(letter2);

var length_minus=word.length-1;
var letter3=word.charAt(length_minus);
console.log(letter3);

var remove_letter1=word.replace(letter1,"_");
var remove_letter2=remove_letter1.replace(letter2,"_");
var remove_letter3=remove_letter2.replace(letter3,"_");
console.log(remove_letter3);

var question_word="<h4 id='word_display'>Q. "+remove_letter3+"</h4>";
var input_box="<br>A. <input type='text' id='input_check_box'>";
var check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
var row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

var question_turn="Player 1";
var answer_turn="Player 2";
function check(){
    var get_answer=document.getElementById("input_check_box").value;
    var answer=get_answer.toLowerCase();
    console.log(answer);
    if (answer==word){
        if (answer_turn=="Player 1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (question_turn=="Player 1"){
        question_turn="Player 2";
        document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
    }
    else {
        question_turn="Player 1";
        document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
    }
    if (answer_turn=="Player 1"){
        answer_answer="Player 2";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
    }
    else {
        answer_turn="Player 1";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}