// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6496IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6496Icon(props: _6496IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
        d={"M.345.035h-.31l.011.22h.299v-.22z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.38.291H.01L.008.231C.008.164.002.105 0 .038V0h.382L.379.291zm-.3-.07h.229V.07H.072c.003.051.005.098.01.15H.079z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6496Icon;
/* prettier-ignore-end */
