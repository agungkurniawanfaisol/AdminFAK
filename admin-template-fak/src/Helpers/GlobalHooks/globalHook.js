function setState(store, newState) {
    store.prevState = { ...store.state }
    store.state = { ...store.state, ...newState }
    store.listeners.forEach((listener) => {
        listener(store.state)
    })
}

function useCustom(store, React) {
    const newListener = React.useState()[1]
    React.useEffect(
        () => {
            store.listeners.push(newListener)
            return () => {
                store.listeners = store.listeners.filter(
                    (listener) => listener !== newListener,
                )
            }
        },
        // eslint-disable-next-line
        [],
    )

    return [store.state, store.actions]
}

function associateActions(store, actions) {
    const associatedActions = {}
    Object.keys(actions).forEach((key) => {
        if (typeof actions[key] === 'function') {
            associatedActions[key] = actions[key].bind(null, store)
        }
        if (typeof actions[key] === 'object') {
            associatedActions[key] = associateActions(store, actions[key])
        }
    })
    return associatedActions
}

const useStore = (React, initialState, actions, reducer) => {
    const store = {
        prevState: {},
        state: initialState,
        listeners: [],
    }
    store.setState = setState.bind(null, store)
    store.actions = associateActions(store, actions)
    if (reducer) {
        store.dispatch = (action) => {
            reducer(store, action)
        }
    }
    return useCustom.bind(null, store, React)
}

export default useStore
