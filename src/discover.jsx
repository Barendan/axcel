'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/Logo';
import Suggest from './components/Suggest';
import Button from './components/Button';
import Rating from './components/Rating';


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

  	<h2>Rating</h2>
  	<div>No initial value: <Rating /></div>
  	<div>Initial value 4: <Rating defaultValue={4} /></div>
  	<div>This one goes to 11: <Rating defaultValue={11} /></div>
  	<div>Read-only: <Rating readonly={true} defaultValue={3} /></div>

  </div>,
  	document.getElementById('app')
);