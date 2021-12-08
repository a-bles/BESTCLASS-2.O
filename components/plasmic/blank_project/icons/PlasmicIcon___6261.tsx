// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6261IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6261Icon(props: _6261IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 4"}
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
          "M1.06 3.182l-.285-.003L.8.724a.926.926 0 01-.18.164L.577.916.528.912C.246.889.05.654 0 .285L.282.248c.014.1.06.321.22.37A1.02 1.02 0 00.81 0l.284.022-.033 3.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6261Icon;
/* prettier-ignore-end */
