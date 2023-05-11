// 가위바위보 v0.1.1

// 컴퓨터 가위바위보 랜덤 함수
var com = Math.floor(Math.random() * 3 + 1);

// 플레이어 입력창
var player = prompt("가위 바위 보 중 하나를 입력하세요");

// 입력 값 대비 사전 변수
var scissors = "가위";
var rock = "바위";
var paper = "보";
var winDrawLose = "";

// 컴퓨터 랜덤 확인용
console.log(com) 

// 컴퓨터 랜덤값에 가위바위보 적용
if (com == 1) {
    var com = scissors;
    document.write(com);
} else if (com == 2) {
    var com = rock;
    document.write(com);
} else {
    var com = paper;
    document.write(com);
}

// 컴퓨터, 플레이어 구분라인
document.write("<hr>") 

// 플레이어 입력 값 탐지
// if (player == scissors) {
//     var player = scissors;
//     document.write(player);
// } else if (player == rock) {
//     var player = rock;
//     document.write(player);
// } else if ( player == paper ) {
//     var player = paper;
//     document.write(player);
// } else {
//     document.write("가위, 바위, 보 중 하나를 입력해주세요");
// }

// 승패여부
switch(player) {
    case "가위":
        document.write(player);
        switch(com) {
            case "가위":
                winDrawLose = "무승부";
                break;
            case "바위":
                winDrawLose = "패배";
                break;
            case "보":
                winDrawLose = "승리";
                break;
        }
        break;

    case "바위":
        document.write(player);
        switch(com) {
            case "가위":
                winDrawLose = "승리";
                break;
            case "바위":
                winDrawLose = "무승부";
                break;
            case "보":
                winDrawLose = "패배";
                break;
        }
        break;

    case "보":
        document.write(player);
        switch(com) {
            case "가위":
                winDrawLose = "패배";
                break;
            case "바위":
                winDrawLose = "승리";
                break;
            case "보":
                winDrawLose = "무승부";
                break;
        }
        break;
    default:
        document.write("가위, 바위, 보 중 하나를 입력해주세요");
        break;
}

// 승패여부 출력
document.write("<hr>"+ winDrawLose )
