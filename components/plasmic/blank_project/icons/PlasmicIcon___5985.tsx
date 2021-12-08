// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5985IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5985Icon(props: _5985IconProps) {
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
          "M.299 2.092H0V.91A.947.947 0 01.562.015L.608 0l.047.015a.95.95 0 01.562.894v.826h-.3V.91C.917.904.913.457.608.316.3.458.3.903.3.908v1.184z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5985Icon;
/* prettier-ignore-end */
