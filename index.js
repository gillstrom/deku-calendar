/** @jsx dom */
import dom from 'magic-virtual-element';
import objectAssign from 'object-assign';
import Pikaday from 'pikaday';

function afterMount({props}, el) {
	new Pikaday(objectAssign(props, {field: el}));
}

function render({props}) {
	return (<input type='text' class={['Calendar', props.class]}/>);
}

export default {afterMount, render};
