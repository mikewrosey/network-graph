import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Store from 'src/store/network'
import * as All from 'quasar'

const { Quasar } = All
const components = Object.keys(All).reduce((object, key) => {
    const val = All[key]
    if (val && val.component && val.component.name != null) {
        object[key] = val
    }
    return object
}, {})

const localVue = createLocalVue()
localVue.use(Quasar, { components })
localVue.use(Vuex)

// Network Actions and Getters
describe('network actions and getters', () => {
    let store
    let testJson
    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                Network: Store
            }
        })
        testJson = {
            "vertices": [{
                "id": "n1",
                "label": "Node 1",
                "type": "node"
            }, {
                "id": "n2",
                "label": "Node 2",
                "type": "node"
            }],
            "edges": [{
                "id": "e1",
                "label": "edge n1-n2",
                "type": "link",
                "source_id": "n1",
                "target_id": "n2"
            }]
        }
    })
    // input JSON
    it('Sets the JSON in state', () => {
        store.dispatch('Network/updateJson', testJson)
        expect(store.state.Network.json.vertices[0].id).toBe("n1")
        expect(store.state.Network.json.edges[0].id).toBe("e1")
    })

    // getVertices
    it('Returns vertices with appropriate props', () => {
        store.dispatch('Network/updateJson', testJson)
        const vertices = store.getters['Network/getVertices']
        expect(vertices[0]).toHaveProperty('name', 'Node 1');
    })

    // getEdges
    it('Returns vertices with appropriate props', () => {
        store.dispatch('Network/updateJson', testJson)
        const edges = store.getters['Network/getEdges']
        expect(edges[0]).toHaveProperty('tid', 'n2');
        expect(edges[0]).toHaveProperty('sid', 'n1');
        expect(edges[0]).toHaveProperty('name', 'edge n1-n2');
    })
})
