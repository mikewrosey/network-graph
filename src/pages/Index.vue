<template>
    <q-page class="flex row">
        <div class="q-pa-md col">
            <q-card class="fit">
                <JsonInput/>
            </q-card>
        </div>
        <div class="q-py-md q-pr-md col">
            <q-card class="fit">
                <Graph/>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import JsonInput from 'src/components/JsonInput'
import Graph from 'src/components/Graph'
export default {
    name: 'MainPage',
        components: {
            JsonInput,
            Graph
        }
    }
</script>
