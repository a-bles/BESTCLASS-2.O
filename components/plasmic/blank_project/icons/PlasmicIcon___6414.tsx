// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6414IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6414Icon(props: _6414IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
        d={"M1.502.836H.664L.557.79 0 .213.22 0l.51.53h.773l-.002.306z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6414Icon;
/* prettier-ignore-end */
