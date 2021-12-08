// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6107IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6107Icon(props: _6107IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M.071.032h1.652a.123.123 0 01-.105.072C1.543.109.12.104.12.104L.07.032z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M1.19.14H.105L0 0h1.772l-.019.048a.16.16 0 01-.132.092h-.43zM.14.07c.494 0 1.42.005 1.478 0h.01-1.49z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6107Icon;
/* prettier-ignore-end */
