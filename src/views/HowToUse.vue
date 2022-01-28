<template>
    <div>
        <div class="grid lg:grid-cols-3 gap-4 min-h-screen mb-6 px-4">
            <div class="card bg-gray-50 border-2 border-gray-300 rounded-box px-4 py-6">
                <div class="p-4 text-left">
                    <h2 class="mb-3 text-2xl text-neutral font-bold border-b-2 border-neutral">
                        # これは何をするサイトなの？
                    </h2>
                    <p class="leading-loose">
                        情報工学実験C（ソフトウェア）のアセンブラ講義で、
                        <accent-text>printTree()</accent-text>
                        という関数を作成してデバッグすることになると思います。これを
                        <accent-text>グラフィカルに表示できる</accent-text>
                        ツールを作成しました。
                    </p>
                </div>

                <div class="p-4 text-left">
                    <h2 class="mb-3 text-2xl text-neutral font-bold border-b-2 border-neutral">
                        # printTreeGUI() という関数
                    </h2>
                    <p class="leading-loose">
                        <accent-text>作成した木構造を指定のJSON形式で出力</accent-text>
                        し、このサイトに貼り付けることで木構造を見ることができます。
                        作成した木構造をJSON形式で出力するために、
                        <accent-text>printTreeGUI()</accent-text>
                        という関数を使います。printTreeGUI() は
                        <accent-text>print_tree_gui.h</accent-text>
                        というファイルを #include することで使用できます。
                    </p>

                    <div class="mockup-code my-4">
                        <pre class="px-6">
                            <code>
<span class="text-blue-200">#include "print_tree_gui.h"</span>

<span class="text-gray-500">...</span>

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

    <span class="text-blue-200">printTreeGUI(top);</span>
    <span class="text-blue-200">printf("\n");</span>

    return 0;
}</code>
                        </pre>
                    </div>
                </div>
            </div>
            <div class="card bg-gray-50 border-2 border-gray-300 rounded-box px-4 py-6">
                <div class="p-4 text-left">
                    <h2 class="mb-3 text-2xl text-neutral font-bold border-b-2 border-neutral">
                        # print_tree_gui.h はどこから入手できる？
                    </h2>
                    <p class="leading-loose">
                        ヘッダーにある
                        <router-link to="/generator"
                                     class="btn btn-ghost btn-sm bg-neutral text-white rounded-btn top-1 relative">
                            <i class="ri-code-line ri-xl mr-2"></i>
                            Generator
                        </router-link>
                        から作成することができます。
                        人によって変数名が異なるため、いくつかの質問に答える必要があります。
                    </p>
                </div>

                <div class="p-4 text-left">
                    <h2 class="mb-3 text-2xl text-neutral font-bold border-b-2 border-neutral">
                        # 構造体の宣言が私は違う！
                    </h2>
                    <p class="leading-loose">
                        このヘッダーファイルは、
                        <accent-text>基本言語仕様を満たすリスト型の木構造を想定</accent-text>
                        して作られています。
                        しかし今回の発展課題では、2次元（多次元）配列を扱う必要があります。
                        2次元配列のみを想定して、無理やり
                        <accent-text>int value1</accent-text>
                        ,
                        <accent-text>int value2</accent-text>
                        と宣言した人や、アドレスを格納するために（型は違いますが）
                        <accent-text>int value</accent-text>
                        のみを宣言してポインタで多次元配列を実装した人もいると思います。
                        その場合コードを一部修正する必要があります。
                    </p>
                    <p class="leading-loose mt-3">
                        ※ 補足: 課題1〜5 は
                        <accent-text>講義通りの木構造を考えれば</accent-text>
                        、この構造体で実装できるため変更は不要です。
                    </p>
                    <p class="leading-loose mt-3">
                        このプロジェクトは
                        <accent-text>MIT License</accent-text>
                        としますので、自由に Fork してカスタマイズしていただいて構いません。
                        このプロジェクト自体への Pull Request もお待ちしています。
                    </p>
                    <a href="https://github.com/smpny7/print-tree-gui" target="_blank">
                        <!--suppress HtmlUnknownTarget -->
                        <img src="/fork_me_on_github.jpg" class="mt-3" alt="Fork me on GitHub">
                    </a>
                </div>
            </div>
            <div class="card bg-gray-50 border-2 border-gray-300 rounded-box px-4 py-6">
                <div class="p-4 text-left">
                    <h2 class="mb-3 text-2xl text-neutral font-bold border-b-2 border-neutral">
                        # おことわり
                    </h2>
                    <p class="leading-loose mt-3">
                        本プログラムについて、作者・コントリビュータはいかなる責任も負いません 。
                    </p>
                </div>

                <div class="p-4 text-left text-sm">
                    <h2 class="mb-3 text-2xl text-neutral font-bold border-b-2 border-neutral">
                        # MIT License
                    </h2>
                    <p class="leading-loose mt-3">
                        Copyright (c) 2021 smpny7 and others<br>
                        <br>
                        Permission is hereby granted, free of charge, to any person obtaining
                        a copy of this software and associated documentation files (the
                        "Software"), to deal in the Software without restriction, including
                        without limitation the rights to use, copy, modify, merge, publish,
                        distribute, sublicense, and/or sell copies of the Software, and to
                        permit persons to whom the Software is furnished to do so, subject to
                        the following conditions:<br>
                        <br>
                        The above copyright notice and this permission notice shall be
                        included in all copies or substantial portions of the Software.<br>
                        <br>
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
                        LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
                        OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
                        WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AccentText from '@/components/AccentText';

export default {
    name: 'HowToUse',
    components: {
        AccentText
    }

}
</script>

<style scoped>

</style>
