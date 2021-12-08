// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6158IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6158Icon(props: _6158IconProps) {
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
          "M.855.552C.575.737.385.767.218.633.074.517.053.36.15.128a.313.313 0 00-.09.366.373.373 0 00.345.265.481.481 0 00.45-.207z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.45.794H.402A.404.404 0 01.026.505a.35.35 0 01.101-.4L.242 0l-.06.144C.09.362.107.5.24.608.39.731.564.705.835.524L.992.42.884.573a.505.505 0 01-.435.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6158Icon;
/* prettier-ignore-end */
