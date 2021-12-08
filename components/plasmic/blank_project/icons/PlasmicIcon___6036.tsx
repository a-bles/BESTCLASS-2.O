// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6036IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6036Icon(props: _6036IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 25"}
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
        d={"M2.491 24.326h-.298V3.52L0 1.167V0h.3v1.05l2.19 2.354.001 20.922z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6036Icon;
/* prettier-ignore-end */
