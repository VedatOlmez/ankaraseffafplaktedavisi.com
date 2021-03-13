import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="hakkinda">
        <Container>
          <Grid>
            <div>
              <h2>Şeffaf Plak Tedavisi</h2>
              <p>
              Ankara’da şeffaf plak tedavisi için Uzm. Dt. Zeynep Karakoç’tan muayene için randevu alarak şeffaf plak tedaviniz hakkında detaylı bilgi alabilirsiniz.
              </p>
              <br></br>
              <p>
              <p> <b>Randevu İçin</b> <a href="tel://+903124311041">0(312) 431 10 41</a>  
              <br></br>
              <a href="tel://+905423428922"> 0(542) 342 89 22</a>
              </p>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Zeynep Karakoç Kimdir?</h2>
              <p>
              Ankara’da Ortodonti Uzmanı olarak Kızılay’da bulunan kliniğimde hasta kabul ediyorum. Şeffaf plak konusunda tedavi olmak isteyenler için şeffaf plak tedavisi yapıyorum. Ankara’da şeffaf plak ve şeffaf plak tedavisi hakkında bilgi almak için ya da muayene olarak tedaviniz hakkında detayalı görüşmek için randevu alabilirsiniz.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
