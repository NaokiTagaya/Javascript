/* ●Javascript群*/
/* IDからデータ取得*/
const timer = document.getElementById('timer'); //ストップウォッチのタイマーIDを取得

/* 必要な変数を宣言*/
let startTime; 
let elapsedTime = 0;
let timeroutId;

/* 再帰関数*/
function countUp() {
  
  // 現在時刻とその時分秒を取得
  const date = new Date(Date.now() - startTime + elapsedTime);
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  const ms = String(date.getMilliseconds()).padStart(3, '0');
  
  // 上記取得したものを表示用に抽出する
  let minutePart = minute.substring(1, 2);
  let second10Part = second.substring(0, 1);
  let second1Part = second.substring(1, 2);
  let msPart = ms.substring(0, 1);
  
  // 表示形式を指定
  timer.innerHTML = `<p id="timer-font-size"><span id="timer-number-size">${minutePart}</span>:<span id="timer-number-size">${second10Part}</span>:<span id="timer-number-size">${second1Part}</span>:<span id="timer-number-size">${msPart}</span></p>`;
  
  // 10ミリ秒ごとに時間の値を取得
  timeroutId = setTimeout(() => {
    countUp();
  }, 10);
}

/* ●JQuery群*/
/* global $*/
$(document).ready(function(){
  // スタートボタン押下時
  $(".start-button").click(function() {
    // ボタン活性・非活性の制御
    $(".start-button").prop("disabled", true);
    $(".stop-button").prop("disabled", false);
    $(".reset-button").prop("disabled", true);
    // 現在時刻を代入
    startTime = Date.now();
    countUp();
  });
  // ストップボタン押下時
  $(".stop-button").click(function() {
    // ボタン活性・非活性の制御
    $(".start-button").prop("disabled", false);
    $(".stop-button").prop("disabled", true);
    $(".reset-button").prop("disabled", false);
    // setTimeoutを終了させる
    clearTimeout(timeroutId);
    // それまでの経過時間を格納する
    elapsedTime += Date.now() -startTime;
  });
  // リセットボタン押下時
  $(".reset-button").click(function() {
    // ボタン活性・非活性の制御
    $(".start-button").prop("disabled", false);
    $(".stop-button").prop("disabled", true);
    $(".reset-button").prop("disabled", true);
    // 表示を0秒にする
    timer.innerHTML = '<p id="timer-font-size"><span id="timer-number-size">0</span>:<span id="timer-number-size">0</span>:<span id="timer-number-size">0</span>:<span id="timer-number-size">0</span></p>';
    // 経過時間をリセット
    elapsedTime = 0;
  });
});
