import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
var curDate= new Date(2021,1,2,13);
curDate= curDate.getHours();
var greetings='';
const cssStyle = {};
if(curDate >=1 && curDate<=12){
  greetings="Good morning";
  cssStyle.color = "blue";
}else if(curDate >=12 && curDate <19){
  greetings="Good Afternoon";
  cssStyle.color = "orange";
}else{
  greetings="Good night";
  cssStyle.color = 'brown';
}
ReactDOM.render(
  <>
  <div>
<h1>
  Hello everyone, <span style={cssStyle}> {greetings}</span>
</h1>,
</div>
</>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
