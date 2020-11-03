import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/men/15.jpg"
        alt="avatar"
      />
      <div>
        <p className="name">Bob Morgan</p>
        <div className="status">
          <span className="status-online" />
          <p className="status-text">online</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
