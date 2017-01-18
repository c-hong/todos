import React from 'react';
import ItemTypes from '../components/_itemTypes';
import { DragSource } from 'react-dnd';

const style = {
	display: 'inline-block', 
	border: '1px dashed gray',
	padding: '0.5rem 1rem', 
	backgroundColor: 'white', 
	cursor: 'move'
};

const boxSource = {
	beginDrag(props) {
		return {};
	}
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
	};
}

class Box {
	render() {
		const { connectDragSource } = this.props;

		return connectDragSource(
			<div style={style}>
				Drag me
			</div>
		);
	}
}

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);