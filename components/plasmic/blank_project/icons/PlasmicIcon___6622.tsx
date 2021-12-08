// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6622IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6622Icon(props: _6622IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 20"}
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
        d={"M.256 19.995L0 19.855l.48-.881L.683 0l.291.003-.22 19.08-.498.912z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6622Icon;
/* prettier-ignore-end */
