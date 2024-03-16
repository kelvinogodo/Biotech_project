import React from 'react'
import './page.css'
import Header from '../components/Header/Header'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Asset from './Asset'
import Contact from '../components/contact/Contact'
import Faqcard from './Faqcard'
const Aboutpage = () => {
  return (
    <main className='gold-page'>
    <Header />
      <section className='about-landpage'>
        <div className="about-page-text">
          <h3>about Nigerian Institute For Biomedical Engineering</h3>
          <span className="small-thin-line"></span>
        </div>
      </section>
      <section className="about-detail-container">
        <div className="detail-text-container">
            
          <h2>
            Welcome to Nigerian Institute for Biomedical Engineering
          </h2>
          <p>The Nigerian Institute for Biomedical Engineering, NIBE is a non-governmental organisation representing the biomedical engineering and technology profession and its members in Nigeria and in international organisations, having members numbering over 5,000, from the clinical setting, academia, industry, research and training, and the government.</p>

          <p>NIBE was established in 1999 with the vision Ã¢â‚¬Å“to develop and advance the biomedical science, health and human well-being of Nigeria through modern technological approaches comparable to those obtainable in any developed country of the worldÃ¢â‚¬Â.</p>
          <p>
          NIBE advocates interdisciplinary scientific and professional biomedical engineering activities within Nigeria between the broad disciplines of biology, medicine and engineering in addition to allied subjects. In line with this, it defines biomedical engineering as: a discipline that advances knowledge in engineering, biology and medicine and improves human health through cross-disciplinary activities that integrate the engineering sciences with the biomedical science and clinical practice.</p>
          <p>
          Cogent national efforts by Nigerian Institute for Biomedical Engineering (NIBE) to evolve standard and enduring biomedical engineering education, training and practice in Nigeria commenced in the year 2000 when it started an annual biomedical engineering conference which is up and running. The 1st annual biomedical engineering conference in 2000 held in the University of Benin. Up to date, NIBE has organized annual national biomedical engineering conference each year.</p>
          <p>
          The impact of the effort of the conferences in evolving enduring biomedical engineering training in Nigeria was consolidated when NIBE started an annual professional development course in 2002 to update members and qualify them as biomedical engineering professionals. Since then, NIBE has organized annual professional development course each year.</p>
          <p>
          NIBE has published a newsletter, news@nibe since 2000; a professional journal, Nigerian Journal of Biomedical Engineering since 2001; and electronic mail news, e-nibe since 2003; and now has embraced the social media as a means of information dissemination.</p>
          <p>
          In 2003, NIBE was admitted as the 50th member of the International Federation of Medical and Biological Engineering (IFMBE) and the International Union for Physical and Engineering Sciences in Medicine (IUPESM) . The same year, it spearheaded the formation of the African Union of Biomedical Engineering and Sciences (AUBES) in Ghana while some of its members were on a Medical Equipment Training with other African biomedical engineering professionals.</p>
          <p>
          In her 10th Anniversary, during the 10th Annual General Meeting, Thursday 29th October, 2009, Abuja, Nigeria, NIBE streamlined its five functional capacities: as a professional institute; as a technical authority; as a learned society; as a qualifying body; and as a regulating body,</p>
          <p>
          In line with this, NIBE established two bodies: 1) a membership association, Association of Biomedical Engineers & Technologists of Nigeria, to take over the functions of a professional institute and of a technical authority; 2) a professional college, College of Biomedical Engineering & Technology, to take over the functions of a learned society and of a qualifying body.

          NIBE as the coordinating body retains the function of a regulating body, and, following the approval of a proposal to government for a regulating body, shall regulate the practice of biomedical engineering and technology in Nigeria.</p>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}

export default Aboutpage