'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';
import Logo from './components/Logo';
import Suggest from './components/Suggest';


ReactDOM.render(
  <div style={ { padding: '20px'} }>
  	<h1>Component Discoverer</h1>

	<h2> Logo </h2>
	<div style={ {display: 'inline-block', background: 'purple'} }>
		<Logo />
  	</div>

  	<h2>Buttons</h2>
  	<div>
  		Button with onclick: 
  		<Button onClick={() => alert('ouch')}> Click me</Button>
  	</div>
  	<div>A link: <Button href="http://reactjs.com">Follow me</Button></div>
  	<div>Custom class name: <Button className="custom">I do nothing</Button></div>

  	<h2>Suggest</h2>
  	<div><Suggest options={['eenie', 'meenie', 'mminey', 'mo']} /></div>


  </div>,
  	document.getElementById('app')
);