// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6454IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6454Icon(props: _6454IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 7"}
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
          "M0 1.958v4.511h.295s.028-4.018 0-4.535C.125-1.162.088-.076 0 1.958z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6454Icon;
/* prettier-ignore-end */
