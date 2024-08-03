import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import './cbet.css'
const Cbet = () => {
  return (
      <main className='gold-page'>
    <Header />
      <section className="about-detail-container">
        <div className="detail-text-container">
            
          <h2>
            Welcome to Nigerian Institute for Biomedical Engineering
          </h2>
          <p>
            The College of Biomedical Engineering and Technology was established in 2009 by the General Assembly of the Nigerian Institute for Biomedical Engineering (NIBE) at its 10th Annual General Meeting to take over NIBE's learned society and qualifying body's functions. <br />

            Therefore, the Fellows admitted for NIBE (FNIBE) on the 6th of June, 2009 and subsequently are automatically Fellows of the College of Biomedical Engineering and Technology (FCBET) from the date of commencement of the College (29th October, 2009). <br />

            The College of Biomedical Engineering and Technology has its national office at the Department of Biomedical Technology, Federal University of Technology, Owerri, Nigeria.
          </p>
          <h2>Misson Statement</h2>
          <p>The mission of the College of Biomedical Engineering and Technology is to produce middle and high level calibre of manpower to organize the biomedical engineering and technologies in our health, biomedical and allied institutions and industries and to provide academics and resource persons for our biomedical engineering and technology as well as allied sciences' departments, schools and colleges.  </p>
          <h2>Functions of the College</h2>
          <p>The functions for which the College of Biomedical Engineering and Technology was established include the following:</p>
            <p>1. To conduct professional training, examinations and certifications for practising professionals and students, who are candidates in biomedical engineering and allied departments, faculties, schools and colleges.</p>
            <p>2. To assist in updating to global standard, the undergraduate and professional postgraduate programmes for higher educational institutions.</p>
            <p>3. To engage in curriculum development, research and academic publications.</p>
            <p>4. To organize clinical engineering internships / biomedical engineering training overseas for qualified candidates.</p>
            <p>5. To design and evolve suitable methods, instruments and materials aimed at pursuing the technological advancement of biomedical engineering and science research and practice.</p>
            <p>6. To assist in setting standards for the professional practice of biomedical engineering in Nigeria.</p>
            <p>7. To generally develop and promote the study and practice of biomedical engineering and allied sciences.</p>
            <p>8. To disseminate professional information to enable members update their knowledge in biomedical engineering and allied sciences. </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Cbet