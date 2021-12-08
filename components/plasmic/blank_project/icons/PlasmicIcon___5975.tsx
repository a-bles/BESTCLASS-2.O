// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5975IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5975Icon(props: _5975IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M.292 18.911L0 18.851C1.012 13.876 4.727 4.808 18.245 0l.101.28C4.966 5.04 1.291 13.997.292 18.912z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5975Icon;
/* prettier-ignore-end */
