const Contact = () => {
  return (
    <div>
      <h1 className="page-title">Contact</h1>
      <div className="page-content">
        <p>You can reach out to me via the following platforms:</p>
        <ul>
          <li>Email: <a href="mailto:yourname@example.com">yourname@example.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">linkedin.com/in/your-profile</a></li>
          <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a></li>
        </ul>
        <p>Looking forward to collaborating or chatting about new opportunities!</p>
      </div>
    </div>
  );
};

export default Contact;
