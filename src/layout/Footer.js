import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faGithubAlt,
   faGoogle,
   faFacebook,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons'

library.add(faGithubAlt, faGoogle, faFacebook, faTwitter)
export default () => {
   const footerInfo = ['Anasayfa', 'Kullanıcı Sözleşmesi', 'Gizlilik']
   const socialIcons = [faGithubAlt, faGoogle, faFacebook, faTwitter]
   return (
      <Container fluid as="footer" className="bg-dark p-2">
         <Container>
            <Row>
               <Col as="ul" className="col-12 col-md-8 text-white left">
                  {footerInfo.map(info => (
                     <li key={info}> {info} </li>
                  ))}
               </Col>
               <Col as="ul" className="col-12 col-md-4 text-white right">
                  {socialIcons.map((icon, index) => (
                     <FontAwesomeIcon
                        icon={icon}
                        key={`icon${index}`}
                        size="lg"
                        className="icon"
                     />
                  ))}
               </Col>
            </Row>
         </Container>
      </Container>
   )
}
