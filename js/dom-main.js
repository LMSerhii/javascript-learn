// // const mango = {
// //   username: 'Mango',
// //   showUsername() {
// //     console.log(this);
// //     console.log(`My username is: ${this.username}`);
// //   },
// // };

// // const btn = document.querySelector('.js-btn');

// // // ✅ Працює
// // mango.showUsername();

// // // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// // btn.addEventListener('click', mango.showUsername); // не працює

// // // ✅ Не забувайте прив'язувати контекст методів об'єкта
// // btn.addEventListener('click', mango.showUsername.bind(mango));

// const addlistButton = document.querySelector('.js-button');

// // addlistButton.addEventListener('click', myHendler);

// // function myHendler() {
// //   console.log('With click');
// // }

// const handleClick = event => {
//   console.log(event.currentTarget);
// };

// addlistButton.addEventListener('click', handleClick);

// const form = document.querySelector('.register-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const {
//     elements: { username, password },
//   } = event.currentTarget;

//   console.log(username.value, password.value);
// });

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

// document.addEventListener('keydown', event => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });

// document.addEventListener('keydown', event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
//     console.log('«Ctrl + s» or «Command + s» combo');
// //   }
// // });

// const registerForm = document.querySelector('.form');

// registerForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === '' || password === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
//   console.log(form);
//   console.dir(form);
// }

// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// select.addEventListener('change', setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText = event.currentTarget.options[selectedOptionIndex];

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;

//   console.dir(selectedOptionText);

//   console.dir(event.currentTarget.selectedIndex);
// }
