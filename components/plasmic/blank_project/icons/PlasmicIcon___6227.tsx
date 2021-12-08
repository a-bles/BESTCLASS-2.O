// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6227IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6227Icon(props: _6227IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 70"}
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
          "M13.293 69.682h-.306V19.853C12.774 8.91 4.757 2.885 0 .267L.147 0c4.816 2.65 12.926 8.751 13.146 19.85v49.832z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6227Icon;
/* prettier-ignore-end */
