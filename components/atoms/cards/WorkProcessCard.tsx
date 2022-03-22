import styled from "@emotion/styled";
import { FC, ReactElement } from "react";

export interface WorkProcessCardProps {
  icon: ReactElement;
  title: string;
  className?: string;
}

export const WorkProcessCard: FC<WorkProcessCardProps> = (props) => {
  const { icon, title, className } = props;

  return (
    <Container className={className}>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 0 12px 12px 12px;
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const IconContainer = styled.div`
  height: 40px;
  text-align: center;
  padding-top: 15px;
`;

const Title = styled.div`
  text-align: center;
`;