var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm container form-inline'}>
        <input className={'form-control'} type={'text'} placeholder={'Imię'} defaultvalue={'this.props.contact.firstName'}/>
        <input className={'form-control'} type={'text'} placeholder={'Nazwisko'} defaultvalue={'this.props.contact.lastName'}/>
        <input className={'form-control'} type={'email'} placeholder={'Email'} defaultvalue={'this.props.contact.email'}/>
        <button type={'submit'} className={'btn btn-primary'}>
          Dodaj kontakt
        </button>
      </form>
    )
  },
})


