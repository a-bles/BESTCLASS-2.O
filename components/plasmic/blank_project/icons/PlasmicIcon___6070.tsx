// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6070IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6070Icon(props: _6070IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 20"}
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
          "M2.879 19.469H.149L0 19.319V.15L.15 0h2.729l.15.15v19.17l-.15.149zm-2.58-.3H2.73V.3H.3v18.87z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6070Icon;
/* prettier-ignore-end */
