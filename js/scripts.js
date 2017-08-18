$(document).ready(function() {
  $('#square').submit(function(event) {
      var userInput = $('#userInput').val();
      transmogrify(userInput);
  });
});


  var arrs = [];
  var result = '';
function transmogrify(str) {
  // var arrs = [];
  // var result = '';
  var strSquare = Math.ceil(Math.sqrt(str.length));
  str = str.replace(/[^]/g, '').split('');
  // alert(1);
  pushString(str, strSquare);
  joinCat(strSquare);
}

function pushString(str, num) {
  // alert(2);
  for (var i = 0; i < num; i++) {
    arrs.push(str.splice(0, num));
  }
  // alert(3);
}

function joinCat(num) {
  // alert(4);
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      result += arrs[j][i];
    }
    result += ' ';
  }
  // alert(5);
  alert(result);
}
