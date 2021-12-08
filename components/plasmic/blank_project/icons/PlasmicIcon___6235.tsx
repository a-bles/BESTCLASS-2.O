// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6235IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6235Icon(props: _6235IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M0 4.682L.044.587.329.59.296 3.697l1.668-2.585L1.976 0l.286.003-.012 1.194L0 4.682z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6235Icon;
/* prettier-ignore-end */
