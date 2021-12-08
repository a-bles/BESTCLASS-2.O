// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6105IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6105Icon(props: _6105IconProps) {
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
        d={"M.033.022S.16.405.054.445c0 0 .342-.109.1-.423"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.064.477L.042.411C.082.397.062.216 0 .031L.067.01c.04.114.062.235.062.356a.188.188 0 00.07-.092.261.261 0 00-.074-.231L.181 0a.328.328 0 01.084.293.321.321 0 01-.201.184z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6105Icon;
/* prettier-ignore-end */
