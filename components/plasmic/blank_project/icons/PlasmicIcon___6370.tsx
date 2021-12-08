// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6370IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6370Icon(props: _6370IconProps) {
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
          "M.245 3.177L0 2.994c.106-.144.24-.266.392-.359l.01-.989A1.12 1.12 0 011.52.568.902.902 0 012.094 0l.084.293-.042-.146.043.146a.587.587 0 00-.39.455l-.024.136-.137-.008a.824.824 0 00-.92.782l-.013 1.17-.092.039c-.142.073-.265.18-.358.31z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6370Icon;
/* prettier-ignore-end */
