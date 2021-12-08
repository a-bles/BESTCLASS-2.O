// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6145IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6145Icon(props: _6145IconProps) {
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
        d={"M6.606.759H.716L0 .242.175 0l.638.46h5.792v.3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6145Icon;
/* prettier-ignore-end */
