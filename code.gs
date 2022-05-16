function postSlackbot(message) {
//SlackAPIで登録したボットのトークンを設定する
let token = "xo**************";
//ライブラリから導入したSlackAppを定義し、トークンを設定する
let slackApp = SlackApp.create(token);
//Slackボットがメッセージを投稿するチャンネルを定義する
let channelId = "#401_競プロ_problem";
//Slackボットが投稿するメッセージを定義する
//SlackAppオブジェクトのpostMessageメソッドでボット投稿を行う
slackApp.postMessage(channelId, message);
}

function slackBot_01() {

 const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 const lastRow = sheet.getLastRow();

 for (let i = 2; i <= lastRow; i++) {

   const isSent = sheet.getRange(i, 3).getValue();

   if (isSent == "") {
     const message = sheet.getRange(i, 2).getValue();
     postSlackbot(message)
     sheet.getRange(i, 3).setValue(true);

     if (i >= lastRow) {
       sheet.getRange(2, 3, lastRow - 1).clearContent();
     }
     break;
   }
 }
}

