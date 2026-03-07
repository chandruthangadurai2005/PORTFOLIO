function Resume() {
  return (
    <section style={styles.section}>
      <h2>Resume</h2>

      <p>
        Download my resume to learn more about my experience,
        technical skills, and projects.
      </p>

      <a href="/ChandruResume.pdf" download>
        <button style={styles.button}>Download Resume</button>
      </a>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 40px",
    textAlign: "center"
  },

  button: {
    marginTop: "20px",
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default Resume;