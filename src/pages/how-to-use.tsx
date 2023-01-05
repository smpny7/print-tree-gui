import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import AccentText from "../components/AccentText";

const HowToUse: NextPage = () => {
  return (
    <>
      <div className="mb-6 grid min-h-screen grid-cols-1 gap-4 px-4 lg:grid-cols-3">
        <Head>
          <title>HOW TO USE | Print Tree GUI</title>
        </Head>
        <div className="card rounded-box border-2 border-gray-300 bg-gray-50 px-4 py-6">
          <div className="p-4 text-left">
            <h2 className="mb-3 border-b-2 border-neutral pb-1 text-2xl font-bold text-neutral">
              # これは何をするサイトなの？
            </h2>
            <p className="leading-loose">
              情報工学実験C（ソフトウェア）のアセンブラ講義で、
              <AccentText>printTree()</AccentText>
              という関数を作成してデバッグすることになると思います。これを
              <AccentText>グラフィカルに表示できる</AccentText>
              ツールを作成しました。
            </p>
          </div>

          <div className="p-4 text-left">
            <h2 className="mb-3 border-b-2 border-neutral pb-1 text-2xl font-bold text-neutral">
              # printTreeGUI() という関数
            </h2>
            <p className="leading-loose">
              <AccentText>作成した木構造を指定のJSON形式で出力</AccentText>
              し、このサイトに貼り付けることで木構造を見ることができます。
              作成した木構造をJSON形式で出力するために、
              <AccentText>printTreeGUI()</AccentText>
              という関数を使います。printTreeGUI() は
              <AccentText>print_tree_gui.h</AccentText>
              というファイルを #include することで使用できます。
            </p>

            <div className="mockup-code my-4 min-w-full">
              <pre className="px-6">
                <code>
                  <span className="text-blue-200">
                    {`
#include "print_tree_gui.h"
                    `}
                  </span>

                  <span className="text-gray-500">
                    {`
...
                    `}
                  </span>

                  <span className="text-gray-500">
                    {`
/*
* ast.c 内の main 関数
*/`}
                  </span>
                  {`
int main(void)
{
    if (yyparse())
    {
        fprintf(stderr, "Error\\n");
        return 1;
    }
                  `}

                  <span className="text-blue-200">
                    {`
    printTreeGUI(top);`}
                  </span>
                  <span className="text-blue-200">
                    {`
    printf("\\n");
                    `}
                  </span>

                  {`
    return 0;
}
                  `}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div className="card rounded-box border-2 border-gray-300 bg-gray-50 px-4 py-6">
          <div className="p-4 text-left">
            <h2 className="mb-3 border-b-2 border-neutral pb-1 text-2xl font-bold text-neutral">
              # print_tree_gui.h はどこから入手できる？
            </h2>
            <p className="leading-loose">
              ヘッダーにある
              <Link
                href="/generator"
                className="btn-ghost rounded-btn btn-sm btn relative top-1 bg-neutral text-white"
              >
                <i className="ri-code-line ri-xl mr-2" />
                Generator
              </Link>
              から作成することができます。
              人によって変数名が異なるため、いくつかの質問に答える必要があります。
            </p>
          </div>

          <div className="p-4 text-left">
            <h2 className="mb-3 border-b-2 border-neutral pb-1 text-2xl font-bold text-neutral">
              # 構造体の宣言が私は違う！
            </h2>
            <p className="leading-loose">
              このヘッダーファイルは、
              <AccentText>
                基本言語仕様を満たすリスト型の木構造を想定
              </AccentText>
              して作られています。
              しかし今回の発展課題では、2次元（多次元）配列を扱う必要があります。
              2次元配列のみを想定して、無理やり
              <AccentText>int value1</AccentText>,
              <AccentText>int value2</AccentText>
              と宣言した人や、アドレスを格納するために（型は違いますが）
              <AccentText>int value</AccentText>
              のみを宣言してポインタで多次元配列を実装した人もいると思います。
              その場合コードを一部修正する必要があります。
            </p>
            <p className="mt-3 leading-loose">
              ※ 補足: 課題1〜5 は
              <AccentText>講義通りの木構造を考えれば</AccentText>
              、この構造体で実装できるため変更は不要です。
            </p>
            <p className="mt-3 leading-loose">
              このプロジェクトは
              <AccentText>MIT License</AccentText>
              としますので、自由に Fork
              してカスタマイズしていただいて構いません。
              このプロジェクト自体への Pull Request もお待ちしています。
            </p>
            <a href="https://github.com/smpny7/print-tree-gui" target="_blank">
              <img
                src="/fork_me_on_github.webp"
                className="mt-3"
                alt="Fork me on GitHub"
              />
            </a>
          </div>
        </div>
        <div className="card rounded-box border-2 border-gray-300 bg-gray-50 px-4 py-6">
          <div className="p-4 text-left">
            <h2 className="mb-3 border-b-2 border-neutral pb-1 text-2xl font-bold text-neutral">
              # おことわり
            </h2>
            <p className="mt-3 leading-loose">
              本プログラムについて、作者・コントリビュータはいかなる責任も負いません
              。
            </p>
          </div>

          <div className="p-4 text-left text-sm">
            <h2 className="mb-3 border-b-2 border-neutral pb-1 text-2xl font-bold text-neutral">
              # MIT License
            </h2>
            <p className="mt-3 leading-loose">
              Copyright (c) 2021 smpny7 and others
              <br />
              <br />
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
              <br />
              <br />
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
              <br />
              <br />
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToUse;
