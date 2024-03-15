import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export type ButtonProps = {

    text?: string 
    textColor?: string 
    bgColor?: string
    clickEvent?:  () => void
    borderColor?: string 
    icon: IconType
    borderSize?: string 
    paddingX?: string
    paddingY?: string
    children?: JSX.Element
    modifier?: string
    tip?: string
    isActive?: boolean
    disabled?: boolean
  
  }
  