import { FC } from "react";
interface CursorProps{
    color:string;
}


export const Cursor:FC<CursorProps>=()=>{
    return <AnimatedCursor
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    hasBlendMode={true}
    innerStyle={{
      backgroundColor: 'var(--cursor-color)'
    }}
    outerStyle={{
      border: '3px solid var(--cursor-color)'
    }}
  /> 
  //Creating the effect
  //
  //
}