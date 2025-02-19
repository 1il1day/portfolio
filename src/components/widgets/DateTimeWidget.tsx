import styled from 'styled-components'
import CurrentTime from '../common/CurrentTime';
import CurrentDate from '../common/CurrentDate';
import { useMediaQuery } from 'react-responsive';

export default function DateTimeWidget() {
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });
  return (
    <DateTimeWidgetWrap>
      <CurrentTime size={isMobile ? 60 : 80}/>
      <CurrentDate />
    </DateTimeWidgetWrap>
  )
}

const DateTimeWidgetWrap = styled.article`
  color: #fff;
`;
