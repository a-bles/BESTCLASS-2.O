// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6381IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6381Icon(props: _6381IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 24"}
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
        d={"M.306 23.828H0V2.45L2.28 0l.224.208-2.199 2.36v21.26z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6381Icon;
/* prettier-ignore-end */
