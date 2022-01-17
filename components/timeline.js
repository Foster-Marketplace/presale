import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { makeStyles } from "@material-ui/core/styles";

import Image from 'next/image'
import Bunny8 from '../public/8.png';
import Bunny9 from '../public/9.png';
import Bunny10 from '../public/10.png';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';

const useStyles = makeStyles((theme) => ({
  titleFontStyle: {
    fontSize: '24px',
    lineHeight: '31.2px',
    fontWeight: '600'
  },
}));

const TimeLine = () => {
  const classes = useStyles();
  return (
    <>
      <VerticalTimeline className="vertical-timeline-content vertical-timeline-two">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            backgroundImage: 'url(circle1.png)', color: '#000', width: 100, height: 100, border: 'none', backgroundSize: '100% 100%'
          }}
          style={{ marginTop: "120px" }}
        >
          <p className="vertical-timeline-title">Launch<br /><label style={{
            color: "#536aba"
          }}>Roadmap</label></p>
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1', marginTop: '10px' }}>
            <span className={classes.titleFontStyle}>25% work</span><br />
            <label style={{ paddingTop: '25px', display: 'block', color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>We will be working closely with Solana NFT marketplaces to get Bunny Freaks listed and verified. Additionally we’ll get Bunny Freaks on Solana’s main rarity website.</label>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-elemet--work-second"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            background: 'linear-gradient(260.39deg,#00a79d,#8c41ce 96.71%)', color: '#000', width: 50, height: 50, border: 'none'
          }}
        >
          <div className="vertical-timeline-image-one">
            <Image src={Bunny8} loading="lazy" alt="Bunny8" />
          </div>
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1' }}>
            <span className={classes.titleFontStyle}>50% 3 mysterious Bunny Freaks appear</span><br />
            <label style={{ paddingTop: '25px', display: 'block', color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>new Bunny Freaks enter the metaverse. 2 of them find a home with TOP2 Discord inviters and 1 of them with a lucky community member.</label>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          style={{ marginTop: '-80px' }}
          iconStyle={{
            background: 'linear-gradient(260.39deg,#00a79d,#8c41ce 96.71%)', color: '#000', width: 50, height: 50, border: 'none'
          }}
        >
          <div className="vertical-timeline-image-two">
            <Image src={Bunny9} loading="lazy" alt="Bunny9" />
          </div>
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1' }}>
            <span className={classes.titleFontStyle}>100% Gratefulness</span><br />
            <label style={{ paddingTop: '25px', display: 'block', color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>10 Bunny Freaks warriors who have spread our ethos to the most amount of people and got them to join our community are awrded with 50 SOL each. 10 random Bunny Freaks community members will receive 25 SOL each. (Winners are chosen on 26th of September)</label>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            backgroundImage: 'url(circle1.png)', color: '#000', width: 100, height: 100, border: 'none', backgroundSize: '100% 100%'
          }}
        >
          <p style={{ fontSize: '72px', marginTop: '-170px', fontWeight: 'bold' }}>Development<br /><span style={{
            fontSize: 72,
            color: "#536aba"
          }}>Roadmap</span></p>
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1', float: 'left' }}>
            <span className={classes.titleFontStyle}>2021 Q4</span><br />
            <div style={{ color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>
              <p>Bunny Freaks will be listed on main Solana NFT marketplaces and added to HowRare.is.</p>
              <p>Animation studios, screenwriters, voice actors and other relevant talent will be carefully screened and selected.</p>
              <p>Creation of our very own community voting mechanism. Consulting with animation studios to form a list of important questions that will drive the creation process for the whole project.</p>
              <p>Weekly voting sessions until we have collected together and processed all the answers by the community.</p>
              <p>Finalizing the short film full documentation. Followed by the execution by our talented team members and partners.</p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            background: 'linear-gradient(260.39deg,#00a79d,#8c41ce 96.71%)', color: '#000', width: 50, height: 50, border: 'none'
          }}
          style={{ marginTop: '300px' }}
        >
          <div className="vertical-timeline-image-three">
            <Image src={Bunny10} loading="lazy" alt="Bunny10" />
          </div>
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1', float: 'left' }}>
            <span className={classes.titleFontStyle}>2022 Q1 - early Q2</span><br />
            <div style={{ color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>
              <p>Media exposure for the world's first community-driven animation short film before and after the release.</p><p>
                Day of our Grand Première! Your NFT will act as a online movie ticket and we'll let the community decide if non-holders will have to pay or buy a Bunny Freak to experience our historic short film!</p>
              <p>(timelines may vary, but were chosen conservatively after consulting with 2 animation studios)</p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{
            background: 'linear-gradient(260.39deg,#00a79d,#8c41ce 96.71%)', color: '#000', width: 50, height: 50, border: 'none'
          }}
        />
      </VerticalTimeline>
      <VerticalTimeline className="vertical-timeline-content vertical-timeline-one">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            background: 'none', color: 'none',
          }}
        >
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1' }}>
            <p className="vertical-timeline-title">Launch<br /><label style={{
              background: "-webkit-linear-gradient(45deg, #8C41CE 30%, #00A79D 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Roadmap</label></p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            backgroundImage: 'url(circle1.png)', color: '#000', width: 50, height: 50, border: 'none', backgroundSize: '100% 100%'
          }}
        >
          <div style={{ marginTop: '10px' }}>
            <span className={classes.titleFontStyle}>25% work</span><br />
            <label style={{ paddingTop: '25px', display: 'block', color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>We will be working closely with Solana NFT marketplaces to get Bunny Freaks listed and verified. Additionally we’ll get Bunny Freaks on Solana’s main rarity website.</label>
            <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1' }}>
              <div className="vertical-timeline-image-one">
                <Image src={Bunny8} loading="lazy" alt="Bunny8" />
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-elemet--work-second"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            background: 'linear-gradient(260.39deg,#00a79d,#8c41ce 96.71%)', color: '#000', width: 25, height: 25, border: 'none'
          }}
        >
          <span className={classes.titleFontStyle}>50% 3 mysterious Bunny Freaks appear</span><br />
          <label style={{ paddingTop: '25px', display: 'block', color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>new Bunny Freaks enter the metaverse. 2 of them find a home with TOP2 Discord inviters and 1 of them with a lucky community member.</label>
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1' }}>
            <Image src={Bunny9} loading="lazy" alt="Bunny9" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            background: 'linear-gradient(260.39deg,#00a79d,#8c41ce 96.71%)', color: '#000', width: 25, height: 25, border: 'none'
          }}
        >
          <span className={classes.titleFontStyle}>100% Gratefulness</span><br />
          <label style={{ paddingTop: '25px', display: 'block', color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>10 Bunny Freaks warriors who have spread our ethos to the most amount of people and got them to join our community are awrded with 50 SOL each. 10 random Bunny Freaks community members will receive 25 SOL each. (Winners are chosen on 26th of September)</label>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            background: 'none', color: 'none',
          }}
        >
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1' }}>
            <p className="vertical-timeline-title">Development<br /><label style={{
              background: "-webkit-linear-gradient(45deg, #8C41CE 30%, #00A79D 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Roadmap</label></p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            backgroundImage: 'url(circle1.png)', color: '#000', width: 50, height: 50, border: 'none', backgroundSize: '100% 100%'
          }}
        >
          <span className={classes.titleFontStyle}>2021 Q4</span><br />
          <div style={{ color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>
            <p>Bunny Freaks will be listed on main Solana NFT marketplaces and added to HowRare.is.
              Animation studios, screenwriters, voice actors and other relevant talent will be carefully screened and selected.
              Creation of our very own community voting mechanism. Consulting with animation studios to form a list of important questions that will drive the creation process for the whole project.
              Weekly voting sessions until we have collected together and processed all the answers by the community.
              Finalizing the short film full documentation. Followed by the execution by our talented team members and partners.</p>
          </div>
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1', float: 'left' }}>
            <Image src={Bunny10} loading="lazy" alt="Bunny10" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'none', color: '#fff', boxShadow: 'none' }}
          iconStyle={{
            background: 'linear-gradient(260.39deg,#00a79d,#8c41ce 96.71%)', color: '#000', width: 25, height: 25, border: 'none'
          }}
        >
          <span className={classes.titleFontStyle}>2022 Q1 - early Q2</span><br />
          <div style={{ color: '#999999', fontSize: '18px', lineHeight: '1.3' }}>
            <p>Media exposure for the world's first community-driven animation short film before and after the release.
              Day of our Grand Première! Your NFT will act as a online movie ticket and we'll let the community decide if non-holders will have to pay or buy a Bunny Freak to experience our historic short film!
              (timelines may vary, but were chosen conservatively after consulting with 2 animation studios)</p>
          </div>
          <div className="vertical-timeline-element-date" style={{ color: 'white', opacity: '1', float: 'left' }}>

          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{
            background: 'linear-gradient(260.39deg,#00a79d,#8c41ce 96.71%)', color: '#000', width: 25, height: 25, border: 'none'
          }}
        />
      </VerticalTimeline>
    </>
  );
}

export default TimeLine;