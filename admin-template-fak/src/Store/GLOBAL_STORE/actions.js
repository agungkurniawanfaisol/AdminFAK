import { CHANGEHANDLESTATE } from './constants'

export const ChangeHandleState = ({ dispatch }, data, func) => {
    dispatch({ type: CHANGEHANDLESTATE, payload: { data, func } })
}
