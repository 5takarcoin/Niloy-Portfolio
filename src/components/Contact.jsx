import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <div className="concontainer">
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
