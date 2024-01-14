import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render(){
   //short circuit operator
    return this.state.isLoggedIn && <div>Welcome Xitol</div>

    //ternary operator, conditional operator
    // return this.state.isLoggedIn ? (
    //     <div> Welcome Xitol</div>
    //      ) : (
    //     <div> Welcome Guest</div>
    // )

    //elements variables
    // let message 
    // if (this.state.isLoggedIn) {
    //     message = <div> Welcome Xitol</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div> {message}</div>

    // if else variables
    // if (this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Welcome Nickol
    //         </div>
    //     )
    //     } else{
    //         return (
    //             <div>Welcome Guest</div>
    //         )
    //     }
    
    // return (
    //     <div>
    //         <div>Welcome Xitol</div>
    //         <div>Bye Mahan</div>
    //     </div> 
    // )
  }
}

export default UserGreeting