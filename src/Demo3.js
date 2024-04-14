import { useState, memo } from 'react'

//默认的渲染机制是父组件状态变化，子组件跟着父组件一起被重新渲染
//memo函数包裹进行缓存，只有props变化时才会重新渲染（context），状态变化不会重新渲染
const MemoSon = memo(function Son() {
    console.log("我是子组件，我重新渲染了")
    return <div>this is son</div>
})

function Demo3() {
    const [count, setCount] = useState(0)

    return (<div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        {/* <Son /> */}
        <MemoSon />
    </div>)
}
export default Demo3