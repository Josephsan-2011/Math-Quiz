var player1_name = ""
var player2_name = ""
var player1_score = 0
var player2_score = 0
player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn : " + player2_name;

function send() {
    get_n1 = document.getElementById("n1").value;
    get_n2 = document.getElementById("n2").value;
    correctans = get_n1 * get_n2;
    remove_c3 = get_n1 + " x " + get_n2
    q_word = "<h4 id='word_display'> Q. " + remove_c3 + "</h4>"
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = q_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
var question_turn = "player1"
var answer_turn = "player2"

function check() {
    getanswer = document.getElementById("input_check_box").value;
    answer = getanswer.toLowerCase();
    if (answer == correctans) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "question turn - " + player2_name
    } else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "question turn - " + player1_name
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name
    } else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "answer turn - " + player1_name
    }
    document.getElementById("output").innerHTML = ""
}