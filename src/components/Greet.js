import React from 'react'
// stateless component, functional component
// function Greet(){
//     return <h1>Hello Xitol</h1>
// }

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
        <h1>
            Hello {name} a.k.a {heroName}
            </h1>
        </div>
    ) 
}
export default Greet