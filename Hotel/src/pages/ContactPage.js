import CommonHeading from "../components/common/CommonHeading";
import Heading from "../components/common/Heading";
import React from "react";
import Register from "./Register";
import { contact } from "../components/data/Data";

export default function Contact() {
  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />

      <div class="container-xxl py-5">
        <div class="container">
          <CommonHeading
            heading="Contact Us"
            subtitle="Contact "
            title="For Any Query"
          />
          <div class="row g-4">
            <div class="col-12">
              <div class="row gy-4">
                {contact.map((item, index) => (
                  <div class="col-md-4">
                    <h6 class="section-title text-start text-primary text-uppercase">
                      {item.title}
                    </h6>
                    <p>
                      {item.icon}
                      {item.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
           
            <div class="col-md-6">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <Register></Register>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
