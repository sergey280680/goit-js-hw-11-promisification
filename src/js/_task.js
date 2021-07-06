const promise = new Promise((resolve, reject) => {
  const canFullfill = Math.random() > 0.4;

  setTimeout(() => {
    if (canFullfill) {
      resolve('промис выполнился успешно с результатом (исполнен, Fullfill )');
    }

    reject('промис выполнился с ошибкой (отклонен, rejected)');
  }, 1000);
});

function onFullfield(result) {
  console.log('onRejected => onRejected');
  console.log(`${result}`);
}

function onRejected(error) {
  console.log('onRejected => onRejected');
  console.log(`${error}`);
}

let fff = 'переменная fff';

promise
  .then(result => {
    console.log(result);
    return fff;
  })
  .then(x => {
    console.log(x);
    return 10;
  })
  .then(y => {
    console.log(y);


// ==============================================
const makeOrder = dish => {
  const DELAY = 1000;

  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.4;

    setTimeout(() => {
      if (passed) {
        resolve(`вот ваш заказ ${dish}`);
      }
      reject(`на ваш заказ ${dish} закончились ингридиенты`);
    }, DELAY);
  });
};

makeOrder('торт').then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
}

function onMakeOrderError(error) {
  console.log('onMakeOrderError');
  console.log(error);
}
