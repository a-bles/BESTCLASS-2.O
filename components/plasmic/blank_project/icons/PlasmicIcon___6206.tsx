// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6206IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6206Icon(props: _6206IconProps) {
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
          "M.285 19.36H0L.185 3.126l.453-1.021.545-.166.384-1.737L2.232 0l.083.273-.505.154-.383 1.736-.582.176-.388.876L.285 19.36z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6206Icon;
/* prettier-ignore-end */
