// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6379IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6379Icon(props: _6379IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
        d={"M0 3.926V0h.305v3.148l1.974-2.121.224.208L0 3.926z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6379Icon;
/* prettier-ignore-end */
