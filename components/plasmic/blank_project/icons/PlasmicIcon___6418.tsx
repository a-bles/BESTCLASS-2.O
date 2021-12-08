// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6418IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6418Icon(props: _6418IconProps) {
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
          "M2.942 19.894H.153L0 19.741V.153L.153 0h2.789l.153.153v19.588l-.153.153zm-2.636-.306h2.483V.306H.306v19.282z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6418Icon;
/* prettier-ignore-end */
