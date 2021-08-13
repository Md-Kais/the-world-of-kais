import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.div`
   position:fixed;
   z-index:999;
   width: 100%;
   height:100vh;
   background: #0d0d0d;
   display:grid;
   align-items:center;
   top: 0px;
   left: 0;
   transition: 0.3s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
   top: ${({ isOpen }) => (isOpen ? '0px' : '100%')};
//    background-color:${({ isOpen }) => (isOpen ? 'red' : 'black')}; 
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
    &:hover{
        text-decoration: none;
        color:aliceblue;
        transition: 0.2s ease-in-out;
        z-index:1;
    }
`
export const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right: 1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline:none;
`
export const SidebarWrapper = styled.div` 
    color: #fff;
`
export const SidebarMenu = styled.ul` 
 display:grid;
 grid-template-columns: 1fr;
 grid-template-rows:repeat(6,80px);
 text-align:center;
 text-decoration: none;
 @media screen and (max-width:480px){
     grid-template-rows: repeat(6,60px);
 }`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor: pointer;
    // &:hover{
    //     text-decoration:none;
    //     color:#000120;
    // }

    &:hover{
        text-decoration: none;
        color:aliceblue;
        transition: 0.2s ease-in-out;
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
    // &.active{
    //     border-bottom: 3px solid #01bf71;
    // }
    &:hover{
        text-decoration:none;
        font-weight:500;
        color:#000120;
    }

`

export const HideLinkTree = styled.span`
  @media screen and (max-width: 400px){
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
  @media scren and (min-width: 301px){
      display:none;
  }
`