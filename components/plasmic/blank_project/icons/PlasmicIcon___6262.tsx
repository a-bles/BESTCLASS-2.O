// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6262IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6262Icon(props: _6262IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M.58.916L.526.912C.246.889.05.654 0 .285L.283.246c.013.1.06.323.22.373C.671.453.78.235.808 0l.283.04a1.253 1.253 0 01-.47.847L.579.916z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6262Icon;
/* prettier-ignore-end */
