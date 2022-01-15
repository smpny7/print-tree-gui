<template>
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
                            <router-link to="#" class="btn btn-accent">コード生成する</router-link>
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
<textarea class="textarea textarea-ghost w-full pl-12" cols="30" rows="10"
          placeholder="Pro_AST,
Decls_AST,
Ident_AST,
Number_AST,
ArryEl_AST,
...">
</textarea>
} NodeType;


<span class="text-gray-500">/* 2. この中で、"NUMBERの値" を選択 */</span>

<input type="text" class="textarea textarea-ghost w-full"
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
    NodeType <input type="text" class="textarea textarea-ghost my-1 w-32" placeholder="nType">;
    char *<input type="text" class="textarea textarea-ghost my-1 w-32" placeholder="varName">;
    int <input type="text" class="textarea textarea-ghost my-1 w-32" placeholder="value">;
    struct Node *<input type="text" class="textarea textarea-ghost my-1 w-32" placeholder="child">;
    struct Node *<input type="text" class="textarea textarea-ghost my-1 w-32" placeholder="brother">;
} Node;

<span class="text-gray-500">/* ✨ 以上で終了です ✨ */</span>
                </code>
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Generator'
}
</script>

<style scoped>

</style>
