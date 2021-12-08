// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5920IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5920Icon(props: _5920IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 25"}
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
          "M20.358.31C13.546 3.622 2.318 11.044.295 24.608L0 24.563C2.051 10.811 13.458 3.318 20.317 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5920Icon;
/* prettier-ignore-end */
