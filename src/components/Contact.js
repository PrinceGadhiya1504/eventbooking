import React from "react";
import Img from "../images/contact_banner.jpg";

const Contact = () => {
  return (
    <div className="row text-center">
      <div className="col-12">
        <img src={Img} alt="..." />
      </div>
      <div className="row mt-5">
        <div className="col-md-5 col-md-push-7 col-sm-6 col-sm-push-6">
          <input type="text" className="mt-2" placeholder="Enter Name" />
          <br />
          <input type="text" className="mt-2" placeholder="Enter Email" />
          <br />
          <input type="text" className="mt-2" placeholder="Enter Mobile" />
          <br />
          <input type="text" className="mt-2" placeholder="Enter Address" />
          <br />
          <textarea
            cols={22}
            className="mt-2"
            placeholder="Cooments"
          ></textarea>
          <br />
          <button className="ms-3 btn btn-primary">Submit</button>
          <button className="ms-3 btn btn-secondary">Cancle</button>
        </div>
        <div className="col-md-7 col-md-pull-5 col-sm-6 col-sm-pull-6">
          <h3>Amin Party Plot & Amin Caterers</h3>
          <span>A Place for Marriages, Reception and All Joyous Occasions</span>
          <p>
            Subhanpura Hi Tension Road, <br />
            Subhanpura, <br />
            Vadodara - 390021,
            <br />
            Gujarat, INDIA
          </p>
          <table>
            <tbody>
              <tr>
                <th>Contact No.: </th>
                <td>+91-9825303933</td>
              </tr>
              <tr>
                <th></th>
                <td>+91-265-2344499 / +91-265-2338879</td>
              </tr>
              <tr>
                <th>Email :</th>
                <td>something@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <section id="location" class="section location">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h3 class="section-title">Event Location</h3>
                    <address>
                        <p>Eardenia<br/> The Grand Hall<br/> House # 08, Road #52, Street<br/> Phone: +1159t3764<br/> Email: example@mail.com</p>
                    </address>
                </div>
                <div class="col-sm-9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96706.50013548559!2d-78.9870674333782!3d40.76030630398601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sbd!4v1436299406518" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Contact;
