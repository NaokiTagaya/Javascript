/* ●Javascript群*/
/* IDからデータ取得*/
const timer = document.getElementById('timer'); //ストップウォッチのタイマーIDを取得
//let start = document.getElementById('start'); //スタートボタンのタイマーIDを取得
//let stop = document.getElementById('stop');   //ストップボタンのタイマーIDを取得
//let reset = document.getElementById('reset'); //リセットボタンのタイマーIDを取得

/* 必要な変数を宣言*/
let startTime; 
let elapsedTime = 0;
let timeroutId;

function countUp() {
  
  // 現在時刻とその時分秒を取得
  const date = new Date(Date.now() - startTime + elapsedTime);
  const minute = String(date.getMinutes()).padstart(2, '0');
  const second = String(date.getSeconds()).padstart(2, '0');
  const ms = String(date.getMilliseconds()).padstart(2, '0');
  
  // 表示形式を指定
  timer.textContent = `${minute}:${second}.${ms}`;
  
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
    elapsedTime += Date.now() -startTime;
  });
  // リセットボタン押下時
  $(".reset-button").click(function() {
    // ボタン活性・非活性の制御
    $(".start-button").prop("disabled", false);
    $(".stop-button").prop("disabled", true);
    $(".reset-button").prop("disabled", true);
    // 表示を0秒にする
    timer.textContent = '0:0:0:0';
    // 経過時間をリセット
    elapsedTime = 0;
  });
});
