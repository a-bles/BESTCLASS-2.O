// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6502IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6502Icon(props: _6502IconProps) {
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
          "M.085.037a1.165 1.165 0 01.272 1.06l.042-.006A1.17 1.17 0 00.136.037H.085z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.309 1.14l.014-.054A1.14 1.14 0 00.06.06L0 0h.152l.01.012A1.196 1.196 0 01.432 1.1l-.006.022-.117.018z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6502Icon;
/* prettier-ignore-end */
