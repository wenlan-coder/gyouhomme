import { Fragment, useEffect } from 'react'
import styled from '@emotion/styled'
const MainDiv = styled.div`
  * {
    transition: all 0.6s;
  }

  html {
    height: 100%;
  }

  body {
    font-family: 'Lato', sans-serif;
    color: #888;
    margin: 0;
  }

  #main {
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
  }

  .fof {
    display: table-cell;
    vertical-align: middle;
  }

  .fof h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type 0.5s alternate infinite;
  }

  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`
interface notFoundProps {
  value?: string
}
const NotFound: React.FC<notFoundProps> = ({ value = 404 }) => {
  useEffect(() => {
    document.title = 'gyouhome-404'
  }, [])

  return (
    <Fragment>
      <MainDiv>
        <div id="main">
          <div className="fof">
            <h1>Error 404</h1>
          </div>
        </div>
      </MainDiv>
    </Fragment>
  )
}
export default NotFound
