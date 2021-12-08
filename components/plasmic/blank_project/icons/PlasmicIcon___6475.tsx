// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6475IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6475Icon(props: _6475IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 20"}
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
          "M18.448 19.326C17.428 14.303 13.673 5.152 0 .287L.104 0c13.813 4.915 17.609 14.18 18.643 19.263l-.299.063z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6475Icon;
/* prettier-ignore-end */
