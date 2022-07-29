import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  width: 260px;
  top: 45px;
  border-radius: var(--border-radius);
  z-index: 100;
  background: var(--primary);

  @media (min-width: 876px) {
    width: 240px;
  }
  @media (max-width: 470px) {
    width: 230px;
  }

  .menu-item {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2rem;
    margin-bottom: 1rem;
    margin-left: 1rem;

    img {
      width: 6.5rem;
    }
  }

  h3 {
    text-align: center;
  }
`
export default Wrapper
