// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6228IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6228Icon(props: _6228IconProps) {
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
        d={"M.77 1.903H0v-.305h.534L.96 0h.796v.305h-.561L.77 1.903z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6228Icon;
/* prettier-ignore-end */
