import React from "react"

const Hello= () =>{
    // return(
    //     <div>
    //         <h1> Hello Xitol</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Xitol Don'))
}

export default Hello