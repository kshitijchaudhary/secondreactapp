import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Xitol'
      }
      console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB ComponentDidMount')
    }
  render() { 
        console.log('LifecycleB render')
        return <div>Lifecycle B</div>
  }
}

export default LifecycleB