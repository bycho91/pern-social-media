import styled from "styled-components";

export const FeedContainer = styled.div`
  padding: 5rem 1em;
  min-height: 100vh;
  width: 100vw;
  max-width: 700px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  @media (min-width: 600px) {
    padding: 1em;
  }
`;
