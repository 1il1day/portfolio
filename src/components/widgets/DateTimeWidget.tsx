import { useEffect, useState } from 'react';
import styled from 'styled-components'
import CurrentTime from '../common/CurrentTime';
import CurrentDate from '../common/CurrentDate';

type Props = {}

export default function DateTimeWidget() {

  return (
    <DateTimeWidgetWrap>
      <CurrentTime size={80}/>
      <CurrentDate />
    </DateTimeWidgetWrap>
  )
}

const DateTimeWidgetWrap = styled.article`
  color: #fff;
`;
