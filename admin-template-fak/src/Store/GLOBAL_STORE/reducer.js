import * as consts from './constants'

export default function reducer({ setState }, action) {
    switch (action.type) {
        case consts.CHANGEHANDLESTATE:
            setState({
                [action.payload.func]: action.payload.data,
            })
            break

        default:
            break
    }
}