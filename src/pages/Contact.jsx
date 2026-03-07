function Contact() {
  return (
   <section id="contact" style={styles.section}>
      <h2>Contact</h2>

      <p>If you'd like to connect or discuss opportunities.</p>

      <div style={styles.links}>

        <p>Email: chandrupadhur@gmail.com</p>

        

        <a href="https://linkedin.com/in/chandru-t-31566228b">
          LinkedIn
        </a>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 40px",
    textAlign: "center"
  },

  links: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
    justifyContent: "center"
  }
};

export default Contact;