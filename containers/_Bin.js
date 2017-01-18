import React from 'react';
import ItemTypes from '../components/_itemTypes';
import { DropTarget } from 'react-dnd';

function getStyle(backgroundColor) {
	return {
		border: '1px solid black',
		minHeight: '8rem', 
		minwidth: '8rem', 
		color:' white', 
		backgroundColor: backgroundColor,
		padding: '2rem', 
		margin: '1rem', 
		textAlign: 'center', 
		float: 'left', 
		fontSize: '1rem'
	};
}

const boxTarget = {
	drop(props, monitor, component) {
		const hasDroppedOnChild = monitor.didDrop();

		if (hasDroppedOnChild && !props.greed) {
			return;
		}

		component.setState({
			hasDropped: true,
			hasDroppedOnChild: hasDroppedOnChild
		});
	}
};

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		isOverCurrent: monitor.isOver({shallow: true})
	};
}

class Bin {
	static propTypes = {
		connectDropTarget: PropTypes.func.isRequired,
		isOver: PropTypes.bool.isRequired,
		isOverCurrent: PropTypes.bool.isRequired,
		greedy: PropTypes.bool, 
		children: PropTypes.node
	}

	constructor(props) {
		super(props); //errors here saying that super() is only allows in a derived constructor
		this.state = {
			hasDropped: false, 
			hasDroppedOnChild: false
		};
	}

	render() {
		const { greedy, isOver, isOverCurrent, connectDropTarget, children } = this.props;
		const {hasDropped, hasDroppedOnChild} = this.state;

		const text = greedy ? 'greedy' : 'not greedy';
		let backgroundColor = 'rgba(0, 0, 0, .5)';

		if (isOverCurrent || isOver && greedy) {
			backgroundColor = 'lightgreen';
		}

		return connectDropTarget(
			<div style={getStyle(backgroundColor)}>
				{text}
				<br/>
				{hasDropped && 
					<span>dropped {hasDroppedOnChild && ' on child'} </span>
				}

				<div>
					{children}
				</div>
			</div>
		);
	}
}