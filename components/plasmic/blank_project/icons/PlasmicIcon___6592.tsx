// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6592IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6592Icon(props: _6592IconProps) {
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
          "M.292 5.633H0L.048 1.07A1.382 1.382 0 01.535.03L.578 0 .63.004c.434.035.542.534.54.821l-.05 4.56H.83L.878.823C.878.82.878.38.655.307a1.152 1.152 0 00-.313.77l-.05 4.556z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6592Icon;
/* prettier-ignore-end */
