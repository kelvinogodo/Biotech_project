import React from 'react'
import './about.css'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate()
  return (
    <div className='about-section' id='about'>
        <div className="about-wrapper">
        <div className="why-choose-us-text-container about-text">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>about us</h2>
            </div>
            <h1 data-aos="fade-up">Nigerian Institute for Biomedical Engineering</h1>
            <p data-aos="fade-up">
                The Nigerian Institute for Biomedical Engineering, NIBE is a non-governmental organisation representing the biomedical engineering and technology profession and its members in Nigeria and in international organisations, having members numbering over 5,000, from the clinical setting, academia, industry, research and training, and the government.<br/> NIBE was established in 1999 with the vision Ã¢â‚¬Å“to develop and advance the biomedical science, health and human well-being of Nigeria through modern technological approaches comparable to those obtainable in any developed country of the worldÃ¢â‚¬Â.
            </p>
            <button className='launch-btn launch' data-aos="fade-up" onClick={()=>{
                navigate('/about')
            }}>
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                <span>read more</span>
            </button>
        </div>
        <div className="about-img-container">
            <img src="/ifmbelogo.png" data-aos="fade-up" className='about-img'/>
        </div>
        </div>
    </div>
  )
}

export default About