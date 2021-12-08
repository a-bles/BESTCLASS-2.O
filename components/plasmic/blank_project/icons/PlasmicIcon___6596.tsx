// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6596IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6596Icon(props: _6596IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
        d={"M.961 0L0 .291l.085.28.96-.292L.962 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6596Icon;
/* prettier-ignore-end */
