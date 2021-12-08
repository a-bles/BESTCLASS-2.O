// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6343IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6343Icon(props: _6343IconProps) {
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
          "M.67 2.705H.364V.914C.365.908.359.407 0 .29L.096 0a.97.97 0 01.573.914v1.79z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6343Icon;
/* prettier-ignore-end */
