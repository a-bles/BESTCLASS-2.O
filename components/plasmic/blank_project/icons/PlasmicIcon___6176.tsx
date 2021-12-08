// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6176IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6176Icon(props: _6176IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
          "M.084.037A1.14 1.14 0 01.35 1.074l.04-.006A1.145 1.145 0 00.134.037h-.05z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.302 1.115l.014-.052A1.115 1.115 0 00.059.06L0 0h.148l.01.012a1.17 1.17 0 01.265 1.065l-.006.021-.115.017z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6176Icon;
/* prettier-ignore-end */
