import styled from "styled-components";

const cardProperty = [
  {
    clr: "#009688",
    name: "Sea",
    img: "img1.jpg",
  },
  {
    clr: "#03a9f4",
    name: "Sky",
    img: "img2.jpg",
  },
  {
    clr: "#ff3e7f",
    name: "Mountain",
    img: "img3.jpg",
  },
];

export default function App() {
  return (
    <Wrap>
      <div className="container">
        {cardProperty.map((idx) => {
          return (
            <Card clr={idx.clr}>
              <div className="card">
                <div className="imgBx">
                  <img src={idx.img} />
                </div>
                <div className="content">
                  <h2>{idx.name}</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    commodi officia aspernatur error. Veritatis quisquam rem
                    quis ut, necessitatibus aut aperiam adipisci odio voluptatem
                    quos totam esse sit dolorem incidunt?
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #00bcd4, #ffeb3b);

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px 50px;
    padding: 100px 50px;
  }

  .container .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 350px;
    height: 300px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
  }

  .container .card:hover {
    height: 400px;
  }

  .container .card .imgBx {
    position: absolute;
    top: 20px;
    width: 300px;
    height: 220px;
    background-color: #333;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.5s;
  }

  .container .card:hover .imgBx {
    top: -100px;
    scale: 0.75;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
  }

  .container .card .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .container .card .content {
    position: absolute;
    width: 100%;
    padding: 0 30px;
    text-align: center;
    top: 252px;
    height: 40px;
    overflow: hidden;
    transition: 0.5s;
  }

  .container .card:hover .content {
    top: 130px;
    height: 250px;
  }

  .container .card .content p {
    color: #333;
  }
`;
const Card = styled.div`
  .card .content h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: ${(props) => props.clr};
  }

  .card .content a {
    position: relative;
    top: 40px;
    display: inline-block;
    padding: 12px 25px;
    background-color: ${(props) => props.clr};
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    border-radius: 8px;
  }
`;
