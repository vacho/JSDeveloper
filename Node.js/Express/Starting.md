# Express starting point

## Start from scratch
Install express (nodejs is required)
```shell
npm install express --save
```

Start a empty
```shell
mkdir folder
cd folder
# Creates a package.js file that contains the dependencies.
npm init
vim package.json
# Add configuragtions and dependencies express
npm pkg set scripts.start="node server"
npm pkg set scripts.dev="nodemon server"
npm install --save-dev nodemon
npm i express
# Create server code
vim index.js
```
Hello world code
```js
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```
Runde server
```shell
npm run dev
```

