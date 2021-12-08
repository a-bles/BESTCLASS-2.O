// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6251IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6251Icon(props: _6251IconProps) {
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
        d={"M.182 1.353L0 1.133 1.376 0l.182.22L.182 1.353z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6251Icon;
/* prettier-ignore-end */
