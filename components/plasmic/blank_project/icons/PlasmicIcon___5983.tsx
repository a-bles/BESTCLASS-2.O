// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5983IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5983Icon(props: _5983IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 5"}
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
          "M.3 4.273H0V.91A.949.949 0 01.563.016L.61 0l.045.016a.948.948 0 01.562.894v3.119h-.3V.909C.918.904.915.458.61.317.302.458.3.903.3.908v3.365z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5983Icon;
/* prettier-ignore-end */
