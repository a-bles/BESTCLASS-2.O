// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6548IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6548Icon(props: _6548IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
        d={"M.186 0L0 .225 2.201 2.05l.187-.225L.186 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6548Icon;
/* prettier-ignore-end */
