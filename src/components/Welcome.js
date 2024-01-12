import React, {Component} from "react";
//stateful widget, class component
class Welcome extends Component{
    render()
    {
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }

}

export default Welcome