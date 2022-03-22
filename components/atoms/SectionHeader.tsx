import styled from "@emotion/styled";
import { FC, ReactElement } from "react";
import { above } from "styles/viewPorts";

interface SectionHeaderProps {
  icon: ReactElement;
  title: string;
  className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = (props) => {
  const { icon, title, className } = props;

  return (
    <Container className={className}>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;

  & > svg {
    fill: #1e282e;
  }

  @media ${above.Small} {
    width: 30px;
    height: 30px;
  }

  @media ${above.Medium} {
    width: 40px;
    height: 40px;
  }

  @media ${above.Large} {
    width: 50px;
    height: 50px;
  }
`;

const Title = styled.div`
  color: #1e282e;
  font-weight: bold;
  padding: 5px 0;
  font-size: 32px;

  @media ${above.Small} {
    font-size: 40px;
    padding: 8px 0;
  }

  @media ${above.Medium} {
    font-size: 42px;
    padding: 9px 0;
  }

  @media ${above.Large} {
    font-size: 44px;
    padding: 10px 0;
  }
`;
