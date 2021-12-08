// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6446IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6446Icon(props: _6446IconProps) {
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
          "M.072.033H1.76a.126.126 0 01-.107.073C1.576.11.122.106.122.106L.072.033z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M1.217.144H.107L0 0h1.81l-.019.05a.164.164 0 01-.135.094h-.44zM.142.07c.506 0 1.452.005 1.511 0h.01-1.52z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6446Icon;
/* prettier-ignore-end */
