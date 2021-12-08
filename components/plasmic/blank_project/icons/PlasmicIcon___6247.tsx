// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6247IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6247Icon(props: _6247IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 4"}
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
        d={"M.285 3.606L0 3.603.04 0l.284.003-.039 3.603z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6247Icon;
/* prettier-ignore-end */
