let promiseATM = new Promise (
  (resolve, reject) => {
    setTimeout(() => {
      let userResponcse = confirm(`Do you want to get money?`);
      userResponcse ? resolve() : reject();
    }, 1000)
  }
);


promiseATM
  .then (
    () => {
    let moneyAmount = prompt(`Enter amount`) || 500;
    return moneyAmount;
  },
    () => {
      let languageChoice = prompt(`Choose language for info: Ukrainian, German, English`) || `Ukrainian`;
      return Promise.reject(languageChoice);
    }
  )

  .then (
    (moneyAmount) => {
      let moneyCurrency = prompt(`Choose currency: USD, EUR, UAH`) || `UAH`;
      return {moneyAmount, moneyCurrency};
  },
    (languageChoice) => {
      let userEmail = prompt(`Enter email`);
      return Promise.reject({languageChoice, userEmail})
    }
  )

  .then (
    (obj) => {
      console.log(`Take your ${obj.moneyAmount} ${obj.moneyCurrency}, please`)
  },
    (obj) => {
      console.log(`Information about the account was sent to the ${obj.userEmail} in ${obj.languageChoice}`)
    }
  )
  
  .then (
    () => {
      console.log(`Goodbye and have a good day!`)
    }
  )