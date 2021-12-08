// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5967IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5967Icon(props: _5967IconProps) {
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
          "M2.341 18.07h-.3V2.557l-.409-.695H.965L.55.3H0V0h.78l.417 1.563h.61l.536.913-.002 15.594z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5967Icon;
/* prettier-ignore-end */
