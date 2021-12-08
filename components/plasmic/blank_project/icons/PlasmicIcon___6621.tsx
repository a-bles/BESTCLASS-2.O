// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6621IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6621Icon(props: _6621IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 20"}
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
          "M.52 19.723l-.483-.545L0 19.08.204 0l.291.003-.203 19.023.447.503-.218.194z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6621Icon;
/* prettier-ignore-end */
