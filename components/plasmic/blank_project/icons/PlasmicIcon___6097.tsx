// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6097IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6097Icon(props: _6097IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.035.016a4.97 4.97 0 01.338 2.127A7.307 7.307 0 00.035.016z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.337 2.144l-.024-.322A6.016 6.016 0 000 .028L.064 0a4.87 4.87 0 01.34 2.068v.072l-.067.004z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6097Icon;
/* prettier-ignore-end */
