export const state = () => ({
    // other state properties...
    loginDialog: false,
});

export const mutations = {
    // other mutations...
    setLoginDialog(state, value) {
        state.loginDialog = value;
    },
};
