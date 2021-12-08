// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6297IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6297Icon(props: _6297IconProps) {
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
        d={"M.81 0L0 .246l.083.273.81-.246L.811 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6297Icon;
/* prettier-ignore-end */
