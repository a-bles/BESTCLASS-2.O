// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6293IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6293Icon(props: _6293IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
          "M.944 1.21L.06 1.014 0 .764.894.029 1.016 0 1.9.196l.06.25-.894.736-.122.028zM.407.8l.53.118.614-.506-.53-.117L.407.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6293Icon;
/* prettier-ignore-end */
