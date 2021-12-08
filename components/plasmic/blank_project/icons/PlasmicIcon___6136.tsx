// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6136IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6136Icon(props: _6136IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 1"}
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
        d={"M6.026.73H0V.423h5.912L6.408 0l.198.232-.58.497z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6136Icon;
/* prettier-ignore-end */
