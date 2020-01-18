// only actions called from components, never mutations directly

const updateJson = ({ commit }, json) => {
    commit('UPDATE_JSON', json)
}
export default {
    updateJson
}
