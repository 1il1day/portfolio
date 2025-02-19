import styled from "styled-components";
import NavBar from "../components/layout/NavBar";
import ProjectTitle from "../components/layout/ProjectTitle";
import MobileHeader from "../components/layout/MobileHeader";
import { useMediaQuery } from "react-responsive";
import ListItem from "../components/common/ListItem";

const projectsData = [
  {
    title: "Metanex",
    period: "2024.08 - 2024.08 (10일 소요)" ,
    contribution: 100,
    description: "기업을 소개하는 목적으로 제작된 반응형 웹 프로젝트 입니다. 스크롤에 따라 스타일이 변경되는 인터랙션을 개발하였습니다. 약 10일의 개발 기간이 소요되었습니다.",
    badges: ["React", "TypeScript", "Styled-Components"],
    siteUrl:"https://www.metanex.com/",
    projectLink:"https://charm-ski-3f0.notion.site/197977f397df81e8b74dfe35d2150bd4",
    imgUrl:`${process.env.PUBLIC_URL}/images/projects/metanex.png`
  },
  {
    title: "SAMYANG VALVE",
    period: "2024.07 - 2024.08 (10일 소요)",
    contribution: 100,
    description: "기업과 제품을 소개하기 위해 제작된 반응형 웹 프로젝트 입니다. 동일한 스타일의 페이지를 관리하기 위해 컴포넌트를 이용하였고, 기업의 카탈로그를 다운로드 받을 수 있는 버튼이 있습니다. 약 10일의 개발 기간이 소요되었습니다." ,
    badges: ["React", "TypeScript", "Styled-Components"],
    siteUrl: "https://en.samyangvalve.com/",
    projectLink: "https://charm-ski-3f0.notion.site/197977f397df81108453c9511ec1be30",
    imgUrl: `${process.env.PUBLIC_URL}/images/projects/samyangvalve.png`
  },
  {
    title:"한솔데코",
    period:"2023.05 - 2023.05 (11일 소요)",
    contribution:100,
    description:"기업을 소개할 수 있도록 제작된 반응형 웹 프로젝트입니다. 채용공고 링크를 관리할 수 있도록 관리자 페이지와 연동하였습니다. 약 11일의 개발 기간이 소요되었습니다.",
    badges:["HTML", "SCSS", "JavaScript"],
    siteUrl:"https://www.hansoldeco.co.kr/",
    projectLink:"https://charm-ski-3f0.notion.site/197977f397df8116b73cd98d8af521d4",
    imgUrl:`${process.env.PUBLIC_URL}/images/projects/hansoldeco.png`
  },
  {
    title: "영화 ‘밀수’ 홍보 페이지",
    period: "2023.05 - 2023.07",
    contribution: 80,
    description: "영화 ‘밀수’ 홍보를 위한 프로모션 반응형 웹입니다. 페이지별로 카운트 인터랙션, 타이핑 인터랙션, 애니메이션을 퍼블리싱하고 Juicer API를 연동하여 SNS 게시물을 불러오는 게시판을 퍼블리싱 하였습니다.",
    badges: ["HTML", "SCSS", "JavaScript"],
    projectLink: "https://charm-ski-3f0.notion.site/197977f397df811fb243e2b3a847db3f",
    imgUrl: `${process.env.PUBLIC_URL}/images/projects/smuggler.png`
  },
];

export default function ProjectsPage () {
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });
  return (
    <PageContainer>
      {isMobile && <MobileHeader bgColor="#38393A"/>}
      <ProjectTitle />

      <PageInner>
        {!isMobile && <InfoWrap></InfoWrap>}

        {/* 프로젝트 영역 */}
        <ProjectWrap>
          <ProjectInner>
            <ListWrap>
              {projectsData.map((item, index)=>(
                <ListItem 
                  key={index}
                  title={item.title}
                  period={item.period}
                  contribution={item.contribution}
                  description={item.description}
                  badges={item.badges} 
                  siteUrl={item.siteUrl}
                  projectLink={item.projectLink}
                  imgUrl={item.imgUrl}
                />
              ))}
            </ListWrap>
          </ProjectInner>
        </ProjectWrap>
      </PageInner>
      
      {/* 하단바 */}
      <NavBar />
    </PageContainer>
  );
}
const PageContainer = styled.div`
  position: relative;
  display: block;
  background-color: #38393A;
  padding-top: 96px;
  @media (min-width: 769px) {
    padding-top: 78px;
  }
`;
const PageInner = styled.div`
  position: relative;
  z-index: 1;
  height: calc(100vh - 78px);
  font-size: 50px;
`;
const ListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap: 80px 40px;
  @media (min-width: 1201px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (min-width: 1601px) {
    grid-template-columns: repeat(3,1fr);
  }
`;
const InfoWrap = styled.div`
  position: fixed;
  left: 0;
  background-color: #2F2F2F;
  height: 100%;
  width: 30%;
  overflow-y: hidden;
`;
const ProjectWrap = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  background-color: #38393A;
  @media (min-width: 769px) {
    width: 70%;
  }
`;
const ProjectInner = styled.div`
  max-width: 1150px;
  padding: 40px 25px 180px;
  @media (min-width: 769px) {
    padding: 80px 60px 200px;
  }
`