// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6004IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6004Icon(props: _6004IconProps) {
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
        d={"M1.3 1.41H.346L0 .076.289 0l.289 1.112h.718l.003.298z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6004Icon;
/* prettier-ignore-end */
