/* ●Javascript群*/
/* IDからデータ取得*/
let timer = document.getElementById('timer'); //ストップウォッチのタイマーIDを取得
let start = document.getElementById('start'); //スタートボタンのタイマーIDを取得
let stop = document.getElementById('stop');   //ストップボタンのタイマーIDを取得
let reset = document.getElementById('reset'); //リセットボタンのタイマーIDを取得

/* 必要な変数を宣言*/
let startTime; 
let elapsedTime = 0;
let timerId;
let timeStop = 0;

/* 時間を適正に表示させるための関数*/
function calcTime(){
  
  let minute = Math.floor(elapsedTime / 60000);
  let second = Math.floor(elapsedTime % 60000 / 100);
  let ms = elapsedTime % 1000; 
  
  minute = ('0' + minute).slice(-2);
  second = ('0' + second).slice(-2);
  ms = ('0' + ms).slice(-3);
  
  timer.textContent = minute + ':' + second + ':' + ms;
}


function countUp(){
  
  // setTimeoutの返り値を代入
  timerId = setTimeout(function(){
    
    elapsedTime = Date.now() - startTime + timeStop;
    calcTime();
    
    countUp();
  }, 10);
}

/* JQuery群*/
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
    clearTimeout(timerId);
    timeStop += Date.now() - startTime;
  });
  // リセットボタン押下時
  $(".reset-button").click(function() {
    // ボタン活性・非活性の制御
    $(".start-button").prop("disabled", false);
    $(".stop-button").prop("disabled", true);
    $(".reset-button").prop("disabled", true);
    elapsedTime = 0;
    timeStop = 0;
    calcTime();
  });
});
