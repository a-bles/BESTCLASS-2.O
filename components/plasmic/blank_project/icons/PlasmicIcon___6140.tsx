// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6140IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6140Icon(props: _6140IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 1"}
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
        d={"M6.465.714H.57L0 .227.195 0l.484.415h5.786v.299z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6140Icon;
/* prettier-ignore-end */
