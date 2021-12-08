// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6395IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6395Icon(props: _6395IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 4"}
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
        d={"M.305 3.938H0V.858l.09-.14L1.738 0h2.99v.305H1.77L.305.957v2.981z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6395Icon;
/* prettier-ignore-end */
