import styled from 'styled-components'

type SpaceProps = {
	height?: string
	width?: string
}

const SpaceRoot = styled.div<SpaceProps>`
	box-sizing: border-box;
	min-height: ${({ height }) => height};
	max-height: ${({ height }) => height};
	min-width: ${({ width }) => width};
	max-width: ${({ width }) => width};
`

const Space = (props: SpaceProps) => {
	return <SpaceRoot height={props?.height || ''} width={props?.width || ''}></SpaceRoot>
}

export default Space
