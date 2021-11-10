import { Link } from "gatsby";
import React from "react";

import Logo from "./pic.jpg";

const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="cover-author-image">
            <Link to="/">
              <img src={Logo} alt={siteMetadata.author} />
            </Link>
          </div>
          <div className="author-name">{siteMetadata.author}</div>
          <div>
            <Link to="/">
              <svg viewBox="0 0 160 160" width="160" height="160">
                <circle cx="80" cy="80" r="50" fill="#33c4a5" />
                <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                  <path
                    d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                    fill="#ffe169"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="360 0 0"
                      to="0 0 0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
                <path
                  d="M 50,0 A 50,50 0 0,0 -50,0Z"
                  transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)"
                  fill="#33c4a5"
                />
              </svg>
            </Link>
          </div>
          <p>{siteMetadata.description}</p>
          <div>
            <Link to="/">
              <button className="button">Blogs</button>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <button className="button">Qualification</button>
            </Link>
          </div>
          <div>
            <Link to="/bio">
              <button className="button">Biography</button>
            </Link>
          </div>
          <div>
            <Link to="/tags">
              <button className="button">Blog Tags</button>
            </Link>
          </div>
        </div>
      </header>
      <footer>
        <section className="contact">
          <h3 className="contact-title">Contact me</h3>
          <h3>mattaltenburg@gmail.com</h3>
          <ul>
            {siteMetadata.social.twitter && (
              <li>
                <a
                  href={`https://twitter.com/${siteMetadata.social.twitter}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.facebook && (
              <li>
                <a
                  href={`https://facebook.com/${siteMetadata.social.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.github && (
              <li>
                <a
                  href={`https://github.com/${siteMetadata.social.github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.linkedin && (
              <li>
                <a
                  href={`https://linkedin.com/in/${siteMetadata.social.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </section>
        <div className="copyright">
          <p>
            {new Date().getFullYear()} &copy; {siteMetadata.author}
          </p>
        </div>
      </footer>
    </aside>
  </>
);

export default Sidebar;
