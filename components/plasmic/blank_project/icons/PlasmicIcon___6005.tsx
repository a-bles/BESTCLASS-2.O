// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6005IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6005Icon(props: _6005IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
        d={"M1.017 1.41H0v-.298h.786L1.076 0l.288.076-.347 1.334z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6005Icon;
/* prettier-ignore-end */
