// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6469IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6469Icon(props: _6469IconProps) {
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
        d={"M6.123 1.307H0V.999h5.816V0h.306v1.307z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6469Icon;
/* prettier-ignore-end */
