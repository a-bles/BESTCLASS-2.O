// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6103IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6103Icon(props: _6103IconProps) {
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
        d={"M.035.035h.302C.334.11.332.174.327.25H.036V.035z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.361.285H0V0h.374v.037a6.033 6.033 0 00-.008.19L.36.284zM.07.216h.225C.295.164.299.12.3.07H.07v.146z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6103Icon;
/* prettier-ignore-end */
