import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./state";

//тут то, что было в редюссере
export const counterSlice = createSlice({
    name:'counter',//название редюссера
    initialState,//добавляем его стейт
    reducers: {
    // Обычные редюссеры, видимо для экшенов без side-эффектов
    // Автоматом создается экшен одноименный с редюссером
    //их надо заполнять, если не надо никаких запросов к серверу делать
    // что-то типо мутаторов
    //пэйлоад с дженириком, и в этом дженерик надо класть тип который будет в пэйлоаде
    // payloadAction:PayloadAction<Todo[]>

        //Эти экшены вызываются через useAppDispatch
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count += 1
        },
        //Используйте тип PayloadAction для объявления содержимого action.payload.
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
    },
    // если нужно сделать какой-то запрос, то создается файл async.ts
    // редюссеры, которые обрабатывают side-эффекты в async.ts
    // extraReducers:(builder:ActionReducerMapBuilder<NoInfer<State>>)=> {
    //     builder.addCase(fetchCounter.fulfilled, (state:CounterInitialState, action:PayloadAction<Counter[]>))
    // })
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer