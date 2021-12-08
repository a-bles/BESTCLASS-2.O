// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6178IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6178Icon(props: _6178IconProps) {
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
        d={"M6.75.775H.73L0 .247.179 0l.65.47h5.923L6.75.775z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6178Icon;
/* prettier-ignore-end */
