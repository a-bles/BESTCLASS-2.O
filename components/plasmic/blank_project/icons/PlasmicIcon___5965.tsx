// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5965IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5965Icon(props: _5965IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 69"}
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
          "M13.009 68.193h-.3V19.429C12.501 8.72 4.655 2.823 0 .261L.144 0c4.712 2.593 12.65 8.564 12.865 19.426v48.767z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5965Icon;
/* prettier-ignore-end */
