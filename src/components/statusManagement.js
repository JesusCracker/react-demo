import React from 'react';

class Great extends React.Component {
    constructor(props,context) {
        super(props,context);

        this.state = {
            number:0
        };

    }

    render() {
        let {number}=this.state;
        return (
            <div>
                <span ref='number'>0</span>
                <button className='add' onClick={this.add1}>add</button>
                <button className='desc' onClick={this.desc}>desc</button>
            </div>
        );
    }

    add1=()=>{
        // this.setState({number:this.state.number+1});
        let s=parseInt(this.refs.number.innerHTML);
        this.refs.number.innerHTML=s+1;
    }

    desc=()=>{
        // this.setState({number:this.state.number-1})
        let s=parseInt(this.refs.number.innerHTML);
        this.refs.number.innerHTML=s-1;
    }


}

Great.propTypes = {};

export default Great;