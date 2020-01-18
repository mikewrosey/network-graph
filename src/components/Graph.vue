<template>
    <div>
        <d3-network
            :net-nodes="vertices"
            :net-links="edges"
            :options="options"
        />
    </div>
</template>

<script>
import D3Network from 'vue-d3-network'
export default {
    name: "NetworkGraph",
    components: {
        D3Network
    },
    data: () => {
        return {
            options: {
                    force: 3000,
                    nodeSize: 30,
                    nodeLabels: true,
                    linkWidth:4
                }
            }
    },
    computed: {
        vertices() {
            return this.$store.getters['Network/getVertices']
        },
        edges() {
            return this.$store.getters['Network/getEdges']
        }
    }
}
</script>

<style src="vue-d3-network/dist/vue-d3-network.css"></style>
