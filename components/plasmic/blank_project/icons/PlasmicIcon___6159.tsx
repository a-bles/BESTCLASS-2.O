// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6159IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6159Icon(props: _6159IconProps) {
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
          "M.492.097c0 .033-.006.07-.017.165C.527.162.556.114.6.034H.039v.022l.453.041z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.423.433L.45.178c0-.02.003-.036.004-.05L.227.107 0 .085.003.05V0h.655L.622.067.507.279.423.433zM.532.067V.09L.544.067H.532z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6159Icon;
/* prettier-ignore-end */
