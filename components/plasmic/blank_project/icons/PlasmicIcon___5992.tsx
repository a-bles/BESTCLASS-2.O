// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5992IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5992Icon(props: _5992IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
          "M.655 2.647H.357V.894C.357.888.351.398 0 .284L.093 0a.949.949 0 01.562.894v1.753z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5992Icon;
/* prettier-ignore-end */
