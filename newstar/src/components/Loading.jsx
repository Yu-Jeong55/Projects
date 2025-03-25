import styled from "styled-components";
import NewsCharacter from "assets/newsCharacter.gif";

const LoadingBox = styled.div`
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <LoadingBox>
      <img src={NewsCharacter} alt="" width="200px" />
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>로딩중 입니당</div>
    </LoadingBox>
  );
}
