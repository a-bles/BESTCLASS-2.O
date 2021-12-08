// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5988IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5988Icon(props: _5988IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M1.218 2.092h-.3V.909C.919.904.915.457.61.318.302.458.3.903.3.908v1.184H0V.909A.95.95 0 01.563.015L.61 0l.046.015A.949.949 0 011.22.91v1.183z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5988Icon;
/* prettier-ignore-end */
