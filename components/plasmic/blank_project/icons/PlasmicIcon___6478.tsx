// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6478IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6478Icon(props: _6478IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
          "M.131.1L.055.392a.898.898 0 00.207.784l.095-.007a.763.763 0 01-.22-.876C.184.207.24.127.308.056L.132.1z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.251 1.213l-.017-.015A.942.942 0 01.02.384C.046.287.07.188.095.09L.101.07.393 0 .335.078C.317.102.296.126.275.152A.51.51 0 00.17.306a.727.727 0 00.213.838l.059.053-.081.008-.09.006-.019.002zM.16.13L.138.214A.77.77 0 01.212.116L.16.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6478Icon;
/* prettier-ignore-end */
