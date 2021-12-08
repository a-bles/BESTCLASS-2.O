// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6282IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6282Icon(props: _6282IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
          "M1.055 5.704L.77 5.701.822.804c0-.005 0-.433-.217-.506a1.116 1.116 0 00-.307.754L.285 2.284 0 2.28l.012-1.23A1.345 1.345 0 01.488.03L.529 0l.053.005c.424.034.532.522.527.803l-.054 4.896z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6282Icon;
/* prettier-ignore-end */
