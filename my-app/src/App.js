import React, {Component} from 'react';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
import data from './data/data'

class App extends Component {
	render() {		
		return (			
			<div>
				<div><ContactForm /></div>
				<div><Contacts data={data}/></div>
			</div>		
		)
	}
}

export default App;