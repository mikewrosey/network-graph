export default {
    json: {
        vertices: [
            {
                id: "n1",
                label: "Node 1",
                type: "node"
            },
            {
                id: "n2",
                label: "Node 2",
                type: "node"
            },
            {
                id: "a1",
                label: "Alarm 1",
                type: "alarm"
            }
        ],
        edges: [
            {
                id: "e1",
                label: "edge n1-n2",
                type: "link",
                source_id: "n1",
                target_id: "n2"
            },
            {
                id: "e2",
                label: "edge n2-a1",
                type: "link",
                source_id: "n2",
                target_id: "a1"
            }
        ]
    }
}
