// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6582IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6582Icon(props: _6582IconProps) {
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
          "M.291 2.935H0L.019 1.07A1.378 1.378 0 01.505.03L.55 0 .6.004c.435.035.543.534.54.821l-.02 1.863-.292-.003.02-1.863c0-.006 0-.443-.223-.517a1.14 1.14 0 00-.314.77l-.019 1.86z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6582Icon;
/* prettier-ignore-end */
