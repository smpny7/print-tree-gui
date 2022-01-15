<template>
    <div id="app">
        <p>
            二分木を書く
        </p>
        <textarea v-model="output"></textarea>
        <!--<p>{{ output }}</p>-->
        <network id="network"
                 ref="network"
                 :edges="edges"
                 :nodes="nodes"
                 :options="options">
        </network>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            output: '{"type": "Pro_AST","varName": "null","value": "null","child": [{"type": "Decls_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "a","value": "null","child": [],"brother": [{"type": "Decls_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "a1","value": "null","child": [],"brother": [{"type": "Decls_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "b","value": "null","child": [],"brother": []}],"brother": []}]}],"brother": []}]}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "a","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "-2800","child": [],"brother": []}]}],"brother": []}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "b","value": "null","child": [],"brother": [{"type": "Mul_AST","varName": "null","value": "null","child": [{"type": "Factor_AST","varName": "null","value": "null","child": [{"type": "Add_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "a","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "null","child": [],"brother": []}]}],"brother": []}],"brother": [{"type": "Number_AST","varName": "null","value": "3","child": [],"brother": []}]}],"brother": []}]}],"brother": []}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "If_AST","varName": "null","value": "null","child": [{"type": "Cond_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "b","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "3000","child": [],"brother": []}]}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "b","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "3000","child": [],"brother": []}]}],"brother": []}],"brother": []}],"brother": []}]}],"brother": []}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "a1","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "9","child": [],"brother": []}]}],"brother": []}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "While_AST","varName": "null","value": "null","child": [{"type": "Cond_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "a1","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "2","child": [],"brother": []}]}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "b","value": "null","child": [],"brother": [{"type": "Mul_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "b","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "2","child": [],"brother": []}]}],"brother": []}]}],"brother": []}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "a1","value": "null","child": [],"brother": [{"type": "Add_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "a1","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "1","child": [],"brother": []}]}],"brother": []}]}],"brother": []}],"brother": []}],"brother": []}]}],"brother": []}]}],"brother": []}],"brother": []}],"brother": []}]}],"brother": []}]}],"brother": []}]}],"brother": []}]}],"brother": []}]}],"brother": []}',
            nodes: [],
            edges: [],
            current_node: 0,
            parent_nodes: [],
            options: {
                edges: {
                    arrows: 'to',
                    smooth: false
                },
                layout: {
                    hierarchical: {
                        direction: "UD",
                        sortMethod: "directed"
                    }
                },
                nodes: {
                    shape: 'circle',
                    size: 40,
                    font: {
                        color: 'white'
                    },
                    color: "skyblue"
                },
                physics: false
            }
        }
    },
    watch: {
        output() {
            this.current_node = 0
            this.nodes.splice(0, this.nodes.length)
            this.edges.splice(0, this.edges.length)
            this.parent_nodes.splice(0, this.parent_nodes.length)
            this.buildTree()
        }
    },
    created() {
        this.buildTree()
    },
    methods: {
        buildTree() {
            const obj = JSON.parse(this.output)
            this.addNode(obj)
        },
        addNode(obj) {
            this.current_node++
            if (obj.varName !== 'null' && obj.value !== 'null')
                this.nodes.push({color: 'orange', id: this.current_node.toString(), label: `${obj.varName}[${obj.value}]\n[${obj.type}]`, shape: 'box', size: 100})
            else if (obj.varName !== 'null')
                this.nodes.push({color: 'orange', id: this.current_node.toString(), label: `${obj.varName}\n[${obj.type}]`, shape: 'box', size: 100})
            else if (obj.value !== 'null')
                this.nodes.push({color: 'orange', id: this.current_node.toString(), label: `${obj.value}\n[${obj.type}]`, shape: 'box', size: 100})
            else
                this.nodes.push({id: this.current_node.toString(), label: obj.type})
            this.edges.push({from: this.parent_nodes.slice(-1)[0], to: this.current_node.toString()})
            if (obj.child[0]) {
                this.parent_nodes.push(this.current_node)
                this.addNode(obj.child[0])
                this.parent_nodes.pop()
            }
            if (obj.brother[0])
                this.addNode(obj.brother[0])
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#network {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid lightgray;
    z-index: -1;
}
</style>
