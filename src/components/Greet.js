import React from 'react'
// stateless component, functional component
// function Greet(){
//     return <h1>Hello Xitol</h1>
// }

const Greet = props => {
    console.log(props)
    return (
        <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
        </div>
    ) 
}
export default Greet