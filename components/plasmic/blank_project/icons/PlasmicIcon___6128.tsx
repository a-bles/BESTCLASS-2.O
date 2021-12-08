// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6128IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6128Icon(props: _6128IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 1"}
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
        d={"M13.71.863H0V0h13.71v.863zM.3.563h13.11V.3H.3v.264z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6128Icon;
/* prettier-ignore-end */
