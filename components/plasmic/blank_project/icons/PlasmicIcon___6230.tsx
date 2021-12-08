// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6230IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6230Icon(props: _6230IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 4"}
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
        d={"M12.118 0L0 3.714l.084.273L12.202.273 12.118 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6230Icon;
/* prettier-ignore-end */
