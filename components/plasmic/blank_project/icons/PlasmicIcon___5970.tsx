// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5970IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5970Icon(props: _5970IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 19"}
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
          "M.298 18.07H0V2.476l.537-.913h.609L1.563 0h.78v.299h-.55l-.415 1.563H.71l-.41.695L.299 18.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5970Icon;
/* prettier-ignore-end */
