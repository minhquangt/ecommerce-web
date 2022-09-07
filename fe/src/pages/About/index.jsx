import React from 'react';
import './about.scss';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.jpg';
import about3 from '../../assets/about3.jpg';
import about4 from '../../assets/about4.jpg';
import TimeLine from 'components/Timeline';

function About() {
    return (
        <div className='about'>
            <h1 className='text-center pt-5 pb-5'>About</h1>
            <div className='row'>
                <div className='col-5'>
                    <div className='about-content'>
                        <h1>By Vilain</h1>
                        <p>
                            By Vilain is for the style-conscious man who wants to take their
                            haircare game to the next level.
                        </p>
                        <p>
                            Our brand is brought to you out of Copenhagen, Denmark: a city alive
                            with art, fashion, partying, and concerts of every kind;
                            tastebud-tempting fine dining; and the 24/7 buzz of innovative business
                            and culture. And just like the city: By Vilain men’s grooming products
                            are a Scandinavian blend of stylish sophistication, professional
                            dynamism, avant-garde edge, and clean minimalism.{' '}
                        </p>
                        <img src={about1} alt='' />
                    </div>
                    <div className='about-content'>
                        <h1>Our Story</h1>
                        <p>
                            If you walk through our front doors in Aarhus and past our hair studio,
                            you might see our team packing crates to be shipped around the world.
                            There’s probably a few of us in the office working on the website,
                            editing videos or having a coffee together in the kitchen. After more
                            than ten years in the business: we’ve had our highs and our lows, and
                            we’re proud to say we’ve built up a premium-quality brand with By
                            Vilain: made up of professional products like Gold Digger Wax and
                            Sidekick Pre-Styling Spray. From our beginnings at the hair salon to our
                            impact on the global haircare game, we’ve come a long way!
                        </p>
                        <img src={about2} alt='' />
                    </div>
                    <div className='about-content'>
                        <h1>Our Mission</h1>
                        <p>
                            “I see our customers as people we help along the way. And it brings a
                            lot of joy to know that.” – Rasmus Vilain Albrechtsen
                        </p>
                        <p>
                            We’re an upbeat team who love what we do. We’re driven by a vision: to
                            inspire guys to be the best version of themselves and to equip them for
                            success. And over the years, we’ve been touched by the awesome responses
                            we’ve had from happy customers. We’re grateful for the amazing By Vilain
                            community, full of men from around the world who want to continue the
                            journey with us. We continue to inspire men around the world to
                            #workhard and #stylehard.
                        </p>
                        <p>
                            If we help you to put yourself forward with confidence in your next job
                            interview; give you the tools to look your dapper best on your wedding
                            day, or if we make products you rely on again and again - then we know
                            we’ve made a difference, even if it’s only a small one. From our
                            beginnings to where we are today, By Vilain’s commitment has stayed the
                            same:
                        </p>
                        <p>
                            Our goal is to help men along the way to become a better version of
                            themselves.{' '}
                        </p>
                        <img src={about2} alt='' />
                    </div>
                </div>
                <div className='col-5'>
                    <div className='about-content'>
                        <h1>Who We Are</h1>
                        <p>
                            By Vilain was launched by twin brothers and entrepreneurs, Emil and
                            Rasmus Vilain Albrechtsen out of their Aarhus salon in 2013, and the
                            trendsetting brand soon won international recognition in the world of
                            men’s grooming. Since our beginnings, we’ve opened up another location
                            in Denmark’s capital city - Copenhagen. Our brand reflects who we are
                            and where we come from, and our name on the label shows our commitment
                            to uncompromising quality.
                        </p>
                        <img src={about3} alt='' />
                    </div>
                    <div className='about-content'>
                        <h1>Why By Vilain?</h1>
                        <p>
                            We’re a close-knit, family-run team: passionate about creating
                            sustainable products with ingredients sourced and products
                            professionally tested in Denmark. Not only is the lower transport time
                            better for the environment - it also means that we can guarantee the
                            highest quality in product standards and secure a good working
                            environment for our manufacturers: it’s a win-win! By Vilain’s range is
                            formulated in collaboration between our Danish R&D team and professional
                            hairdressers – delivering the high-caliber products that we’re known
                            for.
                        </p>
                        <p>
                            We provide professional men’s grooming products that give you a
                            satisfying styling performance time after time. By Vilain has
                            revolutionized the haircare game with quality ingredients and
                            consistently excellent performance, and you’ll find our products all
                            over the world: from London to Singapore. We’re proud of having
                            customers in over 120 countries and for providing the go-to products for
                            professional salons worldwide.
                        </p>
                        <img src={about4} alt='' />
                    </div>
                </div>
                <TimeLine />
            </div>
        </div>
    );
}

export default About;
