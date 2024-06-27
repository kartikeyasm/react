function customRender(reactElement, root){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children
    
    domElement.setAttribute("href", reactElement.props.href)
    domElement.setAttribute("target", reactElement.props.target)
    root.appendChild(domElement);
}

const reactElement={
    type: 'a',
    props:{
        href: "#",
        target: "_blank"
    },
    children: "Click me to visit google"
};


const root=document.getElementById("root");

customRender(reactElement, root);