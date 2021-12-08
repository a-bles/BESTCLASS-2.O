// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5986IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5986Icon(props: _5986IconProps) {
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
          "M1.218 2.14h-.3V.91C.918.904.914.457.608.316.302.458.3.903.3.908v.827H0V.91A.949.949 0 01.562.015L.61 0l.045.015a.95.95 0 01.563.894v1.232z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5986Icon;
/* prettier-ignore-end */
