// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6237IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6237Icon(props: _6237IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 26"}
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
          "M.285 25.889L0 25.886l.23-21.74L2.19 1.11 2.202 0l.286.003-.012 1.194-1.96 3.035-.23 21.657z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6237Icon;
/* prettier-ignore-end */
