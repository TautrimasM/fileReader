# FileReader

Program that reads files in defined directory, on request returns list containing file names and states, rescans directory and prepares a json file containing list for download.

## Usage

At start program reads files in a directory that can be defined in src/definedDirectory.json

It returns full current list (state object) on http://127.0.0.1:3000/list

You can initiate rescan on http://127.0.0.1:3000/scan

You can download current list (state object) as json file on http://127.0.0.1:3000/download-state

- Start program

```
npm start
```

- Start program without build

```
npm start_ts
```

- Invoke tests

```
npm test
```
