import React, {Component} from "react";
//stateful widget, class component
class Message extends Component{
    
  constructor()
  {
    super()
    this.state = {
      message: 'Welcome Visitor'
    }
  }
  changeMessage(){
    this.setState({
        message: "Thank you Xitol for subscribing"
    })
  }
    
    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }

}

export default Message