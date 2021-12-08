// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6205IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6205Icon(props: _6205IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 19"}
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
          "M1.92 18.407l-.287-.003.173-16.136-.333-.574-.6.182L.523.362l-.44.133L0 .222.731 0l.35 1.514.526-.16.484.842v.039L1.92 18.407z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6205Icon;
/* prettier-ignore-end */
