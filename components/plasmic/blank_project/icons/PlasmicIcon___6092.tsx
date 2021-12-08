// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6092IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6092Icon(props: _6092IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
        d={"M.165.1l.018.165L.059.037h.56v.021L.166.1z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.235.436L.152.279.037.067 0 0h.653v.052l.003.035L.43.11.203.13a.2.2 0 00.005.05l.027.256zM.117.07a.161.161 0 01.012.023V.07H.117z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6092Icon;
/* prettier-ignore-end */
