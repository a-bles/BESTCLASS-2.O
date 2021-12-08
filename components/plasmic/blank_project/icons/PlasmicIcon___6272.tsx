// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6272IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6272Icon(props: _6272IconProps) {
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
        d={"M.022 0L0 1.823l.285.004L.307.003.022 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6272Icon;
/* prettier-ignore-end */
