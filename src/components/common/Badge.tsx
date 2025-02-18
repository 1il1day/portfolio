import styled from 'styled-components';

type Props = {
  bgColor: string;
  children: string;
}

export default function Badge({bgColor, children}: Props) {
  return (
    <BadgeWrap bgColor={bgColor}>{children}</BadgeWrap>
  )
}

const BadgeWrap = styled.span<{bgColor: string}>`
  padding: 0 10px;
  font-size: 15px;
  border-radius: 25px;
  background-color: ${(props)=>props.bgColor};
  color: #fff;
`;