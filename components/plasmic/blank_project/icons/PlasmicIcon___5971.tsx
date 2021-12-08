// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5971IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5971Icon(props: _5971IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 55"}
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
          "M18.259 54.098H0v-.3h17.959l-.277-51.24-.41-.696h-.668L16.189.3h-.55V0h.78l.417 1.563h.61l.536.913v.04l.277 51.582z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5971Icon;
/* prettier-ignore-end */
