var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className="contactForm container form-inline">
        <input className="form-control" 
                type="text" 
                placeholder="Imię" 
                defaultValue={ this.props.contact.firstName }/>
        <input className="form-control" 
                type="text" 
                placeholder="Nazwisko" 
                defaultValue={ this.props.contact.lastName }/>
        <input className="form-control" 
                type="email" 
                placeholder="Email" 
                defaultValue={ this.props.contact.email }/>
        <button type="submit" 
                className="btn btn-primary">
          Dodaj kontakt
        </button>
      </form>
    )
  },
})


