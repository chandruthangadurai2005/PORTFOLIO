function About() {
  return (
    <section id="about" style={styles.section}>

      <h2>About Me</h2>

      <p>
        I am an Information Technology undergraduate at Madras Institute of
        Technology, Anna University with a CGPA of 8.40. I specialize in
        backend development using Java, Spring Boot, and REST APIs.
      </p>

      <p>
        My interests include building scalable backend systems,
        machine learning applications, and solving data structures
        and algorithms problems.
      </p>

      <div style={styles.info}>

        <div>
          <h4>Education</h4>
          <p>B.Tech Information Technology</p>
          <p>Madras Institute of Technology</p>
          <p>Anna University</p>
        </div>

        <div>
          <h4>Problem Solving</h4>
          <p>350+ DSA problems solved</p>
          <p>LeetCode & GeeksforGeeks</p>
        </div>

      </div>

    </section>
  );
}

const styles={
  section:{
    padding:"80px 40px",
    textAlign:"center"
  },

  info:{
    display:"flex",
    justifyContent:"center",
    gap:"80px",
    marginTop:"30px"
  }
};

export default About;