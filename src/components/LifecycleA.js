import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Xitol'
      }
      console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA ComponentDidMount')
    }
  render() { 
        console.log('LifecycleA render')
        return(<div>
            <div>Lifecycle A</div>
            <LifecycleB />
        </div>) 
  }
}

export default LifecycleA