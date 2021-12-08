// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6500IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6500Icon(props: _6500IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M1.74.032H.054A.126.126 0 00.16.105c.076.006 1.531 0 1.531 0l.05-.073z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.595.144h-.44A.16.16 0 01.018.049L0 0h1.81l-.106.144h-.018c-.037-.003-.65 0-1.09 0zM.15.069h.007c.062.005 1.007 0 1.513 0H.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6500Icon;
/* prettier-ignore-end */
