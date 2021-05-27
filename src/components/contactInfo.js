import React from "react";

export default function ContactInfo() {
  return (
    <div className="contactSection">
      <div className="contactRow">
        <i className="fas fa-phone fa-7x"></i>
        <h2 className="contactInfo">PHONE</h2>
        <p className="contactDetails">(704) 609-0904</p>
      </div>
      <div className="contactRow">
        <i className="fas fa-map-marker-alt fa-7x"></i>
        <h2 className="contactInfo">ADDRESS</h2>
        <p className="contactDetails">
          5903 Laurium Road
          <br />
          Charlotte, NC
          <br />
          28226
        </p>
      </div>
      <div className="contactRow">
        <i className="fas fa-envelope fa-7x"></i>
        <h2 className="contactInfo">EMAIL</h2>
        <p className="contactDetails">wilkison.tim@gmail.com</p>
      </div>
    </div>
  );
}
