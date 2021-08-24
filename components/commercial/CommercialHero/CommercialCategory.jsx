import { Typography } from '@material-ui/core';
import React from 'react';
import AllCategory from '../AllCategory/AllCategory';
import MultiCard from '../MultiCard/MultiCard';
import PlayerSection from '../PlayerSection/PlayerSection'
import MultiCardSecond from '../MultiCardSecond/MultiCardSecond'
import AllProducts from '../AllProducts/AllProducts'
import CardBeforeFooter from '../CardBeforeFooter/CardBeforeFooter'

const CommercialCategory = () => {
  return (
    <>
    <br/><br/><br/>
   <AllCategory/>
   <MultiCard/>
   <PlayerSection/>
   <MultiCardSecond/>
   <AllProducts/>
   <CardBeforeFooter/>
   </>
  );
};

export default CommercialCategory;
