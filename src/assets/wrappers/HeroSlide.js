import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: calc(var(--height-header) + 3rem);
  * {
    position: relative;
  }
  .hero-slide {
    width: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50rem;
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    }
  }

  .hero-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .hero__info {
    padding: 3rem;

    .title {
      font-size: 5rem;
      font-weight: 700;
      color: var(--secondary);
    }
    .description {
      font-weight: 700;
      font-size: 2rem;
      width: 50%;

      @media (max-width: 1024px) {
        width: 100%;
        font-size: 1.5rem;
      }
    }
  }

  .btn {
    margin-top: 2rem;
  }
  .btns,
  .title,
  .description {
    opacity: 0;
    transform: translateY(-100px);
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .active > .hero__content > .hero__info {
    .btns,
    .title,
    .description {
      opacity: 1;
      transform: translateY(0);
    }

    .title {
      transition-delay: 0.3s, 0.3s;
    }

    .description {
      transition-delay: 0.6s, 0.6s;
    }

    .btns {
      transition-delay: 0.9s, 0.9s;
    }
  }
`

export default Wrapper
