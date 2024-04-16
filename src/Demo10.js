import { Component } from "react";

//父传子：直接通过prop子组件标签身上绑定父组件中的数据即可
//子传父：在子组件标签身上绑定父组件中的函数，子组件中调用这个函数传递参数
//总结：类组件都依赖于this
class Son extends Component {
    render() {
        return (<>
            <div>i am son {this.props.msg}</div>
            <button onClick={() => this.props.onGetSonMsg('我是Son组件中的数据')}>sendmsgToParent</button>
        </>)

    }
}

class Parent extends Component {
    state = {
        msg: 'this is parent msg'
    }
    getSonMsg = (sonMsg) => {
        console.log(sonMsg)
    }
    render() {
        return <div>i am parent<Son msg={this.state.msg} onGetSonMsg={this.getSonMsg} /></div>
    }
}

function Demo10() {
    return (
        <>
            <Parent />
        </>
    )
}
export default Demo10