'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Whinepad from './components/Whinepad';
import schema from './schema';
// import '../css/logo.css'
import '../css/app.css'

let data = JSON.parse(localStorage.getItem('data'));

if(!data) {
	data = {};
	schema.forEach(item => data[item.id] = item.sample);
	data = [data];
}

ReactDOM.render(
	<div>
    	<div className="app-header">
    		<Logo /> Welcome to Axcel!
    	</div>
    	<Whinepad schema={schema} initialData={data} />
    </div>,
    document.getElementById('app')
);