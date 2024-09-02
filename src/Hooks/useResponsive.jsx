import { useEffect,useState } from "react";

export const useResponsive=(breakpoints)=>{
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        const upDateIndex=()=>{
            const width = window.innerWidth;
            const newIndex = breakpoints.findIndex((bp)=>width<=bp);
            setIndex(newIndex===-1?breakpoints.length:newIndex);
        };

        upDateIndex();
        window.addEventListener("resize",upDateIndex);
        return()=>window.removeEventListener("resize",upDateIndex);
    },[breakpoints])
    return index;
}