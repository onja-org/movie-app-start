import React from 'react';
import "./App.css"

function App() {
	return (<div className="App">
	<header className="App-header">
	  <HelloWorld />
	</header>
  </div>);
}

function HelloWorld() {
	return <h1>Hello World!</h1>
  }

export default App;
