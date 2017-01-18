import React, { Component }from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import DragBox from '../containers/_dragBox'
import Bin from '../containers/_Bin'

/*
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <DragBox />
  </div>
)

export default App
*/

class App extends Component {
	render() {
		return (
			<div>
				<div style={{ overflow: 'hidden', clear: 'both', margin:'-1rem'}}>
					<Bin greedy>
						<Bin greedy />
					</Bin>

					<Bin>
						<Bin />
					</Bin>
				</div>

				<div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem'}}>
					<dragBox />
				</div>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);
