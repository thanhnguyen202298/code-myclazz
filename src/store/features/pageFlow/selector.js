
const defaultState = {
    stack: [],
};
const getPageManage = (state) => state.pageFlow || defaultState
// eslint-disable-next-line import/prefer-default-export
export const getStack = (state) => getPageManage(state).stack