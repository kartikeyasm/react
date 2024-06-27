import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const reactElement=React.createElement(
  'a',                          //Tag Name
  {href:"#", target:'_blank'},  //Attributes
  'click me'                    //innerHTML
)

const anotherElement=(
  <a href='www.google.com' target="_blank">Another Link</a>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>
  {reactElement}
  <br/>
  {anotherElement}
  </>

);

