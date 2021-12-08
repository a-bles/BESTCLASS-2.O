// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6536IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6536Icon(props: _6536IconProps) {
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
        d={"M.332 0L0 .423l.23.18L.56.18.331 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6536Icon;
/* prettier-ignore-end */
