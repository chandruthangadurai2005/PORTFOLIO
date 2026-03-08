function Hero() {
  return (
    <section style={styles.hero}>

      <h1 className="hero-name">Chandru T</h1>

      <h3> Aspiring Software Engineer | Java Backend | Machine Learning</h3>

      <p>
        IT undergraduate specializing in Java,  REST APIs
        and MySQL with strong foundations in data structures and algorithms.
        Seeking internship or entry-level opportunities in Full Stack, Backend Development, and Machine Learning.
      </p>

      <div style={styles.buttons}>

        <a href="https://github.com/chandruthangadurai2005">
          <button>GitHub</button>
        </a>

        <a href="https://linkedin.com/in/chandru-t-31566228b">
          <button>LinkedIn</button>
        </a>
        <a href="https://leetcode.com/u/Chandru_T_2005/">
          <button>Leetcode</button>
        </a>

        <a href="/resume.pdf">
          <button>Resume</button>
        </a>

      </div>

    </section>
  );
}

const styles = {
  hero:{
  textAlign:"center",
  marginTop:"150px",
  padding:"40px"
},
 p:{
  color:"#b3b3b3"
},
  buttons:{
    marginTop:"20px",
    display:"flex",
    gap:"15px",
    justifyContent:"center"
  }
};

export default Hero;