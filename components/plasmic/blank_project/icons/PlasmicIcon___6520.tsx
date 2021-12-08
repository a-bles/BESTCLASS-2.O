// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6520IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6520Icon(props: _6520IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 58"}
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
          "M.291 57.914L0 57.911l.583-54.69.475-1.07.558-.17.391-1.774L2.688 0l.085.28-.516.156-.393 1.774-.594.18-.396.895-.583 54.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6520Icon;
/* prettier-ignore-end */
