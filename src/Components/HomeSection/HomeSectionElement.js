import styled from 'styled-components';

import { Link as LinkR } from 'react-router-dom';
export const HomeContainer = styled.div` 
    background:"#0c0c0c";
    display:flex;
    justify-content:flex-start;
    align-items:center;
     height:100vh;
    position:relative;
    z-index:1;
  @media screen and (min-width: 768px){
   padding:0px 30px;
  }
  @media screen and (max-width: 768px){
    padding:0px 24px;
  }
  @media screen and (max-width: 480px){
    padding:0px 5px;
  }
  @media screen and (max-width: 400px){
    padding:0px 3px;
  }
   
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
export const VideoBg = styled.video` 
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
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:flex-start;
  @media screen and (min-width: 768px){
   padding:10px 24px;
  }
  @media screen and (max-width: 768px){
    padding:10px 24px;
  }
  @media screen and (max-width: 480px){
    padding:5px 5px;
  }
  @media screen and (max-width: 400px){
    padding:5px 3px;
  }

`

export const HomeH1 = styled.h1`
  color: #fff;
  
  text-align:flex-start;
  //border:10px solid red;
  @media screen and (min-width: 768px){
    font-size: 58px;
  }
  @media screen and (max-width: 768px){
    font-size: 56px;
  }
  @media screen and (max-width: 576px){
    font-size: 52px;
  }
  @media screen and (max-width: 400px){
    font-size: 48px;
  }
  @media screen and (max-width: 360px){
    font-size: 44px;
  }
  @media screen and (max-width: 320px){
    font-size: 42px;
  }
`
export const HomeH1max = styled.h1`
  // --border-green: #00bf8f;
  color:#3dffd4;
  font-size:56px;
  @media screen and (min-width: 768px){
    font-size: 56px;
  }
  @media screen and (max-width: 768px){
    font-size: 54px;
  }
  @media screen and (max-width: 576px){
    font-size: 50px;
  }
  @media screen and (max-width: 400px){
    font-size: 42px;
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
  @media screen and (max-width: 576px){
    font-size: 22px;
  }
  @media screen and (max-width: 400px){
    font-size: 20px;
  }
`
export const SideBtnWrap = styled.div` 

    display:flex;
    justify-content:center;
    aligh-items:center;
    margin:auto 0;
`
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
  
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    &.active{
        border-bottom: 3px solid #01bf71;
    }
   &:hover{
        text-decoration:none;
        font-weight:500;
        color:#000120;
    }

`

export const HideLinkTree = styled.span`
  @media screen and (max-width: 376px){
    display:none;
  }
`

export const ShowLinkTree = styled.span`
  @media screen and (max-height: 460px){
    display:none;
  }
`
export const HideFacebook = styled.span`
  @media screen and (max-width: 300px){
    display:none;
  }
`