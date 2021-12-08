// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6345IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6345Icon(props: _6345IconProps) {
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
          "M.306 2.669H0V.025L.303 0A.345.345 0 10.94 0l.301.05A.91.91 0 01.67.784L.62.801.575.785A.753.753 0 01.308.632L.306 2.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6345Icon;
/* prettier-ignore-end */
