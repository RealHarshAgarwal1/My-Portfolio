import React, { FC,ReactNode } from "react";
import WaterWave from "react-water-wave";



interface WaterWaveWrapperProps {
    imageUrl: string;
    dropRadius: string;
    perturbance: string;
    resolution: string;
    children: () => ReactNode;
}

const WaterWaveWrapper:FC<WaterWaveWrapperProps>=({children})=>{
    
    return <WaterWaveimageUrl={image}>
    {children}
    </WaterWaveimageUrl>
    // Making now a code
    //Still working on the animation.
    //facing a bug.........
    //break
}