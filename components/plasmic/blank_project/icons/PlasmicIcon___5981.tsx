// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5981IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5981Icon(props: _5981IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M.607.784L.56.769A.894.894 0 010 .048L.295 0a.337.337 0 10.623 0l.295.048a.888.888 0 01-.56.72L.607.785z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5981Icon;
/* prettier-ignore-end */
