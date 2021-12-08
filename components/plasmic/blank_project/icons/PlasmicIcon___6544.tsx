// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6544IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6544Icon(props: _6544IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
        d={
          "M2.193 4.025L0 1.883l.204-.21L1.908 3.34 1.944 0l.291.003-.042 4.022z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6544Icon;
/* prettier-ignore-end */
