import React from 'react';
import axios from 'axios';
import NewProduct from './NewProduct';
const url = 'https://6291fd299d159855f0839283.mockapi.io'
class Counter extends React.Component {
    // {counter, name} = this.props;
    constructor(props){
        super(props)
        this.state = {
            count:0,
            name:'Liron',
            data: this.props.counter,
            obj:{}
        }
    }
    

    componentDidMount(){
        console.log('component has been created');
        // const fetchData = async () => {
        //     try {
        //       const response = await axios.get(url + '/shoes');
        //       this.setState({data: response.data});
        //     } catch (error) {
        //       console.error('Error fetching data:', error.message);
        //     }
        // }
        // fetchData()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state.count !== prevState.count) {
    //         console.log('ComponentDidUpdate: Component has been updated');
    //         console.log('previous state:', prevState)
    //         console.log('current state:', this.state)
    //         this.setState({count: prevState.count + 1})
    //     }
       
    // }

    handleIncrement = ()=>{
        this.setState((prevState)=> ({
            count: prevState.count + 1,
        }))
    }

    handledecrement= ()=>{
        this.setState((prevState)=> ({
            count: prevState.count - 1,
        }))
    }
    
    render(){
        console.log(this.state)
        // const {counter, name} = this.props;
        // const {count, name, data, obj} = this.state;
        // console.log(this.props)
        return <>
         {/* <h1>Class component the data is: {this.state.data}</h1> */}
        <h1>Class component the count is: {this.state.count}</h1>
           {this.state.count && <NewProduct />}
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handledecrement}>decrement</button>
        </>
    }
}

export default Counter;