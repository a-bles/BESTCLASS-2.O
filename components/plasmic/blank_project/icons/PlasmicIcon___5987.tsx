// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5987IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5987Icon(props: _5987IconProps) {
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
          "M1.216 2.092H.918V.91C.918.904.913.458.608.318.3.458.299.903.299.908v1.184H0V.91A.949.949 0 01.562.015L.61 0l.046.015a.95.95 0 01.562.894v1.183z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5987Icon;
/* prettier-ignore-end */
