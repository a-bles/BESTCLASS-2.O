// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6547IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6547Icon(props: _6547IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M0 4.784L.045.6l.291.002-.034 3.175 1.705-2.641L2.02 0l.291.003-.012 1.22L0 4.784z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6547Icon;
/* prettier-ignore-end */
