// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6540IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6540Icon(props: _6540IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
          "M3.992 3.676L3.7 3.673A3.469 3.469 0 002.496.785 2.644 2.644 0 00.084.441L0 .162a2.927 2.927 0 012.671.39 3.756 3.756 0 011.32 3.124z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6540Icon;
/* prettier-ignore-end */
