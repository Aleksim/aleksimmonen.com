import * as React from "react"
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import Seo from "../components/seo"
import Timeline from '../components/timeline';



const timelineData = [
  { date: 'May 2022 - present', description: 'Performance marketing manager at Rentle', details: 'At Rentle, I manage multiple ad platforms, create animations, do the occasional scrapers/crawlers and other web development... Basically all things growth and some hacking.'},
  { date: 'Aug 2021 - Feb 2021', description: 'Head of Ecommerce at Lumise', details:'At Lumise, my job was split between the ecommerce team management and hands on doing SEO, CRO, automation, data engineering etc.' },
  { date: 'Sep 2020 - Aug 2021', description: 'Founder at PointNG & Superlines.io', details:'PointNG was a privacy first geolocation innovation to which we got 70K€ innovation grant from Business Finland. After some twists and turns, we ended up getting paying customers for another product: Superlines - a generative ai service. '},
  { date: 'Apr 2020 - Sep 2020', description: 'Head of Growth at Musopia', details:'At Musopia, I focused on paid acquisition, SEO and hacking our partner channels (JustinGuitar.com) to improve our customer acquisition. Also, organised the growth team and set the growth strategy. My stay at Musopia was sadly a short one because we got investment money to PointNG.' },
  { date: 'Apr 2016 - Nov 2019', description: 'Martech & growth consultant at Avaus and Founder at Selaamo', details:'At Avaus, I consulted the biggest B2C companies in the Nordics about marketing automation, growth hacking, growth team management, web analytics and many other things. I worked on strategy, growth hacking and also implemented a marketing automation system to a client. While at Avaus, I also founded Selaamo. ' },
  { date: 'Apr 2012 - Oct 2014', description: 'Founder at Whispr & Intern at Darlings', details:'I was part of a team that launched Darlings - a video agency with directors in Helsinki, London and Los Angeles. At the same time, I was running "Whispr": an anonymous location based chat. Exactly like Jodel but before Jodel.' }


];


const AboutPage = ({ location }) => {
  return (
    <Layout location={location} >
      <Navigation />
      <div>
        <h1>About Me</h1>
        <p>
            I am a growth marketer with 9+ years of experience growing companies of all sizes and stages.</p>
        <p>
            I navigate between strategy, paid acquisition, SEO, animation, coding, data analysis, and marketing automation. My focus is all about the <span className="cost-span">pursuit of impact and cost effectiveness in business growth</span> through maximum leverage of technology and innovation.
        </p>
        <h2 className="experience-heading">Experience</h2>
        <Timeline items={timelineData}/>
      </div>
    </Layout>
  )
}

export default AboutPage

/**
 * Head export to define metadata for the page
 */
export const Head = () => <Seo title="About Me" />
