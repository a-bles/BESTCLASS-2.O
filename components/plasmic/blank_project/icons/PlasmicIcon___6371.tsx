// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6371IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6371Icon(props: _6371IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 13"}
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
          "M13.262 12.63H0v-.306h13.109V1.649L11.614.985v-.28L13.2 0l.124.28-1.271.565 1.271.565.09.14v10.926l-.151.153z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6371Icon;
/* prettier-ignore-end */
