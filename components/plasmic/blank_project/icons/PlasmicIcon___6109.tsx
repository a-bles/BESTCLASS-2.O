// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6109IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6109Icon(props: _6109IconProps) {
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
          "M.376.035A1.14 1.14 0 00.11 1.072l-.041-.005A1.145 1.145 0 01.326.035h.05z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.156 1.114l-.114-.016-.007-.021A1.17 1.17 0 01.3.012L.31 0h.15L.4.059a1.109 1.109 0 00-.256 1.004l.013.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6109Icon;
/* prettier-ignore-end */
