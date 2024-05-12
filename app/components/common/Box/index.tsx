import styled, { CSSProperties } from "styled-components";

export interface BoxProps {
  display?: CSSProperties['display'];

  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignSelf?: CSSProperties['alignSelf'];
  flex?: CSSProperties['flex'];
  flexGrow?: CSSProperties['flexGrow'];
  flexWrap?: CSSProperties['flexWrap'];

  gap?: CSSProperties['gap'];
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];

  width?: CSSProperties['width'];
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];

  height?: CSSProperties['height'];
  minHeight?: CSSProperties['minHeight'];
  maxHeight?: CSSProperties['maxHeight'];

  backgroundColor?: CSSProperties['backgroundColor'];
  border?: CSSProperties['border'];
  borderTop?: CSSProperties['borderTop'];
  borderRadius?: CSSProperties['borderRadius'];

  textAlign?: CSSProperties['textAlign'];
}

export const Box = styled.div<BoxProps>`
  display: ${({ display = 'flex' }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  flex: ${({ flex }) => flex};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-top: ${({ borderTop }) => borderTop};
  border-radius: ${({ borderRadius }) => borderRadius};
  text-align: ${({ textAlign }) => textAlign};
`;
