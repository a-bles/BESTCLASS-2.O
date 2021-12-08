// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6610IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6610Icon(props: _6610IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
        d={"M.013 0L0 1.08l.291.003.013-1.08L.014 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6610Icon;
/* prettier-ignore-end */
