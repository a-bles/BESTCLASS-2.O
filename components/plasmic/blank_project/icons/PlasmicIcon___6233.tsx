// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6233IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6233Icon(props: _6233IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
        d={"M.24 4.268L0 4.111l1.937-3L1.949 0l.285.003-.012 1.194L.24 4.268z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6233Icon;
/* prettier-ignore-end */
