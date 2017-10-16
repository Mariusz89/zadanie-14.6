import React, { Component } from 'react'


class Contact extends React.Component {
    render() {
        return (       
            <div className = 'countryItem'>
                <img className={'contactImage'} src={this.props.src}/>
                <p className = 'countryLabel'>
                    Imię: {this.props.firstName}
                </p>
                <p className= {'countryLabel'}>
                    Nazwisko: {this.props.lastName}
                </p>
                <a href={'mailto:' + this.props.email}>
                    {this.props.email}
                </a>
            </div>                
        )   
        
        return (
            <div>
                {Contact}
            </div>
        )
    }
}


export default Contact;