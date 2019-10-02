import styled from 'styled-components'

export const CarouselActive = styled.div`
 .carousel-item.active{
    dispaly: ${props => props.slider === 1 ? 'block' : props.slider === 2 ? 'block' : props.slider === 3 ? 'block' : 'none'} !important;
   
}
`