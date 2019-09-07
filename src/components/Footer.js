import React, {Component} from 'react'

export default class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='card-footer'>
                <button className='btn btn-primary' onClick={() => {
                    this.props.store.dispatch({type:"SUPPORT"})
                }}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={() => {
                   this.props.store.dispatch({type:"AGAINST"})
                }}>反对
                </button>
            </div>
        )
    }
}


