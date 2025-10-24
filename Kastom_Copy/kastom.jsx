import {useState,useCallback,useEffect} from "react";

export default function useCopyToClipBoard() {
    const [isCopied, setIsCopied] =
        useState(false);
    const copy = useCallback(text => {
        if (typeof text != 'string') {
            return
        }
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setIsCopied(true)
            })
            .catch(err => {
                console.log('unable to copy text: ', err)
            })
    }, [])
    useEffect(()=>{
        if(isCopied){
            const timer=setTimeout(()=>{
                setIsCopied(false)
            },3000)
            return()=>{
                clearTimeout(timer)
            }
        }
    },[isCopied])
    return{isCopied,copy}
}