import React from 'react'
import './Features.css'
import FeatureBlock from './FeatureBlock/FeatureBlock';
import settingsIcon from '../../img/settings.png';
import pencilIcon from '../../img/pencil.png';
import diamondIcon from '../../img/diamond.png';
import truckIcon from '../../img/truck.png';

const Features = () => (
    <div className="Features">
        <section>
            <h1>do you know we can provide for you?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ni ipsum dolor sit amet, 
                consectetur adipis cing elit, ed doi eiusmod tempor incididunt ut labore et.</p>
            <button className="red-button" onClick={() => {}}>Learn More</button>
        </section>
        <section className="all-features">
            <FeatureBlock src={settingsIcon} 
            title={'Management'} 
            text={'Lorem ipsum dolor sitea amet, zixf conseit  adipi cing elit, seddi do eiusmod btdempor in didunt utlae ore etioe.Lorem ipsum new idolor'}
            />
            <FeatureBlock src={pencilIcon} 
            title={'UI /UX Design'} 
            text={'Lorem ipsum dolor sitea amet, zixf conseit  adipi cing elit, seddi do eiusmod btdempor in didunt utlae ore etioe.Lorem ipsum new idolor sit'}
            />
            <FeatureBlock src={diamondIcon} 
            title={'Logo / Branding'} 
            text={'Lorem ipsum dolor sitea amet, zixf conseit  adipi cing elit, seddi do eiusmod btdempor in didunt utlae ore etioeew idolor sit amet,'}
            />
            <FeatureBlock src={truckIcon} 
            title={'Animation'} 
            text={'Lorem ipsum dolor sitea amet, zixf conseit  adipi cing elit, seddi do eiusmod btdempor in didunt utlae ore etioe.Lorem ipsum new idolor sit'}
            />
        </section>
    </div>
)

export default Features