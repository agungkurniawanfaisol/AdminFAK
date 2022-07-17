
const FIRST_LOAD = async (StateValue, ChangeHandleState, useGlobalStore, Navigate) => {
    setTimeout(() => {
        ChangeHandleState(false, "IS_LOADING")
    }, 2000);

}

export default FIRST_LOAD