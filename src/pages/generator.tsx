"use client";

import clsx from "clsx";
import type { NextPage } from "next";
import Head from "next/head";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import InvalidAlert from "../components/InvalidAlert";
import ValidIcon from "../components/ValidIcon";
import { Inputs, useGenerator } from "../hooks/useGenerator";

const Generator: NextPage = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { isDirty, isValid, errors },
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: {
      nType: "nType",
      varName: "varName",
      value: "value",
      child: "child",
      brother: "brother",
    },
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => onClickGenerate(data);

  const [output, onClickGenerate, onClickDownload] = useGenerator();

  const canGenerate = isDirty && isValid;

  return (
    <div>
      <Head>
        <title>GENERATOR | Print Tree GUI</title>
      </Head>
      <form
        className="mb-6 grid min-h-screen gap-4 px-4 lg:grid-cols-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mockup-code text-left">
          <div className="px-6 py-4">
            <h2 className="mb-2 text-2xl font-bold">
              printTreeGUI() の作成方法
            </h2>

            <ul className="steps steps-vertical font-bold">
              <li className="step-primary step">
                <p>右（モバイル端末の場合下）の3つの質問を入力しよう</p>
              </li>
              <li className="step-primary step">
                <p>
                  <i>print_tree_gui.h</i> の
                  <button
                    type="submit"
                    className={clsx({ "cursor-not-allowed": !canGenerate })}
                    disabled={!canGenerate}
                  >
                    <label
                      htmlFor={canGenerate ? "modal" : undefined}
                      className={clsx(
                        "modal-button btn ml-2",
                        canGenerate ? "btn-primary" : "btn-disabled bg-white"
                      )}
                    >
                      コード生成する
                    </label>
                  </button>
                </p>
              </li>
              <li className="step-primary step text-left">
                main 関数で以下を実行し、出力をこのサイトに貼り付ける！
              </li>
            </ul>

            <hr className="mt-2" />

            <pre className="mt-8 px-6">
              <code>
                <span className="text-gray-500">
                  {`
// ▼ これを忘れずに！！ ▼
                  `}
                </span>

                <span className="text-blue-200">
                  {`
#include "print_tree_gui.h"
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

                <span className="text-gray-500">
                  {`
    // ▼ この出力をコピーしよう ▼`}
                </span>

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
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mockup-code text-left">
          <pre className="px-6">
            <code>
              <span className="text-gray-500">
                {`
/* 1. NodeType を入力 */
                `}
              </span>

              {`
typedef enum
{`}

              <span className="text-yellow-500">
                {`
※ ここの値を今後変更した場合、再生成が必要です ↓`}
              </span>

              <textarea
                className={clsx(
                  "textarea-ghost textarea mb-2 block w-full pl-12",
                  {
                    "border-2 border-yellow-500": errors.nodeTypeRaw,
                  }
                )}
                {...register("nodeTypeRaw", {
                  required: {
                    value: true,
                    message: "入力が必須の項目です",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9_,\n ]+$/g,
                    message: "英数字とアンダーバー以外使用できません",
                  },
                })}
                onChange={(e) =>
                  setValue(
                    "nodeTypeRaw",
                    e.target.value.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ""),
                    {
                      shouldValidate: true,
                      shouldDirty: true,
                    }
                  )
                }
                cols={30}
                rows={10}
                placeholder={`Pro_AST,\nDecls_AST,\nIdent_AST,\nNumber_AST,\nArryEl_AST,\n...`}
              />

              {dirtyFields.nodeTypeRaw && (
                <>
                  {errors.nodeTypeRaw ? (
                    <InvalidAlert />
                  ) : (
                    <ValidIcon className="float-right mt-1" />
                  )}
                </>
              )}

              {`} NodeType;
              `}

              <br />

              <span className="text-gray-500">
                {`
/* 2. この中で、"変数" と "配列" を選択 */
                `}
              </span>

              <input
                type="text"
                className={clsx("textarea-ghost textarea block w-full", {
                  "border-2 border-yellow-500": errors.numTypeName,
                })}
                {...register("numTypeName", {
                  required: {
                    value: true,
                    message: "入力が必須の項目です",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9_,\n ]+$/g,
                    message: "英数字とアンダーバー以外使用できません",
                  },
                })}
                placeholder="Number_AST"
              />

              {dirtyFields.numTypeName && (
                <>
                  {errors.numTypeName ? (
                    <InvalidAlert className="mt-2" />
                  ) : (
                    <ValidIcon className="relative top-2 flex flex-row-reverse" />
                  )}
                </>
              )}

              <input
                type="text"
                className={clsx("textarea-ghost textarea mt-3 block w-full", {
                  "border-2 border-yellow-500": errors.arrayTypeName,
                })}
                {...register("arrayTypeName", {
                  pattern: {
                    value: /^[A-Za-z0-9_,\n ]+$/g,
                    message: "英数字とアンダーバー以外使用できません",
                  },
                })}
                placeholder="ArryEl_AST（任意）"
              />

              {dirtyFields.arrayTypeName && (
                <>
                  {errors.arrayTypeName ? (
                    <InvalidAlert className="mt-2" />
                  ) : (
                    <ValidIcon className="relative top-2 flex flex-row-reverse" />
                  )}
                </>
              )}
            </code>
          </pre>
        </div>

        <div className="mockup-code text-left">
          <pre className="px-6">
            <code>
              <span className="text-gray-500">
                {`
/* 3. Node 構造体の 変数名を入力 */
                `}
              </span>
              {`
typedef struct abstract_node
{
    NodeType`}
              <input
                type="text"
                className={clsx("textarea-ghost textarea my-1 ml-2 w-32", {
                  "border-2 border-yellow-500": errors.nType,
                })}
                {...register("nType", {
                  required: {
                    value: true,
                    message: "入力が必須の項目です",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9_,\n ]+$/g,
                    message: "英数字とアンダーバー以外使用できません",
                  },
                })}
                placeholder="nType"
              />
              {`;`}
              {dirtyFields.nType && (
                <>
                  {errors.nType ? (
                    <InvalidAlert className="ml-6" />
                  ) : (
                    <ValidIcon className="relative top-2 ml-3 inline-block" />
                  )}
                </>
              )}
              {`
    char *`}
              <input
                type="text"
                className={clsx("textarea-ghost textarea my-1 ml-2 w-32", {
                  "border-2 border-yellow-500": errors.varName,
                })}
                {...register("varName", {
                  required: {
                    value: true,
                    message: "入力が必須の項目です",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9_,\n ]+$/g,
                    message: "英数字とアンダーバー以外使用できません",
                  },
                })}
                placeholder="varName"
              />
              {`;`}
              {dirtyFields.varName && (
                <>
                  {errors.varName ? (
                    <InvalidAlert className="ml-6" />
                  ) : (
                    <ValidIcon className="relative top-2 ml-3 inline-block" />
                  )}
                </>
              )}
              {`
    int`}
              <input
                type="text"
                className={clsx("textarea-ghost textarea my-1 ml-2 w-32", {
                  "border-2 border-yellow-500": errors.value,
                })}
                {...register("value", {
                  required: {
                    value: true,
                    message: "入力が必須の項目です",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9_,\n ]+$/g,
                    message: "英数字とアンダーバー以外使用できません",
                  },
                })}
                placeholder="value"
              />
              {`;`}
              {dirtyFields.value && (
                <>
                  {errors.value ? (
                    <InvalidAlert className="ml-6" />
                  ) : (
                    <ValidIcon className="relative top-2 ml-3 inline-block" />
                  )}
                </>
              )}
              {`
    struct Node *`}
              <input
                type="text"
                className={clsx("textarea-ghost textarea my-1 ml-2 w-32", {
                  "border-2 border-yellow-500": errors.child,
                })}
                {...register("child", {
                  required: {
                    value: true,
                    message: "入力が必須の項目です",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9_,\n ]+$/g,
                    message: "英数字とアンダーバー以外使用できません",
                  },
                })}
                placeholder="child"
              />
              {`;`}
              {dirtyFields.child && (
                <>
                  {errors.child ? (
                    <InvalidAlert className="ml-6" />
                  ) : (
                    <ValidIcon className="relative top-2 ml-3 inline-block" />
                  )}
                </>
              )}
              {`
    struct Node *`}
              <input
                type="text"
                className={clsx("textarea-ghost textarea my-1 ml-2 w-32", {
                  "border-2 border-yellow-500": errors.brother,
                })}
                {...register("brother", {
                  required: {
                    value: true,
                    message: "入力が必須の項目です",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9_,\n ]+$/g,
                    message: "英数字とアンダーバー以外使用できません",
                  },
                })}
                placeholder="brother"
              />
              {`;`}
              {dirtyFields.brother && (
                <>
                  {errors.brother ? (
                    <InvalidAlert className="ml-6" />
                  ) : (
                    <ValidIcon className="relative top-2 ml-3 inline-block" />
                  )}
                </>
              )}
              {`
} Node;
              `}
              <span className="text-gray-500">
                {`
/* ✨ 以上で終了です ✨ */
                `}
              </span>
              <span className="text-gray-500">
                {`
/* 😆 この工程は、初回のみ必要です 😆 */
                `}
              </span>
            </code>
          </pre>
        </div>
      </form>

      <input id="modal" className="modal-toggle" type="checkbox" />
      <div className="modal">
        <div className="modal-box">
          <p
            className="text-left text-xs"
            dangerouslySetInnerHTML={{
              __html: output
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt")
                .replace(/\r?\n/g, "<br>")
                .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
                .replace(/ /g, "&nbsp;"),
            }}
          />
          <div className="modal-action">
            <label
              htmlFor="modal"
              onClick={onClickDownload}
              className="btn-primary btn"
            >
              保存する
            </label>
            <label htmlFor="modal" className="btn">
              閉じる
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
