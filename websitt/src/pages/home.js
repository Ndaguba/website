import React from 'react';
import Header from '../components/header';
import Button from '../components/button';
import FeatureSection from '../components/FeatureSection.js';
import AppDemo from '../components/AppDemo';
import './home.css';
import FAQ from '../components/FAQ.js';
import PriceCard from '../components/PriceCard';
import ActionCTA from '../components/ActionCTA';

const Home = () => {
    const handleJoinBeta = () => {
        window.open('https://beta.usemossy.co/signup', '_blank');
    };

    return (
        <div>
            <div className='hero'>
                <video 
                    className='hero-video' 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    onError={(e) => console.log('Video error:', e)}
                    onLoadStart={() => console.log('Video loading started')}
                    onCanPlay={() => console.log('Video can play')}
                >
                    <source src="https://wexlxtqsipufuzfrzybl.supabase.co/storage/v1/object/public/new-website-assets/Black%20and%20White%20Professional%20Designer%20Business%20Card.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Header />

                <div className='hero-content-wrapper'>
                    <div className='hero-content'>
                        <h1>Mossy is an AI bookkeeping agent for solopreneurs and small teams</h1>
                        
                        <Button size="large" onClick={handleJoinBeta}>Join Beta</Button>
                    </div>
                    <img src="https://wexlxtqsipufuzfrzybl.supabase.co/storage/v1/object/public/signupbackground/Clip/appshot.png" alt="Background" className='hero-image' />     
                    </div> 
                </div>

                <FeatureSection />
                <AppDemo />
                <FAQ />
                <PriceCard/>
                <ActionCTA />
            </div>
    );
};

export default Home;