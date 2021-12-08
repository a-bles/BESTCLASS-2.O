// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6468IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6468Icon(props: _6468IconProps) {
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
        d={"M6.02.775H0V.47h5.923l.65-.47.18.247-.734.528z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6468Icon;
/* prettier-ignore-end */
