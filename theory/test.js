const arr = [10, 12, 15, 21];

// Исходный код.

for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}

// Первый вариант модификации, замена var на let, timeout на месте.

for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}

// Второй вариант модификации кода, если очень сильно хочется оставить var, самовызывающаяся функция без timeout.

for (var i = 0; i < arr.length; i++) {
  (function(i) {
      setTimeout(function() {
          console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
      }, 3000);
  })(i);
}