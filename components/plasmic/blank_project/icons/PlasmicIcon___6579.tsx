// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6579IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6579Icon(props: _6579IconProps) {
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
          "M.292 2.33H0l.014-1.26A1.378 1.378 0 01.5.03L.543 0l.053.004c.433.035.542.534.538.82l-.013 1.258-.292-.004L.842.821c0-.005 0-.443-.221-.516a1.152 1.152 0 00-.315.77L.292 2.328z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6579Icon;
/* prettier-ignore-end */
