//useCallBack保证引用稳定

import { memo, useCallback, useState } from "react";

const Input = memo(function Input({ onChange }) {
    console.log('子组件重新渲染了')
    return <input type="text" onChange={(e) => onChange(e.target.value)}></input>
})

function Demo5() {
    const changeHandler = useCallback((value) => console.log(value), [])
    const [count, setCount] = useState(0)
    return (
        <div>
            <Input onChange={changeHandler}></Input>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}
export default Demo5