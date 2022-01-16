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
                                <label for="modal" @click="generate_h"
                                       class="btn btn-accent modal-button">コード生成する</label>
                            </p>
                        </li>
                        <li class="step step-info text-left">main 関数で以下を実行し、出力をこのサイトに貼り付ける！</li>
                    </ul>

                    <hr class="mt-2">

                    <pre class="mt-8 px-6">
                        <code>
<span class="text-gray-500">// ▼ これを忘れずに！！ ▼</span>

#include "print_tree_gui.h"

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
    printTreeGUI(top);
    printf("\n");

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
<textarea class="textarea textarea-ghost w-full pl-12" cols="30" rows="10" v-model="node_type_raw"
          placeholder="Pro_AST,
Decls_AST,
Ident_AST,
Number_AST,
ArryEl_AST,
...">
</textarea>
} NodeType;


<span class="text-gray-500">/* 2. この中で、"NUMBERの値" を選択 */</span>

<input type="text" class="textarea textarea-ghost w-full" v-model="num_type_name"
       placeholder="Number_AST">
                    </code>
                </pre>
            </div>

            <div class="mockup-code text-left">
                <pre class="px-6">
                    <code>
<span class="text-gray-500">/* 3. Node 構造体の 変数名を入力 */</span>

typedef struct abstract_node
{
    NodeType <input type="text" class="textarea textarea-ghost my-1 w-32" v-model="nType" placeholder="nType">;
    char *<input type="text" class="textarea textarea-ghost my-1 w-32" v-model="varName" placeholder="varName">;
    int <input type="text" class="textarea textarea-ghost my-1 w-32" v-model="value" placeholder="value">;
    struct Node *<input type="text" class="textarea textarea-ghost my-1 w-32" v-model="child" placeholder="child">;
    struct Node *<input type="text" class="textarea textarea-ghost my-1 w-32" v-model="brother" placeholder="brother">;
} Node;

<span class="text-gray-500">/* ✨ 以上で終了です ✨ */</span>

<span class="text-gray-500">/* 😆 この工程は、初回のみ必要です 😆 */</span>
                    </code>
                </pre>
            </div>
        </div>

        <input type="checkbox" id="modal" class="modal-toggle">
        <div class="modal">
            <div class="modal-box">
                <p v-html="this.output_html" class="text-left text-xs"></p>
                <div class="modal-action">
                    <label for="modal" @click="download_h" class="btn btn-accent">保存する</label>
                    <label for="modal" class="btn">閉じる</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Papa from 'papaparse'
import moment from 'moment';

const p = require('/package.json');

export default {
    name: 'Generator',
    data() {
        return {
            version: p.version,
            node_type_raw: '',
            num_type_name: '',
            nType: '',
            varName: '',
            value: '',
            child: '',
            brother: '',
            output: '',
            output_html: ''
        }
    },
    // watch: {
    //     node_type_raw(value) {
    //
    //     }
    // },
    methods: {
        generate_h() {
            let value = this.node_type_raw.replace(/\r?\n/g, '')
            if (value.slice(-1) === ',') value = value.slice(0, -1)
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
    np->${this.nType} == ${this.num_type_name} ? printf("\\"%d\\",", np->${this.value}) : printf("\\"null\\",");

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
