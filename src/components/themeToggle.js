import React from "react"
import { Helmet } from "react-helmet"
import styled from 'styled-components'

const ThemeToggleButton = styled.button`
  display: none;
  width: 1.75rem;
  height: 1.75rem;
  margin: 1rem;
  margin-left: 0;
  margin-top: 0.75rem;
  min-width: 32px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 20%,
    #333 25%,
    #333 50%,
    #eee 33%,
    #333 100%
  );
  transform: rotate(-90deg);

  &:focus {
    outline: thin dotted #fff;
  }

  &:hover {
    cursor: pointer;
  }
`


const ThemeToggle = () => {
  // const storageItem = typeof window !== 'undefined' && window.localStorage.getItem('theme')
  // const storedTheme = storageItem === 'dark'? true : false;
  // const [useDarkTheme, setUseDarkTheme] = useState(storedTheme)

  // function handleClick() {
  //   setUseDarkTheme(useDarkTheme => !useDarkTheme)
  // }
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const theme = useDarkTheme? "dark" : "";
  //     window.localStorage.setItem('theme', theme);
  //   }
  // }, [useDarkTheme]);
  
  return (
    <React.Fragment>
      <ThemeToggleButton>
      </ThemeToggleButton>
      <Helmet>
        <body className="light-theme">
        </body>
      </Helmet>
    </React.Fragment>
  )
}

export default ThemeToggle