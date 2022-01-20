import Link from "next/link";
import { TWITTER_URL, INSTAGRAM_URL } from '../components/Constants';

var imageValueMonth = new Date();
var todaysDate = imageValueMonth.getFullYear();

const Footer = () => {
  return (
    <>
      <h1>Footer Copyright © 2014 - {todaysDate}&nbsp;</h1>
      {TWITTER_URL}
      <br />
      <br />
      {INSTAGRAM_URL}
    </> 
  );
};

export default Footer;
