// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6201IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6201Icon(props: _6201IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 12"}
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
        d={"M.104 0L0 11.122l.285.002L.39.003.104 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6201Icon;
/* prettier-ignore-end */
