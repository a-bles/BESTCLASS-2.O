// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6285IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6285Icon(props: _6285IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
        d={"M.94 0L0 .285l.083.273.94-.285L.941 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6285Icon;
/* prettier-ignore-end */
