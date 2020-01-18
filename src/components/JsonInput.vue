<template>
    <div>
        <vue-json-editor
            v-model="json"
            mode="code"
            :show-btns="false">
        </vue-json-editor>
    </div>
</template>

<script>
import vueJsonEditor from 'vue-json-editor'
export default {
    name: "JsonInput",
    components: {
      vueJsonEditor
    },
    computed: {
        json: {
            get () { return this.$store.state.Network.json },
            set (json) { this.$store.dispatch('Network/updateJson', json) }
        }
    }
}
</script>

<style lang="scss">
    .jsoneditor-vue {
        height: calc(100vh - 82px);
        .jsoneditor {
            border: none;
        }
        .jsoneditor-menu {
            display: none;
        }
        .jsoneditor-outer {
            padding: 0;
            margin: 0;
        }
    }
</style>
