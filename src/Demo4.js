import { useState, memo } from 'react'

//默认的渲染机制是父组件状态变化，子组件跟着父组件一起被重新渲染
//memo函数包裹进行缓存，只有props变化时才会重新渲染（context），状态变化不会重新渲染
//prop（count）变化时组件重新渲染
//传递一个引用类型的prop 比较的是新值和旧值的引用是否相等 当父组件重新渲染时，引用类型新值和旧值比较结果为false
//useMemo保证引用稳定，

const MemoSon = memo(function Son({ count }) {
    console.log("我是子组件，我重新渲染了")
    return <div>this is son{count}</div>
})

function Demo4() {
    const [count, setCount] = useState(0)
    const list = useMemo(() => {
        return [1, 2, 3]
    }, [])
    return (<div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        {/* <Son /> */}
        <MemoSon count={count} />
    </div>)
}
export default Demo4