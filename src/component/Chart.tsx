import React, {useState, Children} from 'react'
import styled from 'styled-components'
//import NodeGuide from './Node'

import { Layer, Circle, Line, Text, Group, Rect } from 'react-konva';
import {IAction} from '../Store'
import { KonvaEventObject } from 'konva/types/Node';



interface ChartProps {
    dispatch: React.Dispatch<IAction>
    selectNodeID :number
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

const Chart: React.FC<ChartProps> = (props) => {
    const dispatch= props.dispatch

    const thisNodeInfo = props.nodes.find((nodeInfo) => nodeInfo.id===0)
    if(!thisNodeInfo) throw new Error()
    const x=thisNodeInfo.x
    const y=thisNodeInfo.y
    const size=thisNodeInfo.size
    const radius=thisNodeInfo.radius
    const id = thisNodeInfo.id
    const attribution = thisNodeInfo.attribution
    const childID = thisNodeInfo.childID

    const SelectNode = (e:KonvaEventObject<MouseEvent>) => {
        dispatch({
            type: "SelectNode",
            payload: {...props, selectNodeID: id}
        })
        e.cancelBubble = true
    }
    const isSelectNode = (props.selectNodeID === id)
    return(
        <>
            {isSelectNode ? <NodeGuide xNode={x} yNode={y} /> : null}
            { (id !== 0)? <Circle x={x} y={y} size={size} radius={100} draggable={true} fill="green" onClick={(e)=> SelectNode(e)} />
                        : <Circle x={x} y={y} size={size} radius={100} fill="green" onClick={(e)=> SelectNode(e)} />}
        </>
    )
}

export default Chart

interface NodeGuideProps {
    xNode: number
    yNode : number
}

const NodeGuide: React.FC<NodeGuideProps> = (props) => {
    const Height = props.xNode
    const Width = props.yNode
    const LinePoints = [Width, Height, Width, Height - 200 ]
    return(
        <>
            <Line points = {LinePoints}
                  stroke = "gray" 
                  strokeWidth = {2}
                  lineCap = 'round'
                  lineJoin = 'round' />
            <Group>
                <Circle x={Width} y={Height - 200} radius={30} fill="gray" />
                <Text x={Width - 15} y={Height - 220} text='+' fontSize={50} fill='white' />
                <NodeGuideMenu xNode={Width + 100} yNode={Height - 200} />
            </Group>
        </>
    )
}

const NodeGuideMenu: React.FC<NodeGuideProps>  = (props) => {
    const width = 100
    const height = 31
    const xMenu = props.xNode - width/2
    const yMenu = props.yNode - height/2
    const menuArray=['What','When','Where','Who','Why','How']
    
    interface MenuElementProps {
        element: string
        index:  number
    }

    const MenuElement: React.FC<MenuElementProps> = (props) => {
        const element = props.element
        const index = props.index - 3
        return(
            <>
                <Rect x={xMenu} 
                    y={yMenu + 30 * index} 
                    width={width}
                    height={height}
                    fill = 'gray' />
                <Text x={xMenu + 5} 
                    y={yMenu + 5 + 30 * index} 
                    text={element} 
                    fontSize={20} 
                    fill='white' />
            </>
        )
    }

    return(
        <>
            <Rect x={xMenu} 
                  y={yMenu-height*3.25} 
                  width={width}
                  height={height*6.5}
                  cornerRadius={height/3}
                  fill = 'gray' />
            {menuArray.map((value, index) => <MenuElement element={value} index={index} key={index}/>)}
        </>
    )
}

