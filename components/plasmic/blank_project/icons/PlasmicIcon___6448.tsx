// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6448IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6448Icon(props: _6448IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
          "M.384.036a1.165 1.165 0 00-.272 1.06L.07 1.09A1.17 1.17 0 01.333.036h.051z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.16 1.138l-.117-.016L.035 1.1A1.196 1.196 0 01.306.012L.317 0H.47L.41.06a1.133 1.133 0 00-.263 1.026l.013.052z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6448Icon;
/* prettier-ignore-end */
