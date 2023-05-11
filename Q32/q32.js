// 가위바위보 v0.4

// 입력 값 대비 사전 변수
var winDrawLose = "";
var player;
var playerText;

// 입력값 대비 사전 로드
window.onload = function() {
    playerText = document.getElementById("input_text");
}

// 버튼 함수
function rpcButtonClick() {
    while(true) {
        player = playerText.value;
        if ( player == "가위" || player == "바위" || player == "보" ) {
            break;
        } else {
            alert("제대로 입력하세요");
        }
    }

    // 컴퓨터 가위바위보 랜덤 함수
    var com = Math.floor(Math.random() * 3 + 1);

    // 컴퓨터 랜덤값에 가위바위보 적용
    if (com == 1) {
        var com = "가위";
    } else if (com == 2) {
        var com = "바위";
    } else {
        var com = "보";
    }

    // 승패여부
    switch (player) {
        case "가위":
            switch (com) {
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
            switch (com) {
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
            switch (com) {
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
    }
    // 승패여부 출력
    document.getElementById("rpcResult").innerHTML = "컴: " + com + "\n나: " + player + "\n결과: " + winDrawLose
}