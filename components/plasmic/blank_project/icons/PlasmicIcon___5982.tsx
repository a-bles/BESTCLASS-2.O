// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5982IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5982Icon(props: _5982IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 1"}
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
        d={"M12.16.939H0V0h12.16v.939zM.307.634h11.55V.306H.305v.328z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5982Icon;
/* prettier-ignore-end */
