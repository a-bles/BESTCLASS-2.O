// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6197IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6197Icon(props: _6197IconProps) {
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
          "M1.144 3.167l-.083-.287a1.642 1.642 0 00-.042-.332c-.075-.225-.17-.444-.256-.665C.92 1.223.338.962 0 .49L.197.337l.674.759.077-.053L.34.078.407 0C.599.172.864.308.97.522c.265.534.467 1.103.679 1.661.134.357.242.723.407 1.217l-.912-.233z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6197Icon;
/* prettier-ignore-end */
