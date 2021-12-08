// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6132IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6132Icon(props: _6132IconProps) {
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
        d={"M11.317.77h-.3V.3H.3v.47H0V0h11.316v.77z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6132Icon;
/* prettier-ignore-end */
