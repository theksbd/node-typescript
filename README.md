# A project template for Node.js, Express.js with Typescript config

## 1. Initialize the app

```
npm init -y
```

It will create a new _package.json_ file

```json
{
  "name": "node-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

## 2. Install express package

```
npm i express
```

---

## 3. Install devDependencies packages

```
npm i -D typescript @types/node @types/express ts-node nodemon rimraf
```

---

## 4. Initialize _tsconfig.json_ file

```
npx tsc --init
```

There is one setting to be changed in _tsconfig.json_ file:

```json
"outDir": "./dist"
```

## 5. Create server.ts file

```ts
import express from 'express';

const app = express();

app.get('/', (req, res) => res.send({ message: 'Hello World' }));

app.listen(5000, () => console.log('Server is listening on port 5000'));
```

## 6. Update script in _package.json_ file

```json
{
  "scripts": {
    "build": "rimraf dist && tsc",
    "start": "node dist/server.js",
    "server": "nodemon --exec ts-node server.ts"
  }
}
```

- _build_ command will obliterate whatever inside the **dist** folder first with `rimraf dist` and then use `tsc` to compile/translate the TypeScript code to JavaScript in new **dist** folder.
- _start_ command will run/start the server with the new compiled/translated JavaScript file.
- _server_ command is used for development mode, it use **nodemon** package to watch and re-run every time source code file changes, **ts-node** package is used to compile TypeScript into JavaScript before running it in the Node.js environment.

## 7. [OPTIONAL] Add prettier for beautiful code 😎

Create 2 new files _.prettierrc_:

```json
{
  "arrowParens": "avoid",
  "trailingComma": "none",
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2,
  "semi": true
}
```

And _.prettierignore_:

```
# Ignore artifacts:
build
coverage
dist

package-lock.json
```
