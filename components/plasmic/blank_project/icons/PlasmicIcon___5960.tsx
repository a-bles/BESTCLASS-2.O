// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5960IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5960Icon(props: _5960IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 68"}
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
          "M14.105 67.445h-.3V.362C12.102 1.079.248 6.516.299 18.68v42.49h13.38v.3H.148L0 61.32V18.68C-.056 5.432 13.762.054 13.902 0l.203.14v67.305z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5960Icon;
/* prettier-ignore-end */
