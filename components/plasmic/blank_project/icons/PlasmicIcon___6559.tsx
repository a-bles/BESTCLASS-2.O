// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6559IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6559Icon(props: _6559IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 4"}
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
        d={"M.291 3.685L0 3.682.04 0l.291.003-.04 3.682z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6559Icon;
/* prettier-ignore-end */
