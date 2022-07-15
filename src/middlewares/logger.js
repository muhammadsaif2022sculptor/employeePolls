const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log("action is: ", action);
        const value = next(action);
        console.log("new state is: ", store.getState());
    console.groupEnd()
    return value
}

export default logger