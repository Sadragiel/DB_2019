export default (storeName) => {
    const getStore = (state) => (state[storeName] && state[storeName].data) || {};

    return {
        getList: state => getStore(state).list,
        getInstance: state => getStore(state).instance,
    };
}