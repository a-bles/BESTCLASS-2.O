// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6258IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6258Icon(props: _6258IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M.286 2.283L0 2.279l.012-1.23A1.346 1.346 0 01.488.029L.53 0l.052.004c.426.035.532.522.529.803l-.014 1.23-.286-.002L.824.803c0-.005 0-.434-.217-.505a1.125 1.125 0 00-.307.753l-.014 1.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6258Icon;
/* prettier-ignore-end */
