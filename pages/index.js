import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import TeachStacks from "../components/TeachStacks";
import GetInTouch from "../components/GetInTouch";
import Works from "../components/Works";
import styles from "../styles/Home.module.css";

import { deepPurple, pink, purple } from "@mui/material/colors";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <AboutMe />
      <TeachStacks />
      <Works />
      <GetInTouch />
    </Layout>
  );
}
