var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm container form-inline'}>
        <input className={'form-control'} type={'text'} placeholder={'Imię'} value={'this.props.contact.firstName'}>
        <input className={'form-control'} type={'text'} placeholder={'Nazwisko'} value={'this.props.contact.lastName'}>
        <input className={'form-control'} type={'email'} placeholder={'Email'} value={'this.props.contact.email'}>
        <button type={'submit'} className={'btn btn-primary'}>
          Dodaj kontakt
        </button>
      </form>
    )
  },
})



/*React.createElement('form', {className: 'contactForm container form-inline'},
        React.createElement('input', {
          className: 'form-control',
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
        }),
        React.createElement('input', {
          className: 'form-control',
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
        React.createElement('input', {
          className: 'form-control',
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('button', {type: 'submit', className: 'btn btn-primary'}, "Dodaj kontakt")
      )*/