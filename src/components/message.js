import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr:[]
        };

    }

    static defaultProps={
        title:'xxxx'
    }

    render() {
        let {title}=this.props;
        return (
            <div>
                <Header add={this.addList} title={title}></Header>
                <List msg={this.state.arr}></List>
            </div>
        );
    }

    addList=(data)=>{
      let {arr}=this.state;
      arr.push(data);
      this.setState({arr});

    }
}

class Header extends Message {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let {title}=this.props;
        return (
            <div>
                <p className='title'>{title}</p>
                <input type="text" onKeyUp={this.change} placeholder={'请输入xxx'}/>
            </div>
        );
    }

    change=(e)=>{
      if(e.keyCode===13){
          let message=e.target.value;
          this.props.add(message);
      }

    }
}


class List extends Message {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        let {msg}=this.props;
        console.log(this.props.msg);
        return (
            <div>
                这里是列表内容
                <hr/>
                {msg.map((item,index)=>{
                    return <div key={index}>{item}</div>
                })}

            </div>
        );
    }
}







Message.propTypes = {};

export default Message;