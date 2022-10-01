import styled from 'styled-components'
const Wrapper = styled.div`
  * {
    position: relative;
  }

  .swiper-slide {
    width: 15%;
  }
  .skeleton-movie {
    height: 241px;
    width: 15%;
    background: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1024px) {
    .swiper-slide {
      width: 25%;
    }
    .skeleton-movie {
      width: 25%;
    }
  }
  @media (max-width: 768px) {
    .swiper-slide {
      width: 35%;
    }
    .skeleton-movie {
      width: 35%;
    }
  }
  /* colocar tamna  table 30%  mobile 40% */

  .container-img {
    position: relative;
  }
  .movie-card {
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    border-radius: var(--border-radius);
    background-position: center center;
    background-size: cover;
    /* padding-top: 150%; */
    margin-bottom: 1rem;

    ::before {
      content: '';
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: $black;
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: var(--border-radius);
    }
  }

  .btn1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }

  .skeleton-cards {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  @media (hover: hover) and (pointer: fine) {
    .container-img:hover .movie-card {
      opacity: 0.8;
      filter: blur(5px);
      background: red;
    }

    .container-img:hover {
      opacity: 0.8;
    }

    .container-img:hover .btn1 {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }
`

export default Wrapper
