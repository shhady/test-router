import React, { Component } from 'react'

export default class NewProduct extends Component {
    componentWillUnmount (){
        console.log("this new product component was destroyed")
    }
  render() {
    return (
      <div>New Product component</div>
    )
  }
}
