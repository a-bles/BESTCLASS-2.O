// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6485IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6485Icon(props: _6485IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.502.1c0 .033-.006.07-.017.168C.538.166.568.116.612.035H.04v.022l.463.042z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.432.442L.46.182C.46.161.463.144.464.13L.232.109 0 .087.003.051V0h.67L.636.068.518.285.432.442zM.543.07v.023L.556.07H.543z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6485Icon;
/* prettier-ignore-end */
