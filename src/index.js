import React , { Component } from 'react';
import ReactDom from 'react-dom'
import Add from './components/Add'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

/*
const logger=store=>next=>action=>{
    console.log('dispatching',action);
    let result=next(action);
    console.log('next state',store.getState());
    return result;
}
const error=store=>next=>action=>{
    try {
        next(action)
    }
    catch (e) {
        console.log(e);
    }
}

*/

const store = configureStore();


class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        // console.dir(this.props);
        return (
            <div>
                <Add/>
            </div>
        );
    }
}

Index.propTypes = {};

const renders = () => {
    ReactDom.render(<Provider store={store}>
        <div>
            <Index/>
        </div>
    </Provider> , document.getElementById('root'));

}
renders();
if (module.hot) {
    module.hot.accept('./index' , () => {
        renders();
    })

}

// store.subscribe(renders);

