// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6528IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6528Icon(props: _6528IconProps) {
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
        d={"M.308 1.431L0 .064.284 0l.24 1.06.601-.183.085.28-.902.274z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6528Icon;
/* prettier-ignore-end */
