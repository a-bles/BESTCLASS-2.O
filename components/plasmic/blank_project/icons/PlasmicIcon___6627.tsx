// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6627IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6627Icon(props: _6627IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 20"}
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
          "M.52 19.724l-.483-.545L0 19.08.204 0l.292.003-.204 19.024.447.503-.218.194z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6627Icon;
/* prettier-ignore-end */
