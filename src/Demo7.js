//父组件调用子组件方法
import { forwardRef, useImperativeHandle, useRef } from "react"

const Son = forwardRef((props, ref) => {
    const inputRef = useRef(null)
    const focusHandler = () => {
        inputRef.current.focus()
    }
    useImperativeHandle(ref, () => {
        return {
            focusHandler
        }
    })
    return <input type="text" ref={inputRef} />
})
function Demo7() {
    const sonRef = useRef(null)
    const focusHandler = () => {
        console.log(sonRef.current)
        sonRef.current.focusHandler()
    }

    return (
        <>
            <Son ref={sonRef} />
            <button onClick={focusHandler}>focus</button>
        </>
    )
}
export default Demo7