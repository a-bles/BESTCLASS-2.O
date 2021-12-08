// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6294IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6294Icon(props: _6294IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
        d={"M.004 0L0 .312l.285.004L.29.003.004 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6294Icon;
/* prettier-ignore-end */
