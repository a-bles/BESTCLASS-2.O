// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6433IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6433Icon(props: _6433IconProps) {
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
        d={"M.07 2.065C.107 1.377-.106.655.35.02.01.672.186 1.386.07 2.065z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.107 2.07l-.07-.008c.009-.183 0-.373-.009-.558C-.055.984.048.451.322 0l.06.037a2.77 2.77 0 00-.225 1.286c.001.25-.015.5-.05.747zM.119.676a2.69 2.69 0 00-.031.48C.089.996.1.836.118.676z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6433Icon;
/* prettier-ignore-end */
