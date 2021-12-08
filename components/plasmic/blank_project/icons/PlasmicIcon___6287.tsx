// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6287IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6287Icon(props: _6287IconProps) {
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
          "M.287.758A.275.275 0 01.121.703.319.319 0 010 .436.452.452 0 01.297.013a.287.287 0 01.255.042.323.323 0 01.122.267.453.453 0 01-.298.423.326.326 0 01-.09.013zM.381.282A.188.188 0 00.286.44a.067.067 0 00.007.037A.194.194 0 00.388.32.072.072 0 00.381.283z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6287Icon;
/* prettier-ignore-end */
