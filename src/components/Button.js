import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../css/button.css';
// class Button extends React.Component{
// 	constructor(props){
// 		super(props)
// 	}

// 	const cssclasses = classNames('Button', props.className)
// }

const Button = props => 
	props.href
	? <a {...props} className={classNames('Button', props.className)} />
	: <button {...props} className={classNames('Button', props.className)} />


Button.propTypes = {
	href: PropTypes.string,
}

export default Button