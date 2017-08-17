$(document).ready(function() {
  $('#square').submit(function(event) {
      var userInput = $('#userInput').val();
      transmogrify(userInput);
  });
});



function transmogrify(str) {
  var arrs = [];
  var result = '';
  var strSquare = Math.ceil(Math.sqrt(str.length));
  str = str.split('');
  pushString(str, strSquare);
  var x = joinCat(str, strSquare);
  alert(x);
}

function pushString(str, num) {
  for (var i = 0; i < num; i++) {
    arrs.push(str.splice(0, num));
  }
}

function joinCat(arr, num) {
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      result += arr[i][j];
    }
    result += ' ';
  }
  return result;
}
