/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Calendar from '../';

function onSelect(date) {
	console.log(date);
}

const date = new Date();
const app = tree(<Calendar defaultDate={date} setDefaultDate firstDay={1} minDate={date} onSelect={onSelect}/>);

render(app, document.body);
