import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom"

import { DnContainer } from './components'

import Home from './scenes/Home'

class App extends React.Component {
	render() {
		return (
			<Router>
				<DnContainer>
			      <Route exact path="/" component={Home} />
		      	</DnContainer>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react'))

