import React from 'react'
import { ThemeContext } from './themeContext'
// import { gg-moon } from 'css.gg'

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          checked={isDark()}
          onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
        /> {' '}

        <div className="mode-container">
          <i className="gg-sun"></i>
          <i className="gg-moon text-gray-600"></i>
        </div>

      </label>
    </>
  )
}
