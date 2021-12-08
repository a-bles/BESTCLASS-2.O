// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6208IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6208Icon(props: _6208IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 20"}
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
          "M.286 19.361L0 19.36.185 3.126l.453-1.022.545-.166.384-1.736L2.233 0l.083.273-.506.154-.384 1.736-.58.176-.387.876L.286 19.36z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6208Icon;
/* prettier-ignore-end */
