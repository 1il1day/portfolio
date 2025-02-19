import styled from 'styled-components'

type Props = {
  imgUrl: string;
  size?: number;
  onClick?: () => void;
  disabled?: boolean;
}

export default function IconImage({imgUrl, size=24, onClick, disabled=false}: Props) {
  return (
    <Icon
      className={`${disabled ? 'disabled' : ''}`}
      imgUrl={imgUrl}
      size={size}
      onClick={onClick}
    />
  )
}

const Icon = styled.div<{imgUrl: string, size: number;}>`
  width: ${(props)=>props.size}px;
  height: ${(props)=>props.size}px;
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &.disabled{
    opacity: 0.3;
    cursor: auto;
  }
`