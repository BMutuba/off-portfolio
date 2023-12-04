import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css'

function Home() {
  return (

    <div className="body">
      <div className="container">
        <Head>
          <link rel="stylesheet" href="/port.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Recursive:wght,CASL,MONO@862,0.4,0.19&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Kufam&display=swap" rel="stylesheet" />
        </Head>


        <div className="header">Mutuba’s Portfolio</div>

        <div className="firstdivs">
          <div className="div">
            <div className="divtext">Professional Experience</div>
          </div>

          <div className="div2">
            <div className="div2text">Education</div>
          </div>

          <div className="about">

            <span className="aboutheader"> ABOUT</span>
            <p className="text">

              <span className="span">Mutuba is a recent Computer Science graduate, currently in an intern position at Safaricom
                PLC.
                <br />
                Mutuba is also unable to complete the about section of their portfolio because it is seemingly
                impossible to&nbsp;come up with any interesting bits and facts to fill this div they had
                already designed. And for the aesthetics of this project, which has taken way longer than was
                needed, they will not adjust the size of this section, because it would mean creating space, and
                that space would have to be filled by something else, too. Well, Mutuba is an avid fan of
                sunflowers, that they have tried to grow but failed, repeatedly. It would seem the fault will have
                to be the soil’s, because they are doing everything else right. Mutuba does not enjoy referring to
                themselves in the third person, but oh well, they are running out of words, and have opted to now
                increase the font size.
              </span>
            </p>


          </div>

        </div>

        <div>
          <div className="contact">
            <div className="name">
              Mutuba Bethlydia Neema
            </div>
            <Image className="line" src="/line.svg" alt="line" width={500} height={300} />

            <div className="profile">
              <div className="profilepic">
                <Image className="profileimg" src="/profile.svg" alt="image" width={70} height={90} />
              </div>
              <div className="info">
                FullStack Developer
                <br /><br />
                Nairobi, Kenya
              </div>
            </div>

            <div className="contactme">
              <input className="textme" placeholder="Text me here ....." />
            </div>
            <div className="sendmessage">
            <a className="send" href="mailto:mutubaneema@gmail.com" target="_blank">
              Send me a message :)
            </a>
            </div>
            

            <div className="links">
              <a href="https://github.com/Neemma" target="_blank">
                <Image className="github" src="/github.svg" alt="github" width={24} height={74} />
              </a>
              <a href="https://www.linkedin.com/in/bethlydia-neema-5550b6293/" target="_blank">
                <Image className="linkedin" src="/linkedin.svg" alt="linkedin" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/bethlydia-neema-5550b6293/" target="_blank">
                <Image className="linkedin" src="/linkedin.svg" alt="linkedin" width={24} height={24} />
              </a>
            </div>

          </div>
        </div>
        <div className="rectangle-wrapper">
          <div className="rectangle"></div>
        </div>

      </div>
    </div>

  );
}

export default Home;