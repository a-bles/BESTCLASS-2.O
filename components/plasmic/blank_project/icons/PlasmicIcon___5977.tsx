// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5977IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5977Icon(props: _5977IconProps) {
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
          "M1.217 2.09h-.3V.908C.917.903.914.457.61.316.3.457.299.902.299.906v1.185H0V.908A.947.947 0 01.562.015L.61 0l.046.015a.95.95 0 01.562.894V2.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5977Icon;
/* prettier-ignore-end */
