// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6482IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6482Icon(props: _6482IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 2"}
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
          "M.058 1.82c.136-.072.275-.14.406-.22.4-.254.87-.38 1.344-.358.093.012.184.03.274.056a2.088 2.088 0 01-.299-.352.552.552 0 01.045-.622A.623.623 0 012.453.1c.057.012.114.027.17.046C2.285-.082 1.423.063.936.4c.146-.016.29-.042.432-.076a4.21 4.21 0 01.527-.16c-.717.424-1.34.99-1.83 1.663l-.008-.006z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.067 1.88L0 1.813l.043-.022.018-.012c.076-.085.15-.173.222-.262.182-.226.378-.44.587-.64.218-.19.449-.364.69-.522l.163-.113C1.665.26 1.609.28 1.553.3a3.62 3.62 0 01-.176.06c-.1.027-.202.046-.305.057-.044.006-.09.012-.131.02L.78.461l.132-.09C1.429.014 2.3-.117 2.639.115l.18.123-.21-.06c-.027-.008-.054-.014-.07-.02a.534.534 0 00-.093-.024.582.582 0 00-.594.214.518.518 0 00-.041.582c.052.088.117.169.193.238.034.037.069.072.1.107l.07.08-.104-.022-.088-.021a.881.881 0 00-.18-.035c-.467-.023-.93.1-1.324.353-.09.053-.186.106-.277.154l-.1.053-.013.016-.02.027zM1.858.235c-.084.06-.17.12-.255.178a4.71 4.71 0 00-1.264 1.15c-.035.042-.07.084-.107.126.072-.039.145-.077.214-.12a2.348 2.348 0 011.364-.362c.056.005.11.014.164.029l-.018-.018c-.08-.075-.15-.16-.206-.255a.587.587 0 01.048-.66.677.677 0 01.06-.068zM2.15.071a2.33 2.33 0 00-1.046.267c.086-.01.17-.027.254-.05.058-.017.116-.038.175-.058.116-.045.235-.08.358-.103l.147-.023-.02.014a.581.581 0 01.14-.048H2.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6482Icon;
/* prettier-ignore-end */
