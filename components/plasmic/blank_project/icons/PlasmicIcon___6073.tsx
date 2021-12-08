// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6073IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6073Icon(props: _6073IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 19"}
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
        d={"M.58 18.702l-.546-.653L0 17.953V0h.3v17.898l.51.612-.23.192z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6073Icon;
/* prettier-ignore-end */
