// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6513IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6513Icon(props: _6513IconProps) {
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
          "M1.17 3.236l-.086-.293a1.677 1.677 0 00-.043-.339c-.076-.23-.173-.454-.261-.68C.94 1.25.346.983 0 .5L.201.345l.689.775.079-.054L.347.08.416 0C.612.176.883.314.99.534c.27.545.477 1.126.694 1.697.137.364.247.738.416 1.243l-.932-.238z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6513Icon;
/* prettier-ignore-end */
