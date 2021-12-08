// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6626IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6626Icon(props: _6626IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
        d={"M.085 1.193L0 .913.69.706 1.157 0 1.4.16.902.907l-.079.06-.74.226z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6626Icon;
/* prettier-ignore-end */
