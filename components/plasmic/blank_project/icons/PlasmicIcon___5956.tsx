// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5956IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5956Icon(props: _5956IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 1"}
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
        d={"M14.01.882H0V0h14.01v.882zM.305.576h13.4v-.27H.304v.27z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5956Icon;
/* prettier-ignore-end */
