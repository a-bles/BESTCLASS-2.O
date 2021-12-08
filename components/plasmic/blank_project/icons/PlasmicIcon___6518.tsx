// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6518IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6518Icon(props: _6518IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 66"}
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
          "M.188 65.304L0 65.164.694.141.86 0c.126.018 12.56 1.96 12.36 16.076l-.484 45.315-.103.139L.188 65.304zM.983.318l-.01.886-.68 63.763 12.153-3.685.483-45.21C13.113 3.102 2.447.6.983.317v.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6518Icon;
/* prettier-ignore-end */
