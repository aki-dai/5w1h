import React from 'react'

interface IStore {
    selectNodeID: number
    nodes:{ 
            x           : number
            y           : number
            size        : number
            radius      : number
            id          : number
            attribution : string
            childID     : number[]
        }[]
}

export interface IAction {
    type: string
    payload: IStore
}

export const initialStore = {
    selectNodeID: -1,
    nodes:[
        {
            x           : 0,
            y           : 0,
            size        : 20,
            radius      : 100,
            id          : 0,
            attribution : 'root',
            childID     : [],
        }
    ]
}

const reducer: React.Reducer<IStore, IAction> = (state: IStore, action: IAction) => {
    console.log(action)
    switch(action.type){
        case "SelectNode":
            return {...action.payload}
        case "CreateNewNode":
            return{
                ...state,
            }
        case "EditNode":
        case "MoveNode":
        case "DeleteNode":
        case "FetchChart":
        default:
            throw new Error();        
    }
}

interface StoreWithAction {
    state: IStore
    dispatch: React.Dispatch<IAction>
}

export const Store = React.createContext<StoreWithAction>({
    state: initialStore,
    dispatch: () => {}
})

export const StoreProvider: React.FC<React.Props<{}>> = props => {
    const[state, dispatch] = React.useReducer(reducer, initialStore)
    return(
        <Store.Provider value={{state: state, dispatch: dispatch }}>
            <Store.Provider value={{state: state, dispatch: dispatch }}>
                {props.children}
            </Store.Provider>
        </Store.Provider>    
    )
}


