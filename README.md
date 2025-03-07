# pass-it

This package contains functions which helps to pass some data to browser or suggest download it as file.

## Install

NPM:

```sh
npm install pass-it
```

PNPM:

```sh
pnpm add pass-it
```

## Usage

```js
import passIt from 'pass-it'

// make some data
const data = 'ROLE,ACTOR,BIRTHDAY\n'
    + 'Arnold Schwarzenegger,Terminator\n'
    + 'Edward Furlong,John Connor\n'
    + 'Sarah Connor,Linda Hamilton\n'
    + 'T-1000,Robert Patrick\n'
    + 'Dr. Peter Silberman,Earl Boen\n'
    + 'Miles Bennett Dyson,Joe Morton\n'

// pass it to browser
passIt(data, { download: 'cast.csv' })
```

## License

MIT
