// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6530IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6530Icon(props: _6530IconProps) {
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
        d={"M.308 1.43L0 .065.284 0l.24 1.06.6-.183.086.28-.902.274z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6530Icon;
/* prettier-ignore-end */
