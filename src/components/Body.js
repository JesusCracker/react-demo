import React, {Component} from 'react'
import {connect} from  'react-redux'
import action from '../store/action/index'

class Body extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // fresh: 0
        }
    }

    render() {


        // console.log('render');
        let {s,a} = this.props;
        // let {s = 0, a = 0} = getState();
        let rate = (s / (a + s)) * 100;
        // isNaN(rate) ? rate = 0 : null;
        return (
            <div className='card-body'>
                {this.state.fresh}
                <div className='alert alert-success'>支持人数:{s}</div>
                <div className='alert alert-warning'>反对人数:{a}</div>
                <div className='alert alert-dark'>支持率:{rate.toFixed(2) + "%"}</div>
            </div>
        )
    }

/*    componentDidMount() {
        this.props.store.subscribe(() => {
            this.setState({fresh: this.state.fresh + 1});
        })
    }*/
}

export default connect(state=>({...state.vote}),action.vote)(Body)

