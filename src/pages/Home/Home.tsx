import React from "react";
import centerImage from '../../../assets/center_bg_landing_header.svg';
import leftImage from '../../../assets/left_bg_landing_header.svg';
import rightImage from '../../../assets/right_bg_landing_header.svg';
import inviteOnly from '../../../assets/invite_only_landing.svg';
import hangingOut from '../../../assets/hanging_out_easy_landing.svg';
import fandom from '../../../assets/fandom_landing.svg';
import chiling from '../../../assets/just_chiling_landing.svg';
import stars from '../../../assets/tiny_stars_landing.svg';
const  Home:React.FC = () => {
  return (
    <>
        <section className="home section"> 
            <img src={centerImage} className="home_hero1"/>
            <img src={leftImage} className="home_hero2"/>
            <img src={rightImage} className="home_hero3"/>
            <div className="home_hero">
                <h1 className="hero_text_h1">IMAGINE A PLACE...</h1>
                <p className="hero_p">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                <div className="hero_cta_wrapper">
                    <button className="hero_buttons_mac"><i className="fa-solid fa-download"></i> Download for Mac</button>
                    <button className="hero_buttons_browser">Open Discord</button>
                </div>
            </div>
        </section>

        <section className="section_flex home_section_left">
            <div className="home_section_left_top">
                <img src={inviteOnly} className="home_section_left_top_img"/>
            </div>
            <div className="home_section_left_bottom">
                <h2 className="home_section2_h2">Create an invite-only place where you belong</h2>
                <p className="home_section2_p">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
        </section>

        <section className="section_flex home_section2 ">
            <div className="home_section_left_bottom">
                <h2 className="home_section2_h2">Where hanging out is easy</h2>
                <p className="home_section2_p">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </div>
            <div className="home_section_left_top">
                <img src={hangingOut} className="home_section_left_top_img"/>
            </div>
        </section>

        <section className="section_flex home_section_left ">
            <div className="home_section_left_top">
                <img src={fandom} className="home_section_left_top_img"/>
            </div>
            <div className="home_section_left_bottom">
                <h2 className="home_section2_h2">From few to a fandom</h2>
                <p className="home_section2_p">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
        </section>

        <section className="home_section3 ">
            <h2 className="home_section3_h2 text_center">Reliable tech for staying close</h2>
            <p className="home_section3_p text_center">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            <div className="mb-30">
                <img src={chiling} className="home_section3_img"/>
            </div>
            <div className="home_section3">
                <img src={stars} />
                <h2 className="home_section4_h2 ">Ready to start your journey?</h2>
                <div className="home_section4_download"><i className="fa-solid fa-download"></i> Download for Windows</div>
            </div>
        </section>

    </>
  );
}

export default Home;