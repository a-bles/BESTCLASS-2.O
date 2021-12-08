// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6611IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6611Icon(props: _6611IconProps) {
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
        d={"M.524 0L0 .159l.085.279.524-.16L.524 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6611Icon;
/* prettier-ignore-end */
