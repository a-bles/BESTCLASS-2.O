// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6001IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6001Icon(props: _6001IconProps) {
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
          "M.3 5.617H0V.909A.95.95 0 01.562.015L.61 0l.046.015a.949.949 0 01.562.894v1.183h-.3V.909C.918.904.913.457.61.317.301.458.3.903.3.908v4.709z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6001Icon;
/* prettier-ignore-end */
