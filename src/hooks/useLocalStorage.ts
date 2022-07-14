import { useEffect, useState } from "react";

export function useLocalStorage<T>(key:string, initialValue: T |(()=> T)) {

    //IMPLEMENT USESTATE HOOK USING THE FUNCTION TYPE SO WE CHECK THE LOCAL STORAGE ONCE AND NOT EVERYTIME THERES A RE-RENDER
    //THIS USESTATE WILL GET THE VALUE T from localstorage or the initial value passed in
     const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if(jsonValue !== null) return JSON.parse(jsonValue)

        // if jsonValue is not available
        if(typeof initialValue === 'function'){
            return (initialValue as () => T)()
        }else{
            return initialValue
        }
        
    })
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])
    
    return [value, setValue] as [typeof value, typeof setValue ]
}