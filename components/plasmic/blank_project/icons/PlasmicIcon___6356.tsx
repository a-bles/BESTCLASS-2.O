// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6356IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6356Icon(props: _6356IconProps) {
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
        d={"M1.04 1.441H0v-.305h.804L1.099 0l.295.077-.355 1.364z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6356Icon;
/* prettier-ignore-end */
