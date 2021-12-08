// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6246IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6246Icon(props: _6246IconProps) {
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
        d={"M.285 3.606L0 3.603.038 0l.285.003-.038 3.603z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6246Icon;
/* prettier-ignore-end */
