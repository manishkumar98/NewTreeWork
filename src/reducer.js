import {addChild,removeNode,increment} from "./Action";

const childId=(state,action)=>({
  switch(action.type){
    case addChild:
      return [...state,action.childId]
    case removeChild:
      return state.filter((id)=>id!==childId)
    default:
      return state
  }
} )
const 