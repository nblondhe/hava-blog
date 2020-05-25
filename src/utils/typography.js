import Typography from "typography"
import stAnnesTheme from 'typography-theme-st-annes'
const typography = new Typography(stAnnesTheme)
// typography.options.baseFontSize = '14px';

// options
// baseFontSize: '18px',
// baseLineHeight: 1.666,
// headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
// bodyFontFamily: ['Georgia', 'serif'],


if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
