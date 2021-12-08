// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6009IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6009Icon(props: _6009IconProps) {
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
        d={"M.37 0L0 .302l.189.231.37-.302L.37.001z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6009Icon;
/* prettier-ignore-end */
