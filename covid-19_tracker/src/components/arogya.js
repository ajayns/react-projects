import React from 'react'
import './css/arogya.css'
import apple from './images/apple.jpg'
import Code from './images/qr.jpg'

function arogya () {
  return (
    <div className="Arogya">
      <br />
      <h2>Scan image below to download Aarogya Setu</h2>
      <img id='scan' alt='img' src={Code} /><br />
      <a href='https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
        <img id='arogya' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
      </a>
      <a href='https://apps.apple.com/us/app/aarogyasetu/id1505825357'>
        <img id='mac' alt='Get it on App Store' src={apple} />
      </a>
    </div>
  )
}

export default arogya