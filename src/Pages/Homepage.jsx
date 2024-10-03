import React from 'react'
import MainHeader from '../Components/MainHeader'
import MainAbout from '../Components/MainAbout';
import MainCompanies from '../Components/MainCompanies';
import MainMore from '../Components/MainMore';
import MainPictures from '../Components/MainPictures';
import MainActs from '../Components/MainActs';
import MainContact from '../Components/MainContact';
import MainFooter from '../Components/MainFooter'




const Homepage = () => {
  return (
    <>
      <MainHeader />
      <MainAbout />
      <MainCompanies />
      <MainMore />
      <MainPictures />
      <MainActs />
      <MainContact />
      <MainFooter />
    </>
  );
}

export default Homepage