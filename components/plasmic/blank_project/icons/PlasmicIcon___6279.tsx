// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6279IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6279Icon(props: _6279IconProps) {
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
          "M.58.916L.527.912C.245.889.05.655 0 .285L.282.248c.014.1.061.321.22.37A1.01 1.01 0 00.81 0l.282.04a1.253 1.253 0 01-.47.848L.58.916z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6279Icon;
/* prettier-ignore-end */
