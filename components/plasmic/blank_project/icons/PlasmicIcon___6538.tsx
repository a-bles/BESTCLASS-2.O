// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6538IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6538Icon(props: _6538IconProps) {
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
        d={"M.353 0L0 .427l.225.186.353-.427L.353 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6538Icon;
/* prettier-ignore-end */
