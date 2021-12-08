// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6080IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6080Icon(props: _6080IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 19"}
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
        d={"M.238 18.696L0 18.516l.514-.68V0h.3v17.887l-.031.09-.545.72z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6080Icon;
/* prettier-ignore-end */
