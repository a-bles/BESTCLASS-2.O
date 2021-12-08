// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6514IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6514Icon(props: _6514IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.183.822c.088.227.186.45.262.68.026.112.04.226.043.34l-.16-.213h-.97c.163.328.56.33.913.48a1.227 1.227 0 01-.977-.042c-.324-.099-.31-.395-.278-.677C.056 1.049.08.706.11.364L.738.21.696.022.754 0c.141.275.284.549.43.822zm-.006.485c-.27.107-.503.193-.657-.035A1.61 1.61 0 00.747.985C.764.949.694.872.663.815.576.867.409.941.416.964c.053.184.095.418.23.517.197.147.387-.017.528-.175h.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6514Icon;
/* prettier-ignore-end */
