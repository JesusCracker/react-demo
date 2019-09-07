import React , { Component } from 'react';
import {connect} from "react-redux";
import * as types from "../actions";
import {bindActionCreators} from "redux";
import User from "./User";

class Add extends Component {
    render() {
        const {increment,decrement}=this.props;

        return (
            <div className='text-center'>
                <h2>{this.props.counter}</h2>
                <button onClick={increment}  className='btn btn-primary'>increase</button>
                <button onClick={decrement} className='btn btn-danger'>decrease</button>
                <User/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(types , dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(Add);