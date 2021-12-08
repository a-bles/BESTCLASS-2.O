// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6215IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6215Icon(props: _6215IconProps) {
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
        d={"M.083 1.765L0 1.492l.715-.217L.993 0l.278.06L.958 1.5l-.875.265z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6215Icon;
/* prettier-ignore-end */
