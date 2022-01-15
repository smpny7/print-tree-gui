<template>
    <div id="app">
        <Header/>
        <div class="grid lg:grid-cols-3 gap-4 min-h-screen mb-6 px-4">
            <div class="lg:col-span-2 card border-2 border-gray-300 rounded-box relative">
                <network ref="network"
                         class="bg-gray-50  min-h-screen rounded-3xl"
                         :edges="edges"
                         :nodes="nodes"
                         :options="options">
                </network>
                <p class="text-gray-400 top-4 right-4 absolute">
                    <span class="mr-2">ドラッグ・拡大・縮小ができます</span>
                    <i class="ri-drag-move-2-line ri-xl top-1 relative"></i>
                </p>
            </div>
            <div class="card bg-gray-50 border-2 border-gray-300 rounded-box px-4 py-6">

                <h2 class="mb-2 text-2xl font-bold text-left">
                    使用方法
                </h2>

                <ul class="steps steps-vertical font-bold h-120">
                    <li class="step step-info">
                        <p>
                            上の
                            <a class="btn btn-ghost btn-sm bg-neutral text-white rounded-btn ml-1 top-0.5 relative"
                               href="#">
                                <i class="ri-question-line ri-xl mr-2"></i>
                                How to use
                            </a>
                            を読もう
                        </p>
                    </li>
                    <li class="step step-info">
                        <p>
                            <a class="btn btn-ghost btn-sm bg-neutral text-white rounded-btn top-0.5 relative"
                               href="#">
                                <i class="ri-code-line ri-xl mr-2"></i>
                                Generator
                            </a>
                            でコード生成
                        </p>
                    </li>
                    <li class="step step-info">下のテキストエリアに貼り付け</li>
                </ul>

                <p class="text-right mb-1">
                    <span v-if="is_valid_format" class="text-green-400 font-bold">
                        <i class="ri-shield-check-line ri-lg top-1 relative"></i>
                        適切なフォーマット
                    </span>
                    <span v-else class="text-red-400 font-bold">
                        <i class="ri-shield-cross-line ri-lg top-1 relative"></i>
                        不適切なフォーマット
                    </span>
                </p>
                <textarea v-model="output" class="textarea textarea-bordered h-full w-full"/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    name: 'App',
    components: {
        Header
    },
    data() {
        return {
            output: '{"type": "Pro_AST","varName": "null","value": "null","child": [{"type": "Decls_AST","varName": "null","value": "null","child": [{"type": "Define_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "i","value": "null","child": [],"brother": []}],"brother": [{"type": "Decls_AST","varName": "null","value": "null","child": [{"type": "Define_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "sum","value": "null","child": [],"brother": []}],"brother": []}],"brother": []}]}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "sum","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "0","child": [],"brother": []}]}],"brother": []}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "i","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "1","child": [],"brother": []}]}],"brother": []}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "While_AST","varName": "null","value": "null","child": [{"type": "Cond_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "i","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "11","child": [],"brother": []}]}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "sum","value": "null","child": [],"brother": [{"type": "Add_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "sum","value": "null","child": [],"brother": [{"type": "Ident_AST","varName": "i","value": "null","child": [],"brother": []}]}],"brother": []}]}],"brother": []}],"brother": [{"type": "Stats_AST","varName": "null","value": "null","child": [{"type": "Stat_AST","varName": "null","value": "null","child": [{"type": "Assign_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "i","value": "null","child": [],"brother": [{"type": "Add_AST","varName": "null","value": "null","child": [{"type": "Ident_AST","varName": "i","value": "null","child": [],"brother": [{"type": "Number_AST","varName": "null","value": "1","child": [],"brother": []}]}],"brother": []}]}],"brother": []}],"brother": []}],"brother": []}]}],"brother": []}]}],"brother": []}],"brother": []}],"brother": []}]}],"brother": []}]}],"brother": []}]}],"brother": []}',
            nodes: [],
            edges: [],
            is_valid_format: true,
            current_node: 0,
            parent_nodes: [],
            options: {
                edges: {
                    arrows: 'to',
                    smooth: false
                },
                layout: {
                    hierarchical: {
                        direction: 'UD',
                        sortMethod: 'directed'
                    }
                },
                nodes: {
                    shape: 'circle',
                    size: 40,
                    font: {
                        color: 'white'
                    },
                    color: 'skyblue'
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
            try {
                const obj = JSON.parse(this.output)
                this.is_valid_format = true
                this.addNode(obj)
            } catch (e) {
                this.is_valid_format = false
            }
        },
        addNode(obj) {
            this.current_node++
            if (obj.varName !== 'null' && obj.value !== 'null')
                this.nodes.push({
                    color: 'orange',
                    id: this.current_node.toString(),
                    label: `${obj.varName}[${obj.value}]\n[${obj.type}]`,
                    shape: 'box',
                    size: 100
                })
            else if (obj.varName !== 'null')
                this.nodes.push({
                    color: 'orange',
                    id: this.current_node.toString(),
                    label: `${obj.varName}\n[${obj.type}]`,
                    shape: 'box',
                    size: 100
                })
            else if (obj.value !== 'null')
                this.nodes.push({
                    color: 'orange',
                    id: this.current_node.toString(),
                    label: `${obj.value}\n[${obj.type}]`,
                    shape: 'box',
                    size: 100
                })
            else
                this.nodes.push({
                    color: 'skyblue',
                    id: this.current_node.toString(),
                    label: obj.type,
                    shape: 'circle',
                    size: 40
                })
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
}
</style>
