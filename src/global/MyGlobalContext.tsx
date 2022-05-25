import { createContext, useContext} from 'react'

export type GlobalContent = {
    data: any[]
    setData: (d: any[]) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
    data: [], // set a default value
    setData: () => {},
})


export const useGlobalContext = () => useContext(MyGlobalContext)
