/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-24 23:12:35
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-30 14:36:16
 */
//合并reducer
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
//reducer
import UserReducer from './modules/user/index'
import ThemeReducer from './modules/theme/index'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2 //默认只合并一层 指定调节器合并多层
}
const rootReducer = combineReducers({
  theme: ThemeReducer,
  user: UserReducer
})
export type RootReducer = ReturnType<typeof rootReducer>
const persistedReducer = persistReducer<RootReducer>(persistConfig, rootReducer)
//configstore 创建sore对象
//middleWare 配置中间件拦截action进行操作
//配置devtool工具 默认true
export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return import.meta.env.MODE === 'development'
      ? getDefaultMiddleware({
          serializableCheck: false
        }).concat(logger)
      : getDefaultMiddleware({
          serializableCheck: false
        })
  },
  devTools: import.meta.env.MODE === 'development'
})
// 配置中间件
// RTk已经默认使用了redux-thunk,这里不需要额外引入了
// 如果需要一些自定义的中间件,可以通过调用 getDefaultMiddleware
// 并将结果包含在返回的中间件数组中
// 并且可以显示调用前的数据状态和调用后的数据状态
export const persister = persistStore(store)

//全局定义action和state 的类型并导出

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//主要解决在每次使用 useSelector 和 useDispatch 都要去重新定义 TS 类型的问题
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
