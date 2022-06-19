import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.png'
import profile from '../../assets/images/profile.png'
import React from 'react';
import {
    HeaderWrapper,
    LogoWrapper,
    RightWrapper,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    ProfileDetails,
    ProfileImage,
    ProfileName,
    DownArrow
} from './style'
const Header = () => {
    return (
      <HeaderWrapper>
        <LogoWrapper>
            <img src={logo} />
            <span>QRITIVE</span>
        </LogoWrapper>
        <RightWrapper>
            <SearchWrapper>
                <SearchInput type="text" id="search-input" autocomplete="off" class="search-input" placeholder="Search for a batches" />
                <SearchIcon>
                    <img src={search} />
                </SearchIcon>
            </SearchWrapper>
            <ProfileDetails>
                <ProfileImage>
                    <img src={profile} />
                </ProfileImage>
                <ProfileName>
                Hi, Fahad Basil
                <span>Annotator</span>
                </ProfileName>
                <DownArrow>^</DownArrow>
            </ProfileDetails>
        </RightWrapper>
      </HeaderWrapper>
    )
}

export default Header