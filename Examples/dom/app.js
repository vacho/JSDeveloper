// This code runs only in a browser environment.
document.body.innerText = '';
const form = document.createElement('form');
document.body.appendChild(form);

const input = document.createElement('input');
input.placeholder = 'To do';
form.appendChild(input);

const button = document.createElement('button');
button.innerText = "Add";
button.role = "submit";
form.appendChild(button);

const ul = document.createElement('ul');
document.body.appendChild(ul);

const removeElement = el => {
   el.remove();
}

function removeEl(el) {
   el.remove();
}

form.onsubmit = (e) => {
   e.preventDefault();
   const li = document.createElement('li');
   li.innerText = input.value;
   ul.appendChild(li);
   input.value = '';

   //li.onclick = removeElement.bind(this, li);
   //li.onclick = () => removeEl(li);
   li.onclick = removeEl.bind(this, li);
};


// Styling
document.body.style.padding = '50px';
input.style.marginRight = '10px'
document.body.style.backgroundColor = '#f0f0f0';
document.body.setAttribute('class', 'blue');
document.getElementsByClassName('blue');
document.querySelector('.blue');

function removeSome(word) {
    const list = Array.from(document.querySelectorAll('li'));
    list.forEach(li => {
        if(li.innerText.includes(word)) {
            li.remove();
        }
    })  
};
removeSome('r');