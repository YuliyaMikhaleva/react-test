import {DECREMENT, INCREMENT} from "./types"
//action = { type: string, payload: нагрузка - любое значение}
//action creator

//эта функция - это action creator.
//объект, который возвращает эта функция - это наш action
// export const increment = () => ({type: "INCREMENT"})

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})