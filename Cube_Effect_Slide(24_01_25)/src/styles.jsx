import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

export const Wrap = styled.div`
  background-image: radial-gradient(
      circle at 20% 100%,
      rgba(184, 184, 184, 0.1) 0%,
      rgba(184, 184, 184, 0.1) 33%,
      rgba(96, 96, 96, 0.1) 33%,
      rgba(96, 96, 96, 0.1) 66%,
      rgba(7, 7, 7, 0.1) 66%,
      rgba(7, 7, 7, 0.1) 99%
    ),
    linear-gradient(40deg, #040a22, #162561, #202e64, #6f7aa6);
    background-repeat: no-repeat;
    background-size: cover;

  section {
    display: grid;
    grid-template-columns: 50% 45%;
    place-items: center;
    gap: 60px;
    min-height: 100vh;
    padding: 20px 60px;

    .content {
      max-width: 2400px;

      h1 {
        font-family: sans-serif;
        font-size: clamp(2rem, 4vw, 3.5rem);
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 1px;
        margin-bottom: 36px;
        color: #fff;
      }

      p {
        font-size: clamp(1rem, 4vw, 1.1rem);
        font-weight: 300;
        line-height: 1.5;
        margin-bottom: 30px;
        color: #fff;
      }

      button {
        background: #eaeaea;
        color: #202134;
        font-size: clamp(0.9rem, 4vw, 1rem);
        font-weight: 600;
        border: 0;
        outline: 0;
        padding: 8px 14px;
        border-radius: 14px;
        transform: scale(1);
        transition: all 0.4s ease-in;
        cursor: pointer;

        &:is(:hover, :focus) {
          transform: scale(0.98);
          background-color: #6f7aa6;
          color: #eaeaea;
        }
      }
    }

    .swiper {
      position: relative;
      width: 400px;
      height: 490px;

      .swiper__wrapper__slide {
        position: relative;
        background-position: center;
        background-size: cover;
        border: 1px solid rgba(255, 255, 255, 0.3);
        user-select: none;
        border-radius: 20px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }

        .wrapper__cost {
          position: absolute;
          top: 8px;
          right: 6px;
          background-color: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          border-radius: 30px;
          color: #fff;
          padding: 6px 10px;
          font-size: clamp(0.8rem, 4vw, 0.9rem);
          font-weight: 600;
        }

        .wrapper__overlay {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 150px;
          padding: 10px 20px;
          background-color: rgba(93, 95, 145, 0.2);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          border-radius: 0 0 20px 20px;

          h1 {
            font-size: clamp(1.2rem, 4vw, 1.5rem);
            font-weight: 600;
          }

          p {
            font-size: clamp(0.8rem, 4vw, 0.9rem);
            font-weight: 300;
            line-height: 1.3;
          }

          .wrapper__ratings {
            display: flex;
            column-gap: 10px;
            margin-top: -6px;

            span {
              font-size: clamp(0.8rem, 4vw, 0.9rem);
              font-weight: 300;
            }

            .wrapper__stars {
              color: #afe312;
            }
          }
        }
      }
    }
  }
  
  @media (max-width: 1050px) {
  .swiper {
    width: 350px;
    height: 450px;
  }
}
`