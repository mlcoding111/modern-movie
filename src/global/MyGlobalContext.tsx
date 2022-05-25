import { createContext, useContext} from 'react'

export type GlobalContent = {
    data: any[]
    setData: (d: any[]) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
    data: [], // set a default value
    setData: () => {},
})

export type GlobalTypeContent = {
    type: string,
    setType: (d: string) => void
}

export const MyGlobalTypeContext = createContext<GlobalTypeContent>({
    type: "movie", // set a default value
    setType: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)

export const useGlobalTypeContext = () => useContext(MyGlobalTypeContext)