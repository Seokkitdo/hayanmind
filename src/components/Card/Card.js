import React from "react";
import styled, { css } from "styled-components";

const CardLayout = styled.div`
  width: 500px;
  margin: 12px 0;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  box-sizing: border-box;
  border-radius: 20px;
`;

const FlexElements = styled.div`
  display: flex;
  align-items: baseline;
`;
const CommentId = styled.div`
  margin: 20px 12px 12px 20px;
  width: 100px;
  height: 21px;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  color: #212529;
  font-family: "SF Pro Display", sans-serif;
`;

const Email = styled.div`
  width: 45px;
  height: 21px;
  margin: 0 12px 12px 20px;
  font-family: "SF Pro Display", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  color: #212529;
`;

const CommonText = styled.div`
  height: 21px;
  font-family: "SF Pro Display", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
`;

const CommentTitle = styled.div`
  width: 81px;
  height: 21px;
  line-height: 21px;
  font-size: 18px;
  font-family: "SF Pro Display", sans-serif;
  font-weight: 600;
  margin: 0 0 2px 20px;
`;

const Content = styled.div`
  margin: 0px 20px 20px;
  font-size: 18px;
  font-family: "SF Pro Display", sans-serif;
  line-height: 21px;
  font-weight: 400;
`;
const Card = () => {
  return (
    <div>
      <CardLayout>
        <FlexElements>
          <CommentId>Comment Id</CommentId>
          <CommonText>3</CommonText>
        </FlexElements>

        <FlexElements>
          <Email>Email</Email>
          <CommonText>Nikita@garifield.biz</CommonText>
        </FlexElements>
        <CommentTitle>Comment</CommentTitle>
        <Content>
          quia molestiae reprehenderit quasi aspernatur aut expedita occaecati
          aliquam eveniet laudantium omnis quibusdam delectus saepe
          quiaaccusamus maiores nam est cum et ducimus etvero voluptates
          excepturi deleniti ratione
        </Content>
      </CardLayout>
      <CardLayout>
        <FlexElements>
          <CommentId>Comment Id</CommentId>
          <CommonText>3</CommonText>
        </FlexElements>

        <FlexElements>
          <Email>Email</Email>
          <CommonText>Nikita@garifield.biz</CommonText>
        </FlexElements>
        <CommentTitle>Comment</CommentTitle>
        <Content>
          quia molestiae reprehenderit quasi aspernatur aut expedita occaecati
          aliquam eveniet laudantium omnis quibusdam delectus saepe
          quiaaccusamus maiores nam est cum et ducimus etvero voluptates
          excepturi deleniti ratione
        </Content>
      </CardLayout>
    </div>
  );
};

export default Card;
