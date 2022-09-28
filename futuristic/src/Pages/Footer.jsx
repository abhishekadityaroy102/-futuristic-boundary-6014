import styles from "./footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <a className={styles.a} href="https://learning.shine.com/">
            <img
              src="https://learning.shine.com/_next/image?url=%2Fimages%2Fshine-logo.png&w=1920&q=75"
              alt="logo"
              width="40%"
            />
          </a>

          <p className={styles.space}>Great career starts here!</p>
          <p>Download Shine App</p>

          <div className={styles.app}>
            <a
              className={styles.a}
              href="https://play.google.com/store/apps/details?id=com.net.shine"
            >
              <img
                src="data:image/png;base64,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"
                alt="playstore"
                width="30%"
              />
            </a>

            <a
              className={styles.a}
              href="https://apps.apple.com/in/app/shine-com-job-search/id950558510"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAANlBMVEX///+qqqqmpqajo6P29vb7+/vl5eWurq7X19fCwsK6urrLy8vp6emgoKC0tLTQ0NDw8PDf399GhrYnAAADuUlEQVR4nO1b2ZLjIAw04jKHsfn/n117svHEOPEGIVZTU+nKI+V0gc5GDMMHH3zwwY/CMgYfuUnEICYAmXlZZC9ArABWHtFLcQMnD+3uLISQho1GTLDTENPCRSOLR0yaicY4HXhYLhpwoAGOh4Y50uByFyWPNIRVHDS0L2gInmMpjGONHizZZSl3Q3gOGoM7bQdLMFVTuR2Jg8YQyu0QLDFd2YIFzBw0hlzGDh4jHVx5Kjw0ymOxTIVpLHaDqz7Oj94CPHllw2NMB8dGY5h3Hry9wj2KgQhcpeDOA0Ckme9IvjAKm9zI3kX+d2i1mDyO2SyXB6CVmZ1PyTsX8vVSDEzwQkq59s8SrBtffX+Z12Ww+8/VUgSik/KQ20GmJ99fZiFPJQBM3tD4UfzbwRfft255/L42T5d9IRHEFXUq+nYm4Oc7ExVsmf0PS31rZTROr2jcNj3NxuRgL1dtmMY+m/GwK9vv3wCHtxJl3/mHNwHo4rmsLJqJ4Fw4lvVvMxGPORpNzELgxAid6HlgvObcHLUDbHW/WeoqFJC+3lB70EC0eXMHHggaip4FZjfOggYPjYU6giF7b3rrwLV51CwEoHSqeFXSoGgEDA36UDqhToU8syC3YyG3UlxxetK7WoHUy056VyOwou5Js28EUiI6yaGtQB7LWbRvA1bVJa7S0TdT1JWYRLaUpzudVh5I4YGcB7KfpE76Ekfj9/L4IeeCS/od9gMprVL7CzaOZWoeuCpoMLQ01jyHM1Tq/CIEzlCp861A3sqQ1x/YAoReCMJlXOr6FOsx1AEEG1INdd+AHFpS9FoQqs/uoViieodAzwPlu/SGugYzhM+c52yYiNDLYwLlND007XVHqomQp/4bquV1+lR3Z1I5BECeYnYiturmg1wx/IZMFeVZl0ugG+pkiD4es6FufrpLKPtC5e0ptUh2B1Te0FF3MXdUJ94+llpfIo5dXBeqS+Y+MRVRIPaoQlCPHjqUqaiOin5DACeFkN/DIIfrye/WsUNCtOkfPz6taTcES4PYVFtm/D0ZEaxMdgPdwEFNGfYEVJeGzQ9RaEYf2k5lg04ERHAB/QgK/dBSPADJzbXqRPMsp1X5J3uH0mar7Tb6DpFtYnmbW365oL7NryYCkNycTYwmzy6dZ5O/1tC+pHvW4KX5cUJZx/BkXJX8jVIuJrYnf3YCndPRtwA3GHQJHXYjAGnDi35ocd8D07JOZHgbS0hbM2GTixdJSxnn7Yrkcr/3HyrG+EZnqJVifv3xwQe/GH8AwvMtt4ttbSEAAAAASUVORK5CYII="
                alt="apple"
                width="35%"
              />
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.hre}>
            <p>JOB SEEKERS</p>

            <a href="https://learning.shine.com/register/">Register</a>
            <a href="https://learning.shine.com/login/">Login</a>
            <a href="https://www.shine.com/job-search/">Browse Jobs</a>
            <a href="https://www.shine.com/free-job-alerts/">
              Create Free Job Alert
            </a>
            <a href="https://resume.shine.com/">Job Assistance Services</a>
            <a href="https://learning.shine.com/">Courses</a>
          </div>
          <div className={styles.hre}>
            <p>EMPLOYERS</p>
            <a href="https://recruiter.shine.com/?utm_source=shine&utm_medium=footer&utm_campaign=Candidate">
              Recruiter India
            </a>
            <a href="https://recruiter.shine.com/online-package/offer/free-job-posting/">
              Post Job
            </a>
          </div>
          <div className={styles.hre}>
            <p>PARTNER SITES</p>

            <a href="https://www.englishmate.com/">English Mate</a>
            <a href="https://www.studymateonline.com/">Study Mate</a>
            <a href="https://www.hindustantimes.com/">Hindustantimes.com</a>
            <a href="https://www.livemint.com/">Livemint.com</a>
            <a href="https://www.livehindustan.com/">Livehindustan.com</a>
            <a href="https://www.ottplay.com/?utm_source=shine&utm_medium=partner-site&utm_campaign=april-21">
              OTTplay.com
            </a>
          </div>
          <div className={styles.hre}>
            <p>CONTACT US</p>
            <a href="tel:080-4710 5555">080-4710 5555</a>
            <a href="mailto:contactus@shine.com">contactus@shine.com</a>

            <div className={styles.social}>
              <a href="https://www.linkedin.com/company/shinecom/">
                <img
                  src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent--background-PNG.png"
                  alt="li"
                  width="100%"
                />
              </a>
              <a href="https://twitter.com/Shinedotcom?lang=en">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/330px-Twitter-logo.svg.png"
                  alt="tw"
                  width="100%"
                />
              </a>
              <a href="https://www.facebook.com/shinedotcom/">
                <img
                  src="https://brandlogos.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png"
                  alt="fb"
                  width="100%"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.last}>
        <div className={styles.last1}>
          <a href="https://www.shine.com/faqs/">FAQs | </a>
          <a href="https://www.shine.com/aboutus/">About Us | </a>
          <a href="https://learning.shine.com/contact-us">Contact Us | </a>
          <a href="https://learning.shine.com/privacy-policy/">
            Privacy Policy |
          </a>
          <a href="https://www.shine.com/cookie-policy/">Cookie Policy | </a>
          <a href="https://www.shine.com/securityadvice/">Fraud Alert | </a>
          <a href="https://www.livemint.com/">Business News | </a>
          <a href="https://www.hindustantimes.com/">English News | </a>
          <a href="https://learning.shine.com/tnc/">Terms & Conditions | </a>
          <a href="https://learning.shine.com/disclaimer/">Disclaimer | </a>
          <a href="https://www.shine.com/contactus/?type=reportJobPosting/">
            Report a Job Posting
          </a>
        </div>

        <div className={styles.last2}>
          <p>© 2022 HT Media Limited</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
