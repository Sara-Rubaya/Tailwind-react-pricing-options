import React from 'react';
import PricingFeature from './PricingFeature';


const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col border p-4 bg-blue-900 rounded-2xl'>
            {/**Card header */}
            <div>
                <h1 className='text-7xl text-white'>{name}</h1>
                <h4 className='text-3xl text-white'>{price}</h4>
            </div>
           {/* card body */}
           <div className='bg-blue-300 p-4 rounded-2xl mt-10 flex-1'>
            <p>{description}</p>
            {
            features.map((feature ,index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)
            }

           </div>
           <button className="btn w-full mt-4 bg-white  text-blue-900 text-xl rounded-xl">Subscribe</button>
        </div>
    );
};

export default PricingCard;