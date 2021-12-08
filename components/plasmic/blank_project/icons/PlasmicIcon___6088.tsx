// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6088IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6088Icon(props: _6088IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.098 2.272L.034.007c.1.751.122 1.51.064 2.265z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.064 2.273L0 .008.067 0c.093.529.12 1.068.08 1.603a14.82 14.82 0 00-.014.67H.064z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6088Icon;
/* prettier-ignore-end */
