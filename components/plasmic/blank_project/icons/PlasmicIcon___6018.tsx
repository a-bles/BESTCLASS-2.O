// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6018IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6018Icon(props: _6018IconProps) {
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
          "M2.44 3.933h-.298a1.17 1.17 0 00-.6-1.128l-.09-.039-.013-1.152a.808.808 0 00-.9-.758L.404.865.382.732A.574.574 0 000 .287L.083 0a.888.888 0 01.564.556A1.097 1.097 0 011.737 1.6l.011.977a1.496 1.496 0 01.693 1.356z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6018Icon;
/* prettier-ignore-end */
