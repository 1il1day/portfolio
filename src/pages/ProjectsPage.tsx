import styled from "styled-components";
import NavBar from "../components/layout/NavBar";
import ProjectTitle from "../components/layout/ProjectTitle";
import MobileHeader from "../components/layout/MobileHeader";
import { useMediaQuery } from "react-responsive";
import ListItem from "../components/common/ListItem";

export default function ProjectsPage () {
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });
  return (
    <PageContainer>
      {isMobile && <MobileHeader bgColor="#38393A"/>}
      <ProjectTitle />

      <PageInner>
        <InfoWrap></InfoWrap>

        {/* 프로젝트 영역 */}
        <ProjectWrap>
          <ProjectInner>
            <ListWrap>
              <ListItem/>
              <ListItem/>
              <ListItem/>
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
  padding-top: 132px;
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
  gap: 50px;
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
  @media (min-width: 769px) {
  }
`;
const ProjectWrap = styled.div`
  position: absolute;
  right: 0;
  width: 70%;
  background-color: #38393A;
`;
const ProjectInner = styled.div`
  max-width: 1150px;
  padding: 80px 60px 200px;
`