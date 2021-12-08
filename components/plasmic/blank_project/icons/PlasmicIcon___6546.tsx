// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6546IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6546Icon(props: _6546IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 25"}
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
          "M1.96 24.18l-.292-.002.236-22.11L0 .208.204 0l1.993 1.946-.238 22.234z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6546Icon;
/* prettier-ignore-end */
