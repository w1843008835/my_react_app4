import { create } from "zustand"


// 状态管理工具
//语法容易出错
//1.函数参数必须返回一个对象，对象内部编写状态数据和方法
//2.set函数是专门用来修改数据的方法
//参数是函数，需要用到老数据的场景 或者 参数直接是一个对象 set({count:100})
const useStore = create((set) => {
    return {
        count: 0,
        inc: () => {
            set((state) => ({ count: state.count + 1 }))
        }
    }
})

function Demo11() {
    const { count, inc } = useStore()
    return (<>
        this is app
        <button onClick={inc}>{count}</button>
    </>)
}

export default Demo11