// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6315IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6315Icon(props: _6315IconProps) {
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
          "M.305 18.465H0V2.53l.549-.932h.622L1.598 0h.795v.305h-.561l-.424 1.598H.726l-.419.71-.002 15.852z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6315Icon;
/* prettier-ignore-end */
