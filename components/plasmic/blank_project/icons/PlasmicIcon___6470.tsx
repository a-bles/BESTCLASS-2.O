// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6470IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6470Icon(props: _6470IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 2"}
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
        d={"M6.814 1.457H0V0h6.814v.305H.304v.847h6.51v.305z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6470Icon;
/* prettier-ignore-end */
