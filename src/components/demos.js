import React from 'react';

class Demos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {d:'xxxx'};

    }

    render() {
        let{d}=this.state;

        return (
            <div>
                <input type="text" defaultValue={d} onChange={this.change}/>
                <h1>{d}</h1>
            </div>
        );
    }

    change=(e)=>{
        // console.log(e.target.value);

        this.setState({d:e.target.value})
    }
}

Demos.propTypes = {};

export default Demos;