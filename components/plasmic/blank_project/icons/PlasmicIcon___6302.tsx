// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6302IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6302Icon(props: _6302IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 21"}
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
          "M.184 20.941L0 20.804.212.866.313.731 2.721 0l.186.138-.214 19.938-.101.135-2.408.73zM.497.973L.288 20.612l2.121-.643L2.62.331.496.973z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6302Icon;
/* prettier-ignore-end */
