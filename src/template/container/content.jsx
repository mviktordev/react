import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Content extends React.Component {
  render() {
    return ( 
		<div>
			<header1 />
			<text/>
			<footer/>
		</div>
		);
	}
}

ReactDOM.render(
  <Content/>,
  document.querySelector('.content')
);