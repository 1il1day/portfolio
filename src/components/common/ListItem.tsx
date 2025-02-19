import styled, { css, keyframes } from 'styled-components';
import Badge from './Badge';

type Props = {
  title: string;
  period: string;
  description: string;
  contribution?: number;
  badges: string[];
  siteUrl?: string;
  projectLink?: string;
  imgUrl?: string;
}

const badgeData = [
  {
    text: "HTML",
    bgColor: "#E0640C",
  },
  {
    text: "SCSS",
    bgColor: "#F2668B",
  },
  {
    text: "JavaScript",
    bgColor: "#E59C25",
  },
  {
    text: "React",
    bgColor: "#5A85BB",
  },
  {
    text: "TypeScript",
    bgColor: "#006EBA",
  },
  {
    text: "Styled-Components",
    bgColor: "#9890E3",
  },
];

export default function ListItem({
  title, 
  period, 
  description, 
  contribution = 0, 
  badges, 
  projectLink='', 
  siteUrl='', 
  imgUrl=''
}: Props) {
  return (
    <ListItemWrap>
      <ImgWrap imgUrl={imgUrl}>
        <BadgeWrap>
          {badgeData.map((item)=>(
            badges.includes(`${item.text}`) && <Badge bgColor={item.bgColor}>{item.text}</Badge>
          ))}
        </BadgeWrap>
      </ImgWrap>
      <TextWrap>
        <div>
          <Title>{title}</Title>
          <SubTextWrap>
            <SubTextList>
              <SubTitle>기간</SubTitle>
              <SubDescription>{period}</SubDescription>
            </SubTextList>
            <SubTextList>
              <SubTitle>기여도</SubTitle>
              <ContributionWrap contribution={contribution}>
                <div></div>
              </ContributionWrap>
            </SubTextList>
            <SubTextList>
              <SubTitle>소개</SubTitle>
              <SubDescription>{description}</SubDescription>
            </SubTextList>
          </SubTextWrap>
        </div>
        <ButtonWrap>
          {siteUrl &&
            <LinkButton href={siteUrl} target="_blank">사이트 바로가기</LinkButton>
          }
          {projectLink &&
            <LinkButton href={projectLink} target="_blank">프로젝트 기술서</LinkButton>
          }
        </ButtonWrap>
      </TextWrap>
    </ListItemWrap>
  )
}
const ListItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ImgWrap = styled.div<{imgUrl: string;}>`
  position: relative;
  width: 100%;
  height: 260px;
  margin: auto;
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  background-color: #fff;
  border: 2px solid #bcbcbc;
  border-radius: 12px;
`;
const BadgeWrap = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  width: calc(100% - 32px);
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  gap: 4px;
  height: calc(100% - 260px);
  font-size: 16px;
  color: #fff;
`;
const Title = styled.h3`
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
const SubTextWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const SubTextList = styled.li`
  display: flex;
  gap: 10px;
`;
const SubTitle = styled.em`
  min-width: 46px;
  color: #999;
`;
const ContributionWrap = styled.div<{contribution: number;}>`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 10px;
  margin-top: 4px;
  border-radius: 50px;
  overflow: hidden;
  background-color: #999;
  &::after{
    content: "${(props)=>props.contribution}%";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    text-align: center;
  }
  >div{
    height: 100%;
    border-radius: 50px;
    background-color: #28C840;
    ${(props) => {
      const contributionBar = keyframes`
        0% {
          width: 0%;
        }
        100% {
          width: ${props.contribution}%;
        }
      `;
      return css`
        animation: ${contributionBar} 1s ease-in-out forwards;
      `;
    }}
  }
`;
const SubDescription = styled.strong``;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
const LinkButton = styled.a`
  padding: 8px 12px;
  border: 1px solid #fff;
  border-radius: 50px;
  color: #fff;
  transition: all .2s;
  @media (hover: hover) {
    &:hover{
      background-color: #fff;
      color: #38393A;
    }
  }
`;