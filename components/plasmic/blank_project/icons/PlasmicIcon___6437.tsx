// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6437IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6437Icon(props: _6437IconProps) {
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
        d={"M.06.051a.487.487 0 01.308.722.609.609 0 00-.304-.726L.06.051z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.4.79L.334.763A.562.562 0 00.061.09H.053L0 .078.053 0l.029.02.007.005a.48.48 0 01.317.252A.592.592 0 01.4.79z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6437Icon;
/* prettier-ignore-end */
