import React, { Component } from 'react'
import Contact from './Contact';


class Contacts extends Component {
    render() {
        const style = {
          listStyleType: 'none'
        }
        const {data} = this.props;
        const Contacts = data.map(contact => {
            return (
                <li key ={contact.id}>
                    <Contact img src = {contact.src} firstName={contact.firstName} lastName={contact.lastName} email={contact.email}/>
                </li>
            )
        })
        return (
             <ul style={style}>
                { Contacts }
            </ul>
        )
    }
}

export default Contacts;