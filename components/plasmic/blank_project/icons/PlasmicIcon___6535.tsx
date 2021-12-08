// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6535IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6535Icon(props: _6535IconProps) {
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
        d={"M.351.463L0 .25.151 0l.351.213-.15.25z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6535Icon;
/* prettier-ignore-end */
