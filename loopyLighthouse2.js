function loopyLighthouse (range, multiples, words) {

  var start = range[0];
  var end = range[1];

  var multipleOne = multiples[0];
  var multipleTwo = multiples[1];

  var wordOne = words[0];
  var wordTwo = words[1];

  for (var i = start; i <= end; i++) {
    if (i % multipleOne === 0 && i % multipleTwo === 0) {
      console.log(wordOne + wordTwo);
    } else if (i % multipleOne === 0) {
      console.log(wordOne);
    } else if (i % multipleTwo === 0) {
      console.log(wordTwo);
    } else {
      console.log(i);
    }
  }
}

