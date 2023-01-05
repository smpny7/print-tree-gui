import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { INITIAL_TEXT } from "../constants";
import { useGraph } from "../hooks/useGraph";

const Home: NextPage = () => {
  /**
   * Have to have ssr: false since vis.js touches global window object on module load
   */
  const Graph = dynamic(() => import("react-graph-vis"), {
    ssr: false,
  });

  const [edges, nodes, text, isValidFormat, setText] = useGraph(INITIAL_TEXT);

  return (
    <div className="mb-6 grid min-h-screen gap-4 px-4 lg:grid-cols-3">
      <Head>
        <title>Print Tree GUI</title>
      </Head>
      <div className="card rounded-box relative h-[calc(100vh-130px)] border-2 border-gray-300 lg:col-span-2">
        <div className="h-full rounded-3xl bg-gray-50">
          <Graph
            graph={{ edges: edges, nodes: nodes }}
            options={{
              edges: {
                arrows: "to",
                color: "skyblue",
                width: 1.2,
              },
              layout: {
                hierarchical: {
                  sortMethod: "directed",
                  shakeTowards: "roots",
                },
              },
              nodes: {
                font: {
                  color: "white",
                },
              },
            }}
          />
        </div>

        <p className="absolute top-4 right-4 text-gray-400">
          <span className="mr-2 cursor-default select-none">
            ドラッグ・拡大・縮小ができます
          </span>
          <i className="ri-drag-move-2-line ri-xl relative top-1" />
        </p>
      </div>

      <div className="card rounded-box flex h-[calc(100vh-130px)] flex-col border-2 border-gray-300 bg-gray-50 px-4 py-6">
        <h2 className="mb-2 flex-none text-left text-2xl font-bold">
          使用方法
        </h2>

        <ul className="steps steps-vertical mt-2 flex-none font-bold">
          {[
            <p>
              上の
              <Link href="/how-to-use">
                <span className="btn-ghost rounded-btn btn-sm btn relative top-0.5 ml-1 bg-neutral text-white">
                  <i className="ri-question-line ri-xl mr-2" />
                  How to use
                </span>
              </Link>
              を読もう
            </p>,
            <p>
              <Link href="/generator">
                <span className="btn-ghost rounded-btn btn-sm btn relative top-0.5 bg-neutral text-white">
                  <i className="ri-code-line ri-xl mr-2" />
                  Generator
                </span>
              </Link>
              でコード生成
            </p>,
            <p>
              下の<label htmlFor="textarea">テキストエリア</label>に貼り付け
            </p>,
          ].map((label, index) => (
            <li className="step-primary step mb-3" key={index}>
              {label}
            </li>
          ))}
        </ul>

        <p className="mb-1 mt-2 flex-none text-right">
          {isValidFormat ? (
            <span className="font-bold text-green-500">
              <i className="ri-shield-check-line ri-lg relative top-1" />
              適切なフォーマット
            </span>
          ) : (
            <span className="font-bold text-red-400">
              <i className="ri-shield-cross-line ri-lg relative top-1" />
              不適切なフォーマット
            </span>
          )}
        </p>

        <textarea
          id="textarea"
          className="textarea-bordered textarea w-full grow"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;
