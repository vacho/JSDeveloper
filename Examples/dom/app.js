// This code runs only in a browser environment.

document.body.innerText = '';

const input = document.createElement('input');
input.placeholder = 'To do';
document.body.appendChild(input);

const button = document.createElement('button');
button.innerText = "Add";
document.body.appendChild(button);

button.addEventListener('click', () => {
   let p = document.createElement('p');
   p.innerText = input.value;
   document.body.appendChild(p);
   input.value = '';
});
