// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6280IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6280Icon(props: _6280IconProps) {
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
          "M.58.916L.53.912C.248.889.049.654 0 .285L.283.246c.01.079.056.32.221.373A1.04 1.04 0 00.81 0l.282.04a1.253 1.253 0 01-.47.848L.581.916z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6280Icon;
/* prettier-ignore-end */
