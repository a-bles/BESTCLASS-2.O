// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6008IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6008Icon(props: _6008IconProps) {
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
        d={"M1.475 1.41H.347L0 .076.29 0l.288 1.112h.897v.298z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6008Icon;
/* prettier-ignore-end */
