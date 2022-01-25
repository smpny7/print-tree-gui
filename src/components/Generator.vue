<template>
    <div>
        <div class="grid lg:grid-cols-3 gap-4 min-h-screen mb-6 px-4">
            <div class="mockup-code text-left">
                <div class="px-6 py-4">
                    <h2 class="mb-2 text-2xl font-bold">
                        printTreeGUI() の作成方法
                    </h2>

                    <ul class="steps steps-vertical font-bold">
                        <li class="step step-info">
                            <p>
                                右（モバイル端末の場合下）の3つの質問を入力しよう
                            </p>
                        </li>
                        <li class="step step-info">
                            <p>
                                <i>print_tree_gui.h</i> の
                                <label v-if="can_generate" for="modal" @click="generate_h"
                                       class="btn btn-info modal-button">コード生成する</label>
                                <label v-else
                                       class="btn btn-disabled bg-white modal-button cursor-not-allowed">コード生成する</label>
                            </p>
                        </li>
                        <li class="step step-info text-left">main 関数で以下を実行し、出力をこのサイトに貼り付ける！</li>
                    </ul>

                    <hr class="mt-2">

                    <pre class="mt-8 px-6">
                        <code>
<span class="text-gray-500">// ▼ これを忘れずに！！ ▼</span>

<span class="text-blue-200">#include "print_tree_gui.h"</span>

<span class="text-gray-500">/*
* ast.c 内の main 関数
*/</span>
int main(void)
{
    if (yyparse())
    {
        fprintf(stderr, "Error\n");
        return 1;
    }

    <span class="text-gray-500">// ▼ この出力をコピーしよう ▼</span>
    <span class="text-blue-200">printTreeGUI(top);</span>
    <span class="text-blue-200">printf("\n");</span>

    return 0;
}
                        </code>
                    </pre>
                </div>
            </div>

            <div class="mockup-code text-left">
                <pre class="px-6">
                    <code>
<span class="text-gray-500">/* 1. NodeType を入力 */</span>

typedef enum
{
<span class="text-yellow-500">※ ここの値を今後変更した場合、再生成が必要です ↓</span>
<textarea class="textarea textarea-ghost w-full pl-12" cols="30" rows="10" v-model="node_type_raw"
          :class="{'border-2 border-yellow-500': is_valid.node_type_raw === false}"
          placeholder="Pro_AST,
Decls_AST,
Ident_AST,
Number_AST,
ArryEl_AST,
...">
</textarea><InvalidAlert v-if="is_valid.node_type_raw === false"/>
} NodeType;


<span class="text-gray-500">/* 2. この中で、"変数" と "配列" を選択 */</span>

<input type="text" class="textarea textarea-ghost w-full" v-model="num_type_name"
       :class="{'border-2 border-yellow-500': is_valid.num_type_name === false}" placeholder="Number_AST"><InvalidAlert
                        v-if="is_valid.num_type_name === false" class="mt-2"/>
<input type="text" class="textarea textarea-ghost w-full mt-3" v-model="array_type_name"
       :class="{'border-2 border-yellow-500': is_valid.array_type_name === false}" placeholder="ArryEl_AST（任意）"><InvalidAlert
                        v-if="is_valid.array_type_name === false" class="mt-2"/>
                    </code>
                </pre>
            </div>

            <div class="mockup-code text-left">
                <pre class="px-6">
                    <code>
<span class="text-gray-500">/* 3. Node 構造体の 変数名を入力 */</span>

typedef struct abstract_node
{
    NodeType <input type="text" class="textarea textarea-ghost my-1 w-32" v-model="nType"
                    :class="{'border-2 border-yellow-500': is_valid.nType === false}" placeholder="nType">;<InvalidAlert
                        v-if="is_valid.nType === false" class="ml-6"/>
    char *<input type="text" class="textarea textarea-ghost my-1 w-32" v-model="varName"
                 :class="{'border-2 border-yellow-500': is_valid.varName === false}" placeholder="varName">;<InvalidAlert
                        v-if="is_valid.varName === false" class="ml-6"/>
    int <input type="text" class="textarea textarea-ghost my-1 w-32" v-model="value"
               :class="{'border-2 border-yellow-500': is_valid.value === false}" placeholder="value">;<InvalidAlert
                        v-if="is_valid.value === false" class="ml-6"/>
    struct Node *<input type="text" class="textarea textarea-ghost my-1 w-32" v-model="child"
                        :class="{'border-2 border-yellow-500': is_valid.child === false}" placeholder="child">;<InvalidAlert
                        v-if="is_valid.child === false" class="ml-6"/>
    struct Node *<input type="text" class="textarea textarea-ghost my-1 w-32" v-model="brother"
                        :class="{'border-2 border-yellow-500': is_valid.brother === false}" placeholder="brother">;<InvalidAlert
                        v-if="is_valid.brother === false" class="ml-6"/>
} Node;

