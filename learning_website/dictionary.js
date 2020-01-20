// dct は連想配列による辞書
var dct = {I: "私は", am: "である", boy: "少年"};

function mapDict(wd)
{
  var element=document.getElementById("display");

  console.log(dct[wd]);

  if (wd in dct) {
    element.innerHTML = dct[wd];
  } else {
    element.innerHTML = "[" + wd + "は辞書にありません]";
  }
}

function mapExit()
{
  var element=document.getElementById("display");
  element.innerHTML = "[単語に mouse over してください。]";
}