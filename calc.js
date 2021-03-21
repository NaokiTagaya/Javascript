let calcResult = document.getElementById("calc-result"); // IDから計算表示部分を取得
let inputFlg = "initial"; // ボタン押下時のフラグ設定

//  数字ボタン押下時
function editNumber(letter) 
{
  // 表示が「0」、もしくは「=」ボタン押下時の場合、上書きする
  if (calcResult.value =="0" || inputFlg == "calc")
  {
    calcResult.value = "";
    // 表示が「0」の時に、「00」が謳歌された場合は「0」表示のまま
    if (letter =="00")
    {
      letter = "0";
    }
  }
  calcResult.value = calcResult.value + letter;
  inputFlg = "number";
}

//  小数ボタン「.」押下時
function editDecimal(letter) 
{
  // 数字の後でないと表示させないようにする
  if (inputFlg == "number" || inputFlg == "calc")
  {
    calcResult.value = calcResult.value + letter;
    inputFlg = "decimal";
  }
}

//  四則演算ボタン押下時
function editFormula(letter) 
{
  // 連続で四則演算が入力できないようにする
  if (inputFlg == "number" || inputFlg == "calc")
  {
    calcResult.value = calcResult.value + letter;
    inputFlg = "formula";
  }
}

// 「AC」ボタン押下時
function clearLetter() 
{
  // 表示を「0」にして、フラグを初期化
  calcResult.value = "0";
  inputFlg = "initial";
}

// 「＝」ボタン押下時
function calc() 
{
  try
  {
    // 計算結果を表示
    calcResult.value = new Function("return " + calcResult.value)();
    inputFlg ="calc";
  }
  // 例外発生時
  catch(e)
  {
    console.log(e.message);
  }
}