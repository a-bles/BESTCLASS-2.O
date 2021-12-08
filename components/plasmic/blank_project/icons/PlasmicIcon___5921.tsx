// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5921IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5921Icon(props: _5921IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 22"}
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
          "M19.61.257C14.563 2.386 2.32 8.817.295 21.75L0 21.702C2.043 8.662 14.331 2.168 19.455 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5921Icon;
/* prettier-ignore-end */
