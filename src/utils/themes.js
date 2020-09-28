import { blue, neutral, yellow, red } from './colors';
import { fontFamily } from './typography';
import { mqs, borderRadius, containerWidth } from './styles';

export const defaultTheme = {
  primaryColor: blue[300],
  primaryTextColor: neutral[100],
  textColor: neutral[100],
  rulesModalColor: neutral[200],
  black: neutral[600],
  red100: red[100],
  red200: red[200],
  blue100: blue[100],
  blue200: blue[200],
  yellow100: yellow[100],
  yellow200: yellow[200],
  fontFamily,
  borderRadius,
  container: containerWidth,
  mqs
}