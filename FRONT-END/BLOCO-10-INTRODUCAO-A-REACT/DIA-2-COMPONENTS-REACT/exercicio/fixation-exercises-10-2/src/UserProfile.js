// arquivo UserProfile.js
import React, { Component } from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

class UserProfile extends Component {
  render() {

    const { id, name, email, idade, avatar } = this.props.user;

    return (
      <div>
        <p> ID: { id } </p>
        <p> NOME: { name } </p>
        <p> EMAIL: { email } </p>
        <p> IDADE: { idade } </p>
        <Image source={ avatar } alternativeText="User avatar" />
      </div>

      /*
      <div>
        <p> ID: {this.props.user.id} </p>
        <p> NOME: {this.props.user.name} </p>
        <p> EMAIL: {this.props.user.email} </p>
        <p> IDADE: {this.props.user.idade} </p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
      */
    );
  }
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  idade: PropTypes.number,
};

UserProfile.defaultProps = {
  name: 'preencher nome!!'
}

export default UserProfile;