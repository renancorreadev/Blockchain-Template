import styled from 'styled-components'

export const Button = styled.button`
  height: 3rem;
  border-radius: 3rem;
  -webkit-border-radius: 3rem;
  -moz-border-radius: 3rem;
  -ms-border-radius: 3rem;
  -o-border-radius: 3rem;

  background: var(--gray-850);
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);
  font-weight: bold;

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  svg.closeIcon {
    margin-left: 1rem;
  }

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
    -webkit-filter: brightness(0.8);
  }
`
export const ButtonArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end

  margin-top: 0.3rem;
  


 
`
