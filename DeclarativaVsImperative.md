# Declarative and Imperative programing.
Are tow ways to program exactly the same in a differente way. 

- Declarative.- Focus in the WHAT we need to get.
```js
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(number => number*2);
doubles
```


- Imperative.- Focus in HOW we need to get
```js
const numbers = [1, 2, 3, 4, 5];
const doubles = [];

for (let i = 0; i < numbers.length; i++) {
    doubles.push(numbers[i]*2);
}

doubles;
```


## Dom Example
```js
// IMPERATIVE
const button = document.createElement('button');
button.textContent = 'Click me!';
button.addEventListener('click', () => {
    console.log('You clicked!');
});
document.body.appendChild(button);
```
```html
<!--- DECLARATIVE --->
<button onclick="alert('You clicked!')">Click me! </button>
```

## Some notes:
- Jsx (used in React) is a declarative way to do the thinks happen for web programing.

```jsx
function App() {
    const [clicked, setClicked] = React.useState(false);
    return (
      <div>
        <button onClick={() => setClicked(true)}> Click Me </button>
        {clicked && <p>Button Clicked!</p>}
      </div>
    );
} 
```

- CSS is declarative also.
```css
div {
    width: 100px;
    height: 100px;
    background-color: blue;
}
```

## Declarative programing pros.
- Readability: ie map(), filter()
- Reusability.
- Abstraction of complexity.
- Less Error Prone.
- Maintainability.
- Performance

## Imperative programing pros.
- More control over.
- Implementation details.

## Reference
- Good video explanation https://www.youtube.com/watch?v=dYqwdwTsZVY