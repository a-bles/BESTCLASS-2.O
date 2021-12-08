// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6600IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6600Icon(props: _6600IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M.263 3.86L0 3.733c.1-.211.237-.403.403-.567l.02-1.063A1.547 1.547 0 011.409.738c.07-.298.245-.56.494-.738l.158.245a.954.954 0 00-.38.632l-.016.098-.097.023c-.775.175-.85 1.11-.851 1.12L.692 3.303l-.054.043a1.6 1.6 0 00-.375.514z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6600Icon;
/* prettier-ignore-end */
