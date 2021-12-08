// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5978IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5978Icon(props: _5978IconProps) {
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
          "M1.216 2.662H.918V.91C.918.904.913.458.608.317.3.457.299.903.299.908v1.754H0V.91A.947.947 0 01.562.016L.61 0l.046.016a.948.948 0 01.562.893v1.753z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5978Icon;
/* prettier-ignore-end */
