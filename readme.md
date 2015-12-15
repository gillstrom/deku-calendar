# deku-calendar

> Date picker component for [Deku](https://github.com/dekujs/deku)


## Install

```
$ npm install --save deku-calendar
```


## Usage

```js
import Calendar from 'deku-calendar';

function onSelect(date) {
	console.log(date);
	//=> Fri Dec 25 2015 00:00:00 GMT+0100 (W. Europe Standard Time)
}

export function render() {
	return (
		<Calendar defaultDate={new Date()} setDefaultDate firstDay={1} minDate={new Date()} onSelect={onSelect}/>
	);
}

```

## Documentation 

Arguments and documentation for the `Pikaday` date picker [can be found here.](https://github.com/dbushell/Pikaday#configuration)


## License

MIT © [gillstrom](https://github.com/gillstrom)