<span class="text-gray-500">/* ✨ 以上で終了です ✨ */</span>

<span class="text-gray-500">/* 😆 この工程は、初回のみ必要です 😆 */</span>
                    </code>
                </pre>
            </div>
        </div>

        <input id="modal" class="modal-toggle" type="checkbox">
        <div class="modal">
            <div class="modal-box">
                <p v-html="this.output_html" class="text-left text-xs"/>
                <div class="modal-action">
                    <label for="modal" @click="download_h" class="btn btn-info">保存する</label>
                    <label for="modal" class="btn">閉じる</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Papa from 'papaparse'
import moment from 'moment'
import InvalidAlert from '@/components/parts/InvalidAlert'

const p = require('/package.json')

export default {
    name: 'Generator',
    components: {
        InvalidAlert
    },
    data() {
        return {
            version: p.version,
            node_type_raw: '',
            num_type_name: '',
            array_type_name: '',
            nType: 'nType',
            varName: 'varName',
            value: 'value',
            child: 'child',
            brother: 'brother',
            output: '',
            output_html: '',
            is_valid: {
                node_type_raw: null,
                num_type_name: null,
                nType: true,
                varName: true,
                value: true,
                child: true,
                brother: true
            }
        }
    },
    computed: {
        can_generate() {
            return this.is_valid.node_type_raw === true &&
                this.is_valid.num_type_name === true &&
                this.is_valid.varName === true &&
                this.is_valid.value === true &&
                this.is_valid.child === true &&
                this.is_valid.brother === true
        }
    },
    watch: {
        node_type_raw(value) {
            this.is_valid.node_type_raw = (value.match(/^[A-Za-z0-9_,\n ]+$/g) !== null)
        },
        num_type_name(value) {
            this.is_valid.num_type_name = (value.match(/^[A-Za-z0-9_,\n ]+$/g) !== null)
        },
        nType(value) {
            this.is_valid.nType = (value.match(/^[A-Za-z0-9_,\n ]+$/g) !== null)
        },
        varName(value) {
            this.is_valid.varName = (value.match(/^[A-Za-z0-9_,\n ]+$/g) !== null)
        },
        value(value) {
            this.is_valid.value = (value.match(/^[A-Za-z0-9_,\n ]+$/g) !== null)
        },
        child(value) {
            this.is_valid.child = (value.match(/^[A-Za-z0-9_,\n ]+$/g) !== null)
        },
        brother(value) {
            this.is_valid.brother = (value.match(/^[A-Za-z0-9_,\n ]+$/g) !== null)
        }
    },
    methods: {
        generate_h() {
            let value = this.node_type_raw.replace(/\r?\n/g, '').replace(/ /g, '')
            if (value.slice(-1) === ',') value = value.slice(0, -1)
            // noinspection JSUnresolvedFunction
            const arr = Papa.parse(value)

            this.output = `
/*
* ===================================================
*  Print Tree GUI  ver.${this.version}  (${moment().format('MMMM Do YYYY')})
* ===================================================
*
*  For more info.
*  https://github.com/smpny7/print-tree-gui
*
*/

#include <stdio.h>

char *node_type_str[] = {
\t${arr.data[0].map(v => `"${v}"`).join(',\n\t')}
};

/*
* Overview: Output the tree structure.
* @argument: {Node *} np - Parent node.
* @return: No return
*/
void printTreeGUI(Node *np)
{
    printf("{");

    printf("\\"type\\": \\"%s\\",", node_type_str[np->${this.nType}]);

    printf("\\"varName\\": \\"%s\\",", np->${this.varName} ? np->${this.varName} : "null");

    printf("\\"value\\": ");
    np->${this.nType} == ${this.num_type_name} ${this.array_type_name ? `|| np->${this.nType} == ${this.array_type_name}` : ''} ? printf("\\"%d\\",", np->${this.value}) : printf("\\"null\\",");

    printf("\\"child\\": [");
    if (np->${this.child} != NULL)
        printTreeGUI((Node *)np->${this.child});
    printf("],");

    printf("\\"brother\\": [");
    if (np->${this.brother} != NULL)
        printTreeGUI((Node *)np->${this.brother});
    printf("]");

    printf("}");
}
`
            this.output_html = this.output
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt')
                .replace(/\r?\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
                .replace(/ /g, '&nbsp;')
            console.log(this.output)
        },
        download_h() {
            const blob = new Blob([this.output], {"type": "text/plain"});
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = 'print_tree_gui.h'
            link.click()
        }
    }
}
</script>

<style scoped>

</style>
