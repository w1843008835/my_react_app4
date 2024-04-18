//zustand异步获取数据
import { useEffect } from "react"
import { create } from "zustand"

const URL = "http://localhost:8888/chanels"
const useStore = create((set) => {
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
})


function Demo12() {
    const { fetchGetList, chanels } = useStore()
    useEffect(() => {
        fetchGetList()
    }, [fetchGetList])
    return (<div>demo12

        <ul>
            {
                chanels.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </div>)
}
export default Demo12