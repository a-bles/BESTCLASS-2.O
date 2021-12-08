// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5999IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5999Icon(props: _5999IconProps) {
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
          "M.607.785L.56.77A.893.893 0 010 .05L.295 0a.618.618 0 00.313.466A.609.609 0 00.922 0l.295.05a.898.898 0 01-.56.72l-.05.015z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5999Icon;
/* prettier-ignore-end */
