// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6373IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6373Icon(props: _6373IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M.305 4.52H0A4.525 4.525 0 014.52 0v.306A4.219 4.219 0 00.304 4.52z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6373Icon;
/* prettier-ignore-end */
