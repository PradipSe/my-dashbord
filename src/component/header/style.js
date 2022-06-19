import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    background: #FFF;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FAFAFA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
    position: sticky;
    top: 0;
    left: 0;
`

export const LogoWrapper = styled.div`
    width: 84px;
    height: 48px;
    display: flex;
    align-items: center;
    span {
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        color: #000000;
        padding-left: 4px;
    }
`
export const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 30px;
`

export const SearchWrapper = styled.div`
    width: 450px;
    display: flex;
    align-items: center;
`

export const SearchInput = styled.input`
    width: 350px;
    align-items: center;
    border: none;
    border-radius: 2px;
    height: 35px;
    line-height: 18px;
    background: #F5F5F5;
    border-radius: 2px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #535353;
    padding:4px 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
`

export const SearchIcon = styled.span`
    background: #5F23CB;
    border-radius: 0px 2px 2px 0px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProfileDetails = styled.div`
    display: flex;
    align-items: center;
`

export const ProfileImage = styled.div`
    width: 25px;
    height: 25px;
    background: #5F23CB;
    border-radius: 50%;
`

export const ProfileName = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #4D4D4D;
    padding-left: 8px;
    span {
        color: #5F23CB;
        display: block;
    }
`

export const DownArrow = styled.span`
    transform: rotate(180deg);
    padding-right: 8px;
`
