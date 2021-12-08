// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6095IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6095Icon(props: _6095IconProps) {
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
        d={"M.307.023C-.024.626.133 1.29.056 1.927.09 1.286-.081.618.306.023z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.091 1.93l-.07-.006c.01-.17.004-.347 0-.522A2.278 2.278 0 01.28 0l.06.036A2.52 2.52 0 00.118 1.3c.004.21-.005.421-.027.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6095Icon;
/* prettier-ignore-end */
