// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6269IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6269Icon(props: _6269IconProps) {
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
          "M.285 2.283L0 2.279l.012-1.23A1.348 1.348 0 01.488.029L.53 0l.052.004c.426.035.532.522.528.803l-.014 1.23-.285-.002L.825.803c0-.005 0-.433-.219-.505a1.11 1.11 0 00-.306.753l-.015 1.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6269Icon;
/* prettier-ignore-end */
