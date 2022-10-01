import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: calc(var(--height-header) + 3rem);

  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  .movie__img {
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      border-radius: var(--border-radius);
      background-position: center center;
      background-size: cover;
      /* padding-top: 150%; */
      margin-bottom: 1rem;
      max-width: 37rem;
    }
  }

  .content__info {
    width: 55%;
    @media (max-width: 750px) {
      width: 100%;
    }
    h1 {
      font-size: 5rem;
      color: var(--secondary);
      font-weight: 700;
    }
    p {
      font-size: 1.5rem;
    }
    .container-tags {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1140px) {
        flex-direction: column;
        margin-top: 1rem;
        gap: 2rem;
        align-items: flex-start;
        .favorite {
          align-self: flex-end;
          /* display: none; */
        }
      }
      .gender {
        display: flex;
        gap: 1rem;
        .gender__item {
          padding: 0.5rem 1.5rem;
          border: 2px solid white;
          border-radius: var(--border-radius);
          font-size: 0.8rem;
          font-weight: 600;
          /* background-color:  */
        }
      }
    }
  }
  .casts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 1.2rem;
    .casts__item__img {
      padding-top: 160px;
      background-size: cover;
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 750px) {
    .img-none {
      display: none;
    }

    .movie__img {
      text-align: center;
      img {
        margin: 0 auto;
      }
    }
  }
  @media (min-width: 750px) {
    .title-img {
      display: none;
    }
  }
`

export default Wrapper
