import dayjs from "dayjs";
import Papa from "papaparse";
import { useCallback, useState } from "react";

export type Inputs = {
  nodeTypeRaw: string;
  numTypeName: string;
  arrayTypeName: string;
  nType: string;
  varName: string;
  value: string;
  child: string;
  brother: string;
};

export const useGenerator = () => {
  const [output, setOutput] = useState<string>("");

  const { version } = require("/package.json");

  const onClickGenerate = (data: Inputs) => {
    let v = data.nodeTypeRaw
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "")
      .replace(/\r?\n/g, "")
      .replace(/ /g, "");

    if (v.slice(-1) === ",") v = v.slice(0, -1);

    const nodeTypes = Papa.parse<string[]>(v);

    setOutput(`
/*
* ===================================================
*  Print Tree GUI  ver.${version}  (${dayjs(new Date()).format("MMMM DD YYYY")})
* ===================================================
*
*  For more info.
*  https://github.com/smpny7/print-tree-gui
*
*/

#include <stdio.h>

char *node_type_str[] = {
\t${nodeTypes.data[0].map((v) => `"${v}"`).join(",\n\t")}
};

/*
* Overview: Output the tree structure.
* @argument: {Node *} np - Parent node.
* @return: No return
*/
void printTreeGUI(Node *np)
{
    printf("{");

    printf("\\"type\\": \\"%s\\",", node_type_str[np->${data.nType}]);

    printf("\\"varName\\": \\"%s\\",", np->${data.varName} ? np->${
      data.varName
    } : "null");

    printf("\\"value\\": ");
    np->${data.nType} == ${data.numTypeName} ${
      data.arrayTypeName ? `|| np->${data.nType} == ${data.arrayTypeName}` : ""
    } ? printf("\\"%d\\",", np->${data.value}) : printf("\\"null\\",");

    printf("\\"child\\": [");
    if (np->${data.child} != NULL)
        printTreeGUI((Node *)np->${data.child});
    printf("],");

    printf("\\"brother\\": [");
    if (np->${data.brother} != NULL)
        printTreeGUI((Node *)np->${data.brother});
    printf("]");

    printf("}");
}
`);
  };

  const onClickDownload = useCallback(() => {
    const blob = new Blob([output], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "print_tree_gui.h";
    link.click();
    link.remove();
  }, [output]);

  return [output, onClickGenerate, onClickDownload] as const;
};
