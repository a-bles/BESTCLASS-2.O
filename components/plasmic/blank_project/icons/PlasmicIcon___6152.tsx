// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6152IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6152Icon(props: _6152IconProps) {
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
          "M.129.098C.103.193.079.289.054.385a.878.878 0 00.202.767l.094-.006A.747.747 0 01.135.288C.179.203.235.125.3.055L.13.098z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.246 1.187l-.017-.015a.922.922 0 01-.21-.797C.046.28.07.184.094.088l.005-.02L.384 0 .328.077.27.148A.5.5 0 00.165.3a.711.711 0 00.21.82l.057.053-.08.007-.087.006-.02.002zM.156.127L.135.209A.753.753 0 01.207.114l-.05.013z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6152Icon;
/* prettier-ignore-end */
