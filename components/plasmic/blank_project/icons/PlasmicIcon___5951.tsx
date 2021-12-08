// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5951IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5951Icon(props: _5951IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 2"}
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
        d={"M6.667 1.426H0V0h6.667v.299H.297v.828h6.37v.3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5951Icon;
/* prettier-ignore-end */
