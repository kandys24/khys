import React from 'react';
import './CompanyInfo.css';
import aboutus from './img/pics/aboutus.png'
import CompanyInfos from './CompanyInfos';
import CompanyInfoss from './CompanyInfoss';

const info = [
    {
        title: `KHY’s Snacks About Us`,
        paragraph: 'At KHY Snacks, we are passionate about redefining snacking with our unique blend of innovation and sustainability. Founded on the belief that snacks can be both delicious and nutritious, we specialize in crafting flavorful products like our Tropical Snack Bars and Crunch Craze Crackers. We prioritize high-quality, responsibly sourced ingredients, celebrating natural flavors and textures while minimizing waste through creative sourcing, such as utilizing spent grain and mopane worms.'
    },
    {
        title: `Mission Statement`,
        paragraph: 'At KHY Snacks, our mission is to create innovative, delicious, and nutritious snack products that celebrate the vibrant flavors of nature while promoting sustainability. We are dedicated to using high-quality, responsibly sourced ingredients, like spent grain and mopane worms, to craft our Tropical Snack Bars and Crunch Craze Crackers. Our goal is to inspire health-conscious consumers to embrace unique, wholesome snacking options that not only satisfy cravings but also nourish the body and respect the planet.'
    },
    // {
    //     title: 'INGREDIENTS',
    //     paragraph: `Ingredients: Sugar, Glucose Syrup, Vegetable Fats [Palm Fruit, Sunflower Seed (Antioxidant-TBHQ), Shea Nut, Illipe Seed, Sal Seed (Soya) (Citric Acid)], Peanuts (9%), Cocoa Butter, Wheat Flour (Gluten), Full Cream Milk Powder, Cocoa Mass, Rice Flour, Whey Permeate (Cow's Milk), Invert Sugar, Whey Powder (Cow's Milk), Emulsifiers (E442, E471, E476, E322-Soya), Humectant (Glycerol), Salt, Flavourings, Raising Agent (E500), Colourants (E122, E142, E104, E110), Barley Malt (Gluten), Acidifying Agent (E334), Preservative (E223).`
    // },
    // {
    //     title: 'AVAILABLE IN',
    //     paragraph: `23g, 48g, 62g, and Lunch Bar Treat Size 144g`
    // },
    // {
    //     title: 'Milk solids 20 % min. Cocoa Solids 20 % min.',
    //     paragraph: `Contains: Cow's Milk, Soya`
    // },
]

const CompanyInfo = () => {
    return (
        <div className='companyinfo' style={{paddingTop: '20px'}}>
            <h1 className='companyinfo_title' >About</h1>
            <div className='div'></div>
            <div className="company-info">
                {info.map((item, i) => 
                    <CompanyInfos
                        key={i}
                        title={item.title} 
                        paragraph={item.paragraph} 
                    />
                )}
            </div>
            {/* <h1 className='companyinfo_title' style={{marginTop: '30px'}}>NUTRITIONAL INFORMATION</h1> */}
            {/* <div className='div'></div> */}
            <div className="company-info">
                {/* {infoNutre.map((item, i) => 
                    <CompanyInfoss
                        key={i}
                        title={item.title} 
                        paragraph={item.paragraph}
                        extra={item.extra}
                    />
                )} */}
            </div>
        </div>
    );
};

const infoNutre = [
    {
        title: 'Energy',
        paragraph: '651 kJ / 31 g',
        extra: '2100 kJ / 100 g'
    },
    {
        title: 'Protein',
        paragraph: '2.0 g / 31 g',
        extra: '6.4 g / 100 g'
    },
    {
        title: 'Carbohydrate',
        paragraph: '18.8 g / 31 g',
        extra: '60.5 g / 100 g'
    },
    {
        title: 'Sugar',
        paragraph: '14.4 g / 31 g',
        extra: '46.5 g / 100 g'
    },
    {
        title: 'Sodium',
        paragraph: '31 mg / 31 g',
        extra: '99 mg / 100 g'
    },
    {
        title: 'Fibre',
        paragraph: '0.6 g / 31 g',
        extra: '2.0 g / 100 g'
    },
    {
        title: 'Saturated Fat',
        paragraph: '4.0 g / 31 g',
        extra: '13 g / 100 g'
    },
    {
        title: 'Fat',
        paragraph: '7.9 g / 31 g',
        extra: '25.5 g / 100 g'
    },
]

export default CompanyInfo;