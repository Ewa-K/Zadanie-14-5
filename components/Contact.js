var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return ( 
            <div className = { 'contactItem row bg-info' }>
                <img className = { 'contactImage img-responsive pull-left' } src = { 'https://image.flaticon.com/icons/svg/181/181549.svg' }/> 
                <p className = { 'contactLabel' }>
                    Imię: { this.props.item.firstName } 
                </p> 
                <p className = { 'contactLabel' }>
                    Nazwisko: { this.props.item.lastName }
                </p> 
                <a href = { 'mailto' + this.props.item.email }>
                </a> 
            </div>
        )
    },
});



/*React.createElement('div', { className: 'contactItem row bg-info' },
                React.createElement('img', {
                    className: 'contactImage img-responsive pull-left',
                    src: 'https://image.flaticon.com/icons/svg/181/181549.svg'
                }),
                React.createElement('p', { className: 'contactLabel' }, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', { className: 'contactLabel' }, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', { className: 'contactEmail', href: 'mailto:' + this.props.item.email },
                    this.props.item.email
                )
            )*/