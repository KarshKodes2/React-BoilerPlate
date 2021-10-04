import { css } from 'styled-components';
import { MEDIA_BREAKPOINTS, TRANSITIONS } from '../../Settings/styles';
import {  FONT_STACK } from '../../Settings/styles';


// DISPLAY

export const flexMixin = (layout = "row", flex_wrap = "wrap", flex_justify = "center", flex_align = "center") => {

    return css`
        display: flex;
        flex-direction: ${layout};
        flex-wrap: ${flex_wrap};
        justify-content: ${flex_justify};
        align-items: ${flex_align};
    `
}

// CONTAINERS, SIZES, MARGINS, PADDINGS

export const containerFluid = (bg) => {
    return css`
        width: 100%;
        height: auto;
        ${ bg ? 'background: ' + bg : ''}
    `
}

export const roundedBorders = (radius, border) => {
    return css`
        border: ${border ? border : 'none'};
        border-radius: ${radius};
    `
}

export const pagePadding = () => {
    return css`
            // SIZE BOX
            box-sizing: border-box;

            // PADDING FOR DESKTOP
            @media (min-width: ${ MEDIA_BREAKPOINTS.smallDesktop }px) {
                padding-left: 70px;                
                padding-right: 70px;
            }

            // PADDING FOR TABLETS
            @media (min-width: ${ MEDIA_BREAKPOINTS.largeMobile }px) and (max-width: ${ MEDIA_BREAKPOINTS.smallDesktop }px){
                padding-left: 40px;                
                padding-right: 40px;
            }

            // PADDING FOR MOBILE
            @media (max-width: ${ MEDIA_BREAKPOINTS.largeMobile }px){
                padding-left: 20px;                
                padding-right: 20px;
            }
        `
}

export const transition = (type) => {
    switch (type) {
        case 'primary':
            return css`
                transition: all ${ TRANSITIONS.fast } ${ TRANSITIONS.bounce };
            `
        default:
            return css`
                transition: all 0.25s ease-in-out;
            `
    }
}

export const appPadding = () => {
    return css`
            // SIZE BOX
            box-sizing: border-box;

            // PADDING FOR DESKTOP
            @media (min-width: ${ MEDIA_BREAKPOINTS.smallDesktop }px) {
                padding-left: 20px;                
                padding-right: 20px;
            }

            // PADDING FOR TABLETS
            @media (min-width: ${ MEDIA_BREAKPOINTS.largeMobile }px) and (max-width: ${ MEDIA_BREAKPOINTS.smallDesktop }px){
                padding-left: 20px;                
                padding-right: 20px;
            }

            // PADDING FOR MOBILE
            @media (max-width: ${ MEDIA_BREAKPOINTS.largeMobile }px){
                padding-left: 14px;                
                padding-right: 14px;
            }
        `
}

// EFFECTS

export const textShadow = (depth) => {
    const SHADOW_COLOR_DARK_GREY = 'rgba(63, 61, 86, 0.39)';

    return css`
        text-shadow: 0px 5px ${depth || 4}px ${SHADOW_COLOR_DARK_GREY};
    `
}

export const welcomeHeader = css`
        font-size: 52px;
        font-family: ${FONT_STACK.primary};
        line-height: 55px;

        ${textShadow()};

        @media (max-width:1000px) {
            font-size: 40px;
            line-height: 42px;
        }
`