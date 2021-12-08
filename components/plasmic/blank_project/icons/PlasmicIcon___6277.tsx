// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6277IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6277Icon(props: _6277IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M1.066 2.712l-.285-.003L.803.724A.955.955 0 01.62.888L.58.916.527.91C.247.89.05.654 0 .285L.283.247c.013.1.06.321.22.37A1.03 1.03 0 00.809 0l.284.022-.027 2.69z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6277Icon;
/* prettier-ignore-end */
