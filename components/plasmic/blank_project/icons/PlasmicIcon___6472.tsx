// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6472IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6472Icon(props: _6472IconProps) {
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
        d={"M6.122 1.304H0V0h.306v.996h5.816v.308z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6472Icon;
/* prettier-ignore-end */
