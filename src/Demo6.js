//父组件通过forwardRef拿到子组件dom元素进行操作
import { forwardRef, useRef } from "react"
// function Son() {
//     return <input type="text" />
// }
const Son = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />
})
function Demo6() {
    const sonRef = useRef(null)
    const showref = () => {
        console.log(sonRef)
        sonRef.current.focus()
    }
    return (
        <>
            <Son ref={sonRef} />
            <button onClick={showref}>focus</button>
        </>
    )
}
export default Demo6