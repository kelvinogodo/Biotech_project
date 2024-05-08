import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/Header/Header'
import Contact from '../components/contact/Contact'
const Epoch = () => {
  return (<>
    <Header />
    <div className="policy-container">
        <div className="policy-text-container">
          <h2>Fellows of the Nigerian Institute for Biomedical Engineering</h2>
          <p>
             Picture of some first set of Fellows of NIBE:(from left) Mr G.C. Josephs, Mr M.A. Galadima, Dr K.I.Nkuma-Udah, Mr S.G. Liman, Dr B.A.Adegoye, Mrs E.E.C.Agoha, Prince M.O.Mbah and Prince B.O.Adele
                Fellows of the Nigerian Institute for Biomedical Engineering, who are also Fellows of the National College of Biomedical Engineering and Technology are distinguished professional personalities who have the highest professional and membership honours of the Institute and the College bestowed on them for various academic and professional feats they have been able to achieve in their careers. Click here to view the comprehensive list of the Fellows of NIBE.

                The Fellows of the Institute are also members of the Guild of Fellows of the Institute and of the College and are charged with the responsibilities of constituting the Council of the Institute and of the College.

                The mission of the Guild of Fellows of the Institute is to serve as ambassadors to enhance NIBE's/CBET's technical image both internally and externally through activities such as transferring and sharing technical knowledge or experience to the scientific community; mentoring younger and budding professionals to increase their awareness of NIBE/CBET activities; and supporting NIBE/CBET Council in conducting professional and technical activities.
            </p>
            </div>
      </div>
      <Contact />
      <Footer />
      </>
  )
}

export default Epoch