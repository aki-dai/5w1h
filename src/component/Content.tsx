import React, {useContext} from 'react'
import Header from './Header'
import Chart from './Chart'

import styled from 'styled-components'
import { Stage, Layer } from 'react-konva';
import {Store, initialStore} from '../Store'

const Content: React.FC = () => {
    const {state, dispatch} = React.useContext(Store)
    //console.log("container",state)
    const Width = window.innerWidth
    const Height = window.innerHeight
    return(
        <Wrapper>
            <Stage width={Width} height={Height} 
                draggable={true}
                onClick={()=>dispatch({
                    type: "SelectNode",
                    payload: {...state, selectNodeID: -1}
                })}>
                    <Layer>          
                        <Chart dispatch={dispatch} selectNodeID={state.selectNodeID} nodes={state.nodes} />
                    </Layer>
            </Stage>
        </Wrapper>
    )
}

export default Content

const Wrapper = styled.div`
    background-color: #15254f;
    height          : 100vh;
    width           : 100vw;
    position        : relative
`