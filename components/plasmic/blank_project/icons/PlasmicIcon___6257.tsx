// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6257IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6257Icon(props: _6257IconProps) {
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
          "M.285 2.283L0 2.279l.014-1.23A1.347 1.347 0 01.489.029L.53 0l.052.004c.425.035.532.522.528.803l-.013 1.23-.287-.002L.825.803c0-.005 0-.433-.217-.505a1.12 1.12 0 00-.307.753l-.016 1.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6257Icon;
/* prettier-ignore-end */
