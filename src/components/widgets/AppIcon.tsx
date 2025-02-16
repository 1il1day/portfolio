import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  appTitle: string;
  url?: string;
  target?: string;
  imgUrl: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function AppIcon({appTitle, url='', target='_self', imgUrl, onClick, isActive}: Props) {
  const pathname = useLocation().pathname;

  return (
    <>
      {url ?
        <Link to={url} target={target}>
          <AppIconWrap className={`${pathname === url ? "active-red" : ""}`}>
            <AppIconBox imgUrl={imgUrl} />
            <AppTitle>{appTitle}</AppTitle>
          </AppIconWrap>
        </Link>
        :
        <AppIconWrap
          className={`${isActive ? "active-green" : ""}`}
          onClick={onClick}
        >
          <AppIconBox imgUrl={imgUrl} />
          <AppTitle>{appTitle}</AppTitle>
        </AppIconWrap>
      }
    </>
  )
}

const AppIconWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  max-width:64px;
  @media (pointer: fine) {
    cursor: pointer;
  }
  &.active-red, &.active-green{
    &:after{
      content: "";
      position: absolute;
      top: -10px;
      right: -10px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    &.active-red{
      &:after{
        background-color: #FF3B30;
      }
    }
    &.active-green{
      &:after{
        background-color: #5EB652;
      }
    }
  }
`;
const AppIconBox = styled.div<{imgUrl?: string;}>`
  width: 64px;
  height: 64px;
  border-radius: 15px;
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
`;
const AppTitle = styled.h3`
  font-size: 14px;
  text-align: center;
  color: #fff;
`;