import styled from 'styled-components';
export const HomeContainer = styled.div` 
    background:"#0c0c0c";
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:0 30px;
    height:100vh;
    position:relative;
    z-index:1;
`
export const HomeBg = styled.div` 
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    overflow:hidden;
    width:100%;
    height:100%;
` 
export const VideoBg=styled.video` 
  width:100%;
  height:100%;
 -o-object-fit:cover;
  object-fit:cover;
  background:#232a34;
  
  
`
export const HomeContent = styled.div`
   z-index:3;
   max-width:1200px;
   position:absolute;
   padding:8px 24px;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:flex-start;
  @media screen and (max-width: 768px){
    padding:10px 24px;
  }
  @media screen and (min-width: 768px){
   padding:5px 10px;
  }
  @media screen and (max-width: 480px){
    padding:2px 0px;
  }

`

export const HomeH1=styled.h1`
  color: #fff;
  font-size:58px;
  text-align:flex-start;

  @media screen and (max-width: 768px){
    font-size: 56px;
  }
  @media screen and (min-width: 768px){
    font-size: 52px;
  }
`
export const HomeH1max = styled.h1`
  color:#01bf71;
  font-size:56px;
   @media screen and (max-width: 768px){
    font-size: 54px;
  }
  @media screen and (min-width: 768px){
    font-size: 50px;
  }
  
`
export const HomeBtnWrap = styled.div`
  margin-top:32px;
  display:flex;
  flex-direction:column;
  align-items:center;
  
`
export const HomeP = styled.p`
  color: #fff;
  font-size:28px;
  text-align:center;

  @media screen and (max-width: 768px){
    font-size: 26px;
  }
  @media screen and (max-width: 768px){
    font-size: 22px;
  }
`