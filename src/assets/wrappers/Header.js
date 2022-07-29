import styled from 'styled-components'

// $mobile-width: 600px;
// $tablet-width: 1024px;

const Wrapper = styled.header`
  height: var(--height-header);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: height 0.3s ease background-color 0.3s ease;
  background-color: var(--primary);
  display: flex;

  .nav__header {
    display: flex;
    width: 85%;
    margin: 0 auto;
    padding-top: 2rem;
    align-items: center;
    justify-content: space-between;
  }

  .navbar {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    @media (max-width: 894px) {
      position: fixed;
      bottom: 0;
      top: 94%;
      background-color: var(--primary);

      transform: translateY(0%);

      left: 0;
      height: 5rem;
      width: 100%;
      background-color: $body-bg;
      padding: 0 2rem;
      box-shadow: $box-shadow;
      flex-direction: row;
      justify-content: space-around;

      .active-text {
        display: none;
      }
    }

    @media (max-width: 478px) {
      justify-content: space-between;
    }
  }

  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--nav-link);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
    gap: 0.5rem;
  }

  .nav-link:hover {
    color: var(--white);
    transition: var(--transition);
    transform: scale(1.3);
  }

  .icon {
    font-size: 24px;
  }

  .active {
    color: var(--secondary);
  }

  .banderas {
    position: fixed;
    width: 85%;
    top: 0.8rem;
    display: flex;
    justify-content: flex-end;
  }

  .banderas__icon {
    height: 23px;
    width: 23px;
    cursor: pointer;
    margin-right: 1rem;
  }
  .search-relative {
    position: relative;
  }
`

export default Wrapper
