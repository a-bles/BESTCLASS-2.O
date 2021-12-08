// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5980IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5980Icon(props: _5980IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 4"}
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
          "M.298 3.061H0V.025L.296 0A.337.337 0 10.92 0l.294.048a.891.891 0 01-.559.72L.61.785.562.769A.761.761 0 01.3.619V3.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5980Icon;
/* prettier-ignore-end */
