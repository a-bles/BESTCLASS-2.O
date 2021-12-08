// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5954IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5954Icon(props: _5954IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 23"}
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
          "M20.039.263C14.88 2.438 2.37 9.01.3 22.223l-.3-.046C2.087 8.852 14.644 2.216 19.88 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5954Icon;
/* prettier-ignore-end */
