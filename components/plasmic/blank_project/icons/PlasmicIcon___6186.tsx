// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6186IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6186Icon(props: _6186IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M.298 18.898L0 18.836l.043-.213C2.943 4.713 18.098.046 18.251 0l.087.293C18.189.338 3.204 4.956.343 18.684l-.045.214z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6186Icon;
/* prettier-ignore-end */
