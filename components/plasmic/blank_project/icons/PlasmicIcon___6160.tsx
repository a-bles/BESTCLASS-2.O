// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6160IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6160Icon(props: _6160IconProps) {
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
        d={"M.554.053L.062.551.056.547.538.045l.016.008z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.067.595L.043.579 0 .558.031.522.531 0l.023.011.018.01.038.024-.031.031-.493.496-.02.023z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6160Icon;
/* prettier-ignore-end */
