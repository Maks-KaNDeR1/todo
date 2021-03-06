import React from 'react'
import {Provider} from 'react-redux'
<<<<<<< HEAD
import {combineReducers} from 'redux'
import {tasksReducer} from '../../features/TodolistsList'
import {todolistsReducer} from '../../features/TodolistsList'
import {v1} from 'uuid'
import {appReducer} from '../../features/Application'
import thunkMiddleware from 'redux-thunk'
import {authReducer} from '../../features/Auth'
import {configureStore} from '@reduxjs/toolkit'
import {HashRouter} from 'react-router-dom'
import {AppRootStateType, RootReducerType} from '../../utils/types'
import {TaskPriorities, TaskStatuses} from '../../api/types'

const rootReducer: RootReducerType = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer,
    auth: authReducer
=======
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {tasksReducer} from '../../features/TodolistsList/tasks-reducer'
import {todolistsReducer} from '../../features/TodolistsList/todolists-reducer'
import {v1} from 'uuid'
import {AppRootStateType} from '../../app/store'
import {TaskPriorities, TaskStatuses} from '../../api/todolists-api'
import {appReducer} from '../../app/app-reducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
})

const initialGlobalState: AppRootStateType = {
    todolists: [
<<<<<<< HEAD
        {id: "todolistId1", title: "What to learn What to learn What to learn What to learn", filter: "all", entityStatus: 'idle', addedDate: '', order: 0},
=======
        {id: "todolistId1", title: "What to learn", filter: "all", entityStatus: 'idle', addedDate: '', order: 0},
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
        {id: "todolistId2", title: "What to buy", filter: "all", entityStatus: 'loading', addedDate: '', order: 0}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", status: TaskStatuses.Completed, todoListId: "todolistId1", description: '',
                startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
            {id: v1(), title: "JS", status: TaskStatuses.Completed, todoListId: "todolistId1", description: '',
                startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", status: TaskStatuses.Completed, todoListId: "todolistId2", description: '',
                startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
            {id: v1(), title: "React Book", status: TaskStatuses.Completed, todoListId: "todolistId2", description: '',
                startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low}
        ]
    },
    app: {
        error: null,
<<<<<<< HEAD
        status: 'succeeded',
        isInitialized: true
    },
    auth: {
        isLoggedIn: true
    }
};

export const storyBookStore = configureStore({
    reducer: rootReducer,
    preloadedState: initialGlobalState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});
=======
        status: 'idle',
        isInitialized: false
    },
    auth: {
        isLoggedIn: false
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState, applyMiddleware(thunkMiddleware));
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)
<<<<<<< HEAD


export const BrowserRouterDecorator = (storyFn: any) => (
    <HashRouter>{storyFn()}
    </HashRouter>)
=======
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
