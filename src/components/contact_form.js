import React, { Component} from 'react';
import Contact from './contact';



class ContactForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      contacts: props.contacts
    };
  }
  updateSearch(event){
    this.setState({search: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.props.contacts)

      let name  =  this.refs.name.value;
      let email =  this.refs.email.value;
      let phone =  this.refs.phone.value;
      let id = Math.floor((Math.random() * 100 )+1);
      this.setState({
        contacts: this.state.contacts.concat({id,name,email,phone})
      });
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.phone.value = '';
      }



render() {
  let filteredContacts = this.state.contacts.filter((contact) => {
      return contact.name.indexOf(this.state.search)!== -1
}
);

    return  (
    <div>
    <input className = "form-group" type = "search" ref= "search" placeholder = "search"
    value = {this.state.search}
    onChange = {this.updateSearch.bind(this)}/>
      <form onSubmit = {this.handleSubmit.bind(this)}>
      <div className = "form-group">
      <input type = "text" ref= "name" className = "form-control" placeholder = "Name" />
      </div>
      <div className = "form-group">
      <input type = "text" ref = "email" className = "form-control" placeholder = "Email" />
      </div>
      <div className = "form-group">
      <input type = "text" ref = "phone" className = "form-control" placeholder = "Number"/>
      </div>

      <button type = "submit" className = "btn btn-primary">Submit</button>

      </form>
      <div>
      <ul className = "col-md-4  list-group">
      {filteredContacts.map((contact)=> {
        return <Contact contact = {contact} key = {contact.id}/>
      })}
      </ul>
      </div>
  </div>
);
};
}

export default ContactForm;
