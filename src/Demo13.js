//zustand异步获取数据
import { useEffect } from "react"
import { create } from "zustand"

const URL = "http://localhost:8888/chanels"

//1.拆分子模块
const createCounterStore = (set) => {
    return {
        count: 0,
        inc: () => {
            set((state) => ({ count: state.count + 1 }))
        }
    }
}
const createChanelStore = (set) => {
    return {
        chanels: [],
        fetchGetList: async () => {
            const res = await fetch(URL)
            const jsonData = await res.json()
            console.log(jsonData)
            set({
                chanels: jsonData
            })
        }
    }
}
//2.子模块组合
const useStore = create((...a) => {
    return {
        ...createCounterStore(...a),
        ...createChanelStore(...a)

    }
})


function Demo13() {
    const { count, inc, fetchGetList, chanels } = useStore()
    useEffect(() => {
        fetchGetList()
    }, [fetchGetList])
    return (<div>demo12
        <>
            <button onClick={inc}>{count}</button>
        </>

        <ul>
            {
                chanels.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </div>)
}
export default Demo13