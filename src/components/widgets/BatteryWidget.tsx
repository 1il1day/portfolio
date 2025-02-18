import styled from 'styled-components';
import CircleProgressBar from './CircleProgressBar';

export default function BatteryWidget() {
  return (
    <BatteryWidgetWrap>
      <BatteryInner>
        <CircleProgressBar progress={100} iconUrl={`${process.env.PUBLIC_URL}/images/icon/icon_html.svg`}/>
        <CircleProgressBar progress={100} iconUrl={`${process.env.PUBLIC_URL}/images/icon/icon_css.svg`}/>
        <CircleProgressBar progress={75} iconUrl={`${process.env.PUBLIC_URL}/images/icon/icon_js.svg`}/>
        <CircleProgressBar progress={25} iconUrl={`${process.env.PUBLIC_URL}/images/icon/icon_react.svg`}/>
      </BatteryInner>
    </BatteryWidgetWrap>
  )
}

const BatteryWidgetWrap = styled.article`
  width: 100%;
  border-radius: 18px;
  background-color: rgba(0,0,0,0.3);
  color: #fff;
  @media (min-width: 769px) {
    max-width: 416px;
  }
`;
const BatteryInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-content: center;
  justify-items: center;
  gap: 10px;
  padding: 16px 20px;
  @media (min-width: 376px) {
    gap: 12px;
    grid-template-columns: repeat(4,1fr);
    height: calc(100% - (16px * 2));
  }
`;