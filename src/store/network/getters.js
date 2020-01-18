
import icons from 'assets/icons'

/**
 * map the json input props to the
 * vue-d3-network name/source/target props
 */
const getVertices = state => state.json.vertices.map((x) => {
    return {
        ...x,
        name: x.label,
        svgSym: x.type === 'alarm' ? icons.alarm : icons.server,
    }
})
const getEdges = state => state.json.edges.map((x) => {
    return {
        ...x,
        tid: x.target_id,
        sid: x.source_id,
        name: x.label
    }
})

export default {
    getVertices,
    getEdges
}
