import React from 'react'
import '../Dialog.less'
class Dialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className='mask' style={{display:this.props.display}}>
                <div className='content'>
                    <button onClick={this.props.hide}>&times;</button>
                </div>
            </div>
        );
    }

}

Dialog.propTypes = {};

export default Dialog;