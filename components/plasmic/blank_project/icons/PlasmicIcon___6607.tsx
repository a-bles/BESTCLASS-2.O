// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6607IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6607Icon(props: _6607IconProps) {
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
        d={"M.828 0L0 .251l.085.28.828-.252L.828 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6607Icon;
/* prettier-ignore-end */
