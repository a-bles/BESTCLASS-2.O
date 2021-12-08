// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6199IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6199Icon(props: _6199IconProps) {
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
          "M.597.175L.26.67C.3.728.34.785.375.84.118.886.05.843.031.597.016.411.01.223 0 .016.186.06.444-.123.597.175z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6199Icon;
/* prettier-ignore-end */
