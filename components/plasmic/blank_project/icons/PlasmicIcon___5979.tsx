// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5979IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5979Icon(props: _5979IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
        d={
          "M.298 5.664H0V.024L.297 0A.603.603 0 00.61.466.619.619 0 00.923 0l.295.048a.891.891 0 01-.559.72L.613.785.566.769a.754.754 0 01-.264-.15L.298 5.664z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5979Icon;
/* prettier-ignore-end */
