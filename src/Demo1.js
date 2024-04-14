
import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "INC": return state + 1;
        case "DEC": return state - 1;
        case "SET": return action.payload;
        default: return state

    }
}
function Demo1() {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <button onClick={() => dispatch({ type: 'DEC' })}>1</button>
            {state}
            <button onClick={() => dispatch({ type: 'INC' })}>+</button>
            <button onClick={() => dispatch({ type: 'SET', payload: 100 })}>update to 100</button>
        </div>
    );
}

export default Demo1;
