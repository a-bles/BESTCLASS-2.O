// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6593IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6593Icon(props: _6593IconProps) {
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
          "M1.078 5.829l-.29-.004L.84.821C.84.816.84.38.618.305a1.14 1.14 0 00-.314.77L.291 2.333 0 2.33l.013-1.257A1.375 1.375 0 01.498.03L.541 0l.053.005c.434.035.544.533.54.82L1.077 5.83z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6593Icon;
/* prettier-ignore-end */
