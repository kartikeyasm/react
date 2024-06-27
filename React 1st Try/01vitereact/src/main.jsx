import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const firstElement=(
  <a href="https://www.google.com">Click to visit google</a>
)
/* 
ReactDOM.createRoot(document.getElementById('root')).render(
  firstElement
)
*/


/*   //It is not allowed as react has a preset .createElement that takes (tag(string), properties(object), children(string))
const reactElement={
  type: "a",
  props: {
    href:"htt[s://google.com",
    target:"_blank"
  },
  children: "Click me to visit google"
}
*/

//React has a preset .createElement that takes (tagName(string), properties(object), children(string))
const secondElement= React.createElement(
  "a",
  {href: "#", target: "_blank"},
  "Click me to visit google"
)
/* 
ReactDOM.createRoot(document.getElementById('root')).render(
  secondElement
)
*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
