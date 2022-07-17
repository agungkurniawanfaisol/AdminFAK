import React from 'react'
import globalHook from 'Helpers/GlobalHooks/globalHook'
import * as actions from './actions'
import reducer from './reducer'

const initialState = {
    IS_LOADING: true,
    VAL_STORAGE: {},
    VAL_TOKEN: {},
    VAL_HALAMAN: {},
    VAL_SIDEBAR: true,
}

const useStore = globalHook(React, initialState, actions, reducer)

export default useStore