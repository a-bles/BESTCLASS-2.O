// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6271IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6271Icon(props: _6271IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M.285 2.872H0L.018 1.05A1.349 1.349 0 01.495.029L.537 0l.05.004c.425.035.531.522.527.803L1.095 2.63.81 2.627.83.804C.828.798.828.371.61.3a1.115 1.115 0 00-.307.753l-.018 1.82z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6271Icon;
/* prettier-ignore-end */
