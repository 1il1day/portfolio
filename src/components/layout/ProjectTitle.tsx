import styled from 'styled-components'
import { theme } from '../../theme'
import { Link } from 'react-router-dom';

export default function ProjectsTitle() {
  return (
    <ProjectsTitleWrap>
      <ButtonWrap>
        <Link to="/">
          <Button className='btn-red'></Button>
        </Link>
        <Button className='btn-yellow'></Button>
        <Button className='btn-green'></Button>
      </ButtonWrap>
      <TitleText>프로젝트</TitleText>
    </ProjectsTitleWrap>
  )
}

const ProjectsTitleWrap = styled.div`
  position: fixed;
  top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  width: calc(100% - (${theme.mobilePadding} * 2));
  height: 54px;
  padding: 0 ${theme.mobilePadding};
  background-color: #191C1F;
  @media (min-width: 769px) {
    top: 0;
    height: 60px;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 40px;
  @media (min-width: 769px) {
    gap: 14px;
    margin-right: 208px;
  }
`;
const Button = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  @media (min-width: 769px) {
    width: 22px;
    height: 22px;
  }
  &.btn-red{
    background-color: #FE5F57;
  }
  &.btn-yellow{
    background-color: #FEBC2F;
  }
  &.btn-green{
    background-color: #28C840;
  }
`;
const TitleText = styled.h2`
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 4px 20px;
  border-radius: 50px;
  width: 100%;
  max-width: 1000px;
  text-align: center;
  background-color: #0C0F12;
  color: #fff;
  @media (min-width: 769px) {
    padding: 7px 20px;
  }
`