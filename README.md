# Theory (#1)

#### Исходный код:
```
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```

#### Result:
```
Bad: undefined
Bad: undefined
Bad: undefined
Bad: undefined
```

### Explanation (#1):
> Сейчас считается что var устарел, и лучше использовать const или let в зависимости от ситуации. В данном случае let даёт более предсказуемый результат, ибо var хайстится из блока for.

#### Variant #1:
```
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```

#### Result:
```
Bad: 10
Bad: 12
Good: 15
Good: 21
```

### Explanation (#2):
> Замыкаем i в самовызывающейся функции, чтобы оно не пыталось получить его из глобальной области видимости.

#### Variant #2:
```
for (var i = 0; i < arr.length; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
        }, 3000);
    })(i);
}
```

#### Result:
```
Bad: 10
Bad: 12
Good: 15
Good: 21
```