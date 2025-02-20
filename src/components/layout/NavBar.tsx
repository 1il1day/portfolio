import styled from 'styled-components';
import { theme } from '../../theme';
import AppIcon from '../widgets/AppIcon';

type Props = {
  toggleMemo?: () => void;
  isActive?: boolean;
}

export default function NavBar({toggleMemo, isActive}: Props) {
  return (
    <NavBarContainer>
      <NavBarInner>
        <AppIcon 
          appTitle="홈"
          url="/" 
          imgUrl={`${process.env.PUBLIC_URL}/images/app_home.svg`}
        />
        <AppIcon 
          appTitle="프로젝트"
          url="/projects" 
          imgUrl={`${process.env.PUBLIC_URL}/images/app_project.svg`}
        />
        <AppIcon 
          appTitle="경력기술서"
          url="https://charm-ski-3f0.notion.site/197977f397df809cacdcd750f6b7405b?pvs=73" 
          target="_blank" 
          imgUrl={`${process.env.PUBLIC_URL}/images/app_notion.svg`}
        />
        <AppIcon 
          appTitle="프로필"
          imgUrl={`${process.env.PUBLIC_URL}/images/app_info.svg`}
          onClick={toggleMemo}
          isActive={isActive}
        />
      </NavBarInner>
    </NavBarContainer>
  )
}

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 20px;
  z-index: 5;
  transform: translateX(-50%);
  background-color: rgba(29, 29, 29, 0.3);
  border-radius: 40px;
  width: calc(100% - (20px * 2));
  max-width: 496px;
  height: 114px;
  @media (min-width: 769px) {
    bottom: 30px;
    width: calc(100% - (${theme.mobilePadding} * 2));
  }
`;
const NavBarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 300px;
  margin: auto;
  padding: 0 12px;
  @media (min-width: 421px) {
    gap: 24px;
    padding: 0 35px;
    max-width: 391px;
  }
`;