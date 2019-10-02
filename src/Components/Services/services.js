import styled from 'styled-components'




export const OurServicesSec = styled.section`
  background-color: #fdfdfd;
`

  export const ServHead = styled.h3`
    margin-top: 20px;
    width: 80%;
    margin: 15px auto;
    font-size: 20px;
  `

  export const Box = styled.div`
    &:hover > div{
      background-color: #9fc588;
    }  
  `
  
  export const BoxPrag = styled.p`
    width: 80%;
    margin: auto;
    line-height: 1.5 !important;
  `
  export const BoxImgBox = styled.div`
    width: 140px;
    height: 140px;
    margin: auto;
    background-color: #FFF;
    border-radius: 50%;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    cursor: -webkit-grab;
    @media (max-width: 991px) {
      width: 100px;
      height: 100px;
      margin-top: 20px;
    }
  `
  export const Image = styled.img`
    width: 100%;
    padding: 10px;
    height: 100%;
    object-fit: contain;
  `  