import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
export const Nav = styled.nav`
    background: #000;
    height: 80px;
     margin-top:-80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index:10;
    @media screen and  (max-width:960px){
        transition:0.8s all ease;
     }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content:space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width:100vw;
`

export const NavLogo = styled(LinkR)`
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size: 1rem;
    display:flex;
    // color:red;
    align-items:center;
    margin-left:10px;
    // font-weight:bold;
    // text-decoration:none;
    &:hover{
        text-decoration:none;
        color:#01bf71;
    }
`
export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width:1000px){
        display:block;
        color:#fff;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.ul`
    display : flex;
    align-items:center;
    list-style:none;
    text-align:center;
    cursor: pointer;
    margin-right:-22px;
    @media screen and (max-width:1000px){
        display:none;
    }

`
export const NavItem = styled.li`
    height: 80px;
    display:flex;
    align-items: center;
    justify-content:center;

`
export const NavLinks = styled(LinkS)`
    color: #fff; 
    //  margin-top: 20px;
    display:flex;
    align-items: center;
    justify-content:center;
    text-decoration:none;
    padding: 0 1rem;
    font-weight:700;
    height: 100%;
    cursor:pointer;
    &:hover{
        text-decoration:none;
        color:#000120;
    }
    &.active{
        border-bottom:3px solid #01bf71;
    }
`
export const NavBtn = styled.nav`
    display:flex;
    margin: auto 0;
    cursor:pointer;
    margin-right:10px;
    display:flex;
    align-items: center;
    justify-content:center;
   
    align-items:center;
    justify-content:center;
    @media screen and (max-width:1000px){
        display:none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 8px 22px;
    color: #010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    &:hover{
       transition:all 0.2s ease-in-out;
       background:#fff;
        border-bottom: 3px solid #01bf71;
    }

`

export const SocialMenu = styled.ul`
    display : flex;
    align-self:flex-end;
    list-style:none;
    text-align:center;
    justify-content:space-between;
    margin: auto 0;
    margin-right:10px;
    @media screen and (max-width:968px){
        display:none;
    }

`