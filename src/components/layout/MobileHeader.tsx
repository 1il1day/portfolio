import styled from 'styled-components'
import IconImage from '../common/IconImage'
import { theme } from '../../theme'
import CurrentTime from '../common/CurrentTime'

type Props = {
  bgColor?: string;
}

export default function MobileHeader({bgColor = 'transparent'}: Props) {
  return (
    <MobileHeaderWrap bgColor={bgColor}>
      <CurrentTime />
      <IconWrap>
        <IconImage imgUrl="portfolio/images/icon/icon_network.svg"/>
        <IconImage imgUrl="portfolio/images/icon/icon_wifi.svg"/>
        <IconImage imgUrl="portfolio/images/icon/icon_battery.svg"/>
      </IconWrap>
    </MobileHeaderWrap>
  )
}

const MobileHeaderWrap = styled.div<{bgColor: string;}>`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  width: calc(100% - (${theme.mobilePadding} * 2));
  height: 54px;
  padding: 0 ${theme.mobilePadding};
  background-color: ${(props)=>props.bgColor};
`;
const IconWrap = styled.div`
  display: flex;
  gap: 6px;
`