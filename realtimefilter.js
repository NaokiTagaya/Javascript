/* global $*/
function search(text) {
  // 「keyword-list」クラス内全てを処理する
  $(".keyword-list").each(function(index, element) {
    // 「keyword-list」クラス内のキーワードを格納する
    let keyword = $(element).text();
    if(keyword.indexOf(text) === -1){
      // 入力した文字がキーワードとマッチしなかった場合（-1）、画像を非表示にする
      $(element).parent().css("display", "none");
    }else{
      // 入力した文字がキーワードとマッチした場合（-1）、画像を表示にする
      $(element).parent().css("display", "block");
    }
  });
}

// テキストボックスにキーワードが入力された場合、処理を行う
$(".input-keyword").on("input", function(event) {
  // 入力された文字をtextに格納
  let text = $(".input-keyword").val();
  if(text === ""){
    // 入力がない場合、全て表示するよう下記CSSを適用する
    $(".filter-image").css("display", "block");
  }else{
    // 入力がある場合、検索処理クラスを行う
    search(text);
  }
});