//1.
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  wait().then(result => {
    console.log(result);
  });
}
f();

//2.
promise.then(f1).catch(f2); /*не эквивалентна*/ promise.then(f1,f2);
// в первом случае then принимает только успешный результат промиса
// а catch обрабатывает только ошибки, произошедшие в f1.
// во втором случае then обрабатывает либо ошибку промиса либо его успешное выполнение
