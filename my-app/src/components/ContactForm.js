import React, { Component } from 'react'


class ContactForm extends Component {
    render() {
        return (
          <form className= {'ContactForm'}>
            <input
              type= 'text'
              placeholder= 'Imię'
              value= {this.props.firstName}
            />
            <input
              type= 'text'
              placeholder= 'Nazwisko'
              value = {this.props.lastName}
            />
            <input
              type= 'email'
              placeholder= 'Email'
              value= {this.props.email}
            />
            <button type= 'submit'>Dodaj kontakt</button>
          </form>        
      )   
        return (
            {ContactForm}
        )
    }
}

export default ContactForm;








