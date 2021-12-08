// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6286IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6286Icon(props: _6286IconProps) {
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
        d={
          "M.286.756A.272.272 0 01.121.703.32.32 0 010 .437.452.452 0 01.297.014a.287.287 0 01.255.04.323.323 0 01.12.268.453.453 0 01-.297.423.295.295 0 01-.09.01zM.38.28a.193.193 0 00-.095.157.063.063 0 00.008.036.192.192 0 00.095-.157A.063.063 0 00.38.279V.28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6286Icon;
/* prettier-ignore-end */
