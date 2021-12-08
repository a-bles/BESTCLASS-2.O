// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5974IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5974Icon(props: _5974IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 1"}
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
        d={"M11.361.945H0V0h.306v.64h10.75V0h.306v.945z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5974Icon;
/* prettier-ignore-end */
