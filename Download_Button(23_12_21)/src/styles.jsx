import styled, {createGlobalStyle} from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");

  * {
    font-family: "Open Sans", "sans-serif";
  }
`

export const Wrap = styled.div`
  overflow: hidden;

  ul {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    li {
      display: inline-block;
      margin: 10px;

      .download {
        width: 200px;
        height: 75px;
        background-color: black;
        float: left;
        border-radius : 5px;
        position: relative;
        color: white;
        cursor: pointer;
        border: 1px solid white;

        &:hover {
          -webkit-filter: invert(100%);
          filter: invert(100%);
        }

        .df,
        .dfn {
          position: absolute;
          left: 70px;
        }

        .df {
          top: 20px;
          font-size: 0.68em;
        }

        .dfn {
          top: 33px;
          font-size: 1.08em;
        }
      }
    }
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

