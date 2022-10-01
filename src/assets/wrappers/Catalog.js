import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: calc(var(--height-header) + 3rem);

  .movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 3rem;
  }

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

  .skeleton-card {
    background: rgba(0, 0, 0, 0.4);
    height: 30rem;
  }

  @media (max-width: 443px) {
    .skeleton-card {
      background: rgba(0, 0, 0, 0.4);
      height: 45rem;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .container-img:hover .movie-card {
      opacity: 0.8;
      filter: blur(5px);
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
