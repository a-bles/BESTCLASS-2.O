// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5984IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5984Icon(props: _5984IconProps) {
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
          "M.3 5.184H0V.908A.948.948 0 01.563.015L.61 0l.045.015a.949.949 0 01.562.894v1.183h-.3V.908C.918.904.916.458.61.317.301.458.3.903.3.907v4.277z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5984Icon;
/* prettier-ignore-end */
