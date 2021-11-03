import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <i className={this.props.icon}></i> {this.props.title}
                    </Link>
                </div>
            </nav>
        )
    }
}

Navbar.defaultProps={ //Veri gelmediğinde(props) varsayılan olarak veri almayı sağlıyor
    icon: "fab fa-github",
    title: "GitHub"
};

Navbar.propTypes={ // Property lerin tipleri ve sorunlulukları tanımlanıyor
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Navbar
