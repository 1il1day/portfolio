import styled from 'styled-components';
import CurrentTime from '../common/CurrentTime';
import CurrentDate from '../common/CurrentDate';

type Props = {
  appTitle: string;
  type: 'date' | 'time';
}

export default function TodayAppIcon({appTitle, type}: Props) {
  return (
    <TodayAppIconWrap>
      <TodayAppIconBox>
        {type == 'date' &&
          <CurrentDate type='app'/>
        }
        {type == 'time' &&
          <CurrentTime type='app' size={30} color='#222'/>
        }
      </TodayAppIconBox>
      <AppTitle>{appTitle}</AppTitle>
    </TodayAppIconWrap>
  )
}

const TodayAppIconWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  max-width:64px;
  gap: 5px;
  @media (pointer: fine) {
    cursor: pointer;
  }
`;
const TodayAppIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 15px;
  background-color: #fff;
  line-height: 0.8;
  text-align: center;
`;
const AppTitle = styled.h3`
  font-size: 14px;
  text-align: center;
  color: #fff;
`;