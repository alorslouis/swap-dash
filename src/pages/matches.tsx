import { NextPage } from "next";

const dummy = [
  {
    age: "19-24, 25-34",
    "What kind of brand partnership would you like to run":
      "Discount Code Giveaway",
    "Does your brand predominantly target men, women or both?": "Both",
    "Does your brand target any of the following familial niches?":
      "Singles, Couples, New Parents",
    "What income ranges does your brand target?":
      "50k-100k / Year, 100k - 250k / Year",
    "Are you open to partnering with an international brand?": "No",
    "Does your brand target any of the following psychographic niches?":
      "Adventurers / Outdoor Enthusiasts, Alternative / Hipster, Health and Wellness Enthusiasts, Music Fans, Travellers",
    "Which values best fit with your brand?": "Sustainability, Affordability",
    "Company Name": "Primark",
    Location: "UK",
  },
  {
    age: "14-18, 19-24, 25-34, 35-44, 45-65, 65+",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Women",
    "Does your brand target any of the following familial niches?":
      "Singles, Couples",
    "What income ranges does your brand target?":
      "0-50k / Year, 50k-100k / Year, 100k - 250k / Year, 250k+ /Year",
    "Are you open to partnering with an international brand?": "Yes",
    "Does your brand target any of the following psychographic niches?":
      "Adventurers / Outdoor Enthusiasts, Alternative / Hipster, Business Professionals, Fashionistas, Health and Wellness Enthusiasts, Technology Enthusiasts, Travellers",
    "Which values best fit with your brand?": "Gender Equality, Luxury",
    "Company Name": "PopSockets",
    Location: "USA",
  },
  {
    age: "25-34, 35-44",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway",
    "Does your brand predominantly target men, women or both?": "Women",
    "Does your brand target any of the following familial niches?":
      "Singles, Couples, New Parents",
    "What income ranges does your brand target?": "50k-100k / Year",
    "Are you open to partnering with an international brand?": "No",
    "Does your brand target any of the following psychographic niches?":
      "Family Oriented, Health and Wellness Enthusiasts, Travellers, Vegetarians / Vegan",
    "Which values best fit with your brand?":
      "Convenience, Sustainability, affordability",
    "Company Name": "Method",
    Location: "USA",
  },
  {
    age: "25-34",
    "What kind of brand partnership would you like to run": "Co-Branding",
    "Does your brand predominantly target men, women or both?": "Both",
    "Does your brand target any of the following familial niches?": "Couples",
    "What income ranges does your brand target?": "100k - 250k / Year",
    "Are you open to partnering with an international brand?": "Yes",
    "Does your brand target any of the following psychographic niches?":
      "Health and Wellness Enthusiasts",
    "Which values best fit with your brand?": "Quality, Minimalism",
    "Company Name": "Lipton",
    Location: "UK",
  },
  {
    age: "25-34",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Women",
    "Does your brand target any of the following familial niches?":
      "New Parents",
    "What income ranges does your brand target?": "50k-100k / Year",
    "Are you open to partnering with an international brand?": "No",
    "Does your brand target any of the following psychographic niches?":
      "Family Oriented",
    "Which values best fit with your brand?": "Sustainability, Convenience",
    "Company Name": "Gerber",
    Location: "USA",
  },
  {
    age: "19-24, 25-34, 35-44, 45-65, 65+",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Contest / Sweepstake, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Both",
    "Does your brand target any of the following familial niches?":
      "Singles, Couples, New Parents",
    "What income ranges does your brand target?":
      "0-50k / Year, 50k-100k / Year, 100k - 250k / Year, 250k+ /Year",
    "Are you open to partnering with an international brand?": "No",
    "Does your brand target any of the following psychographic niches?":
      "Adventurers / Outdoor Enthusiasts, Alternative / Hipster, Food & Cooking Enthusiasts, Family Oriented, Fashionistas, Health and Wellness Enthusiasts, Self - Improvement Enthusiasts, Vegetarians / Vegan, Other",
    "Which values best fit with your brand?": "Sustainability, Minimalism",
    "Company Name": "Spruce",
    Location: "UK",
  },
  {
    age: "25-34, 35-44",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Both",
    "Does your brand target any of the following familial niches?": "Singles",
    "What income ranges does your brand target?":
      "50k-100k / Year, 100k - 250k / Year",
    "Are you open to partnering with an international brand?": "Yes",
    "Does your brand target any of the following psychographic niches?":
      "Fashionistas, Health and Wellness Enthusiasts, Music Fans",
    "Which values best fit with your brand?":
      "Support for Minorities, Affordability",
    "Company Name": "Jo Malone",
    Location: "UK",
  },
  {
    age: "25-34",
    "What kind of brand partnership would you like to run":
      "Product Giveaway, Discount Code Giveaway, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Both",
    "Does your brand target any of the following familial niches?":
      "Singles, Couples, New Parents",
    "What income ranges does your brand target?": "0-50k / Year",
    "Are you open to partnering with an international brand?": "No",
    "Does your brand target any of the following psychographic niches?":
      "Vegetarians / Vegan",
    "Which values best fit with your brand?": "Vegan, Sustainability, Luxury",
    "Company Name": "Ghirardelli",
    Location: "USA",
  },
  {
    age: "25-34",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Contest / Sweepstake, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Women",
    "Does your brand target any of the following familial niches?": "Couples",
    "What income ranges does your brand target?": "0-50k / Year",
    "Are you open to partnering with an international brand?": "Yes",
    "Does your brand target any of the following psychographic niches?":
      "Fashionistas",
    "Which values best fit with your brand?": "Luxury, Quality",
    "Company Name": "HommeGirls",
    Location: "UK",
  },
  {
    age: "0-7, 7-13, 14-18, 19-24, 25-34, 35-44, 45-65, 65+",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Both",
    "Does your brand target any of the following familial niches?":
      "Singles, Couples, New Parents",
    "What income ranges does your brand target?":
      "0-50k / Year, 50k-100k / Year, 100k - 250k / Year, 250k+ /Year",
    "Are you open to partnering with an international brand?": "Yes",
    "Does your brand target any of the following psychographic niches?":
      "Adventurers / Outdoor Enthusiasts, Business Professionals, Food & Cooking Enthusiasts, Family Oriented, Health and Wellness Enthusiasts, Self - Improvement Enthusiasts, Travellers, Vegetarians / Vegan",
    "Which values best fit with your brand?": "Quality, Vegan",
    "Company Name": "Magic Spoon",
    Location: "USA",
  },
  {
    age: "25-34",
    "What kind of brand partnership would you like to run":
      "Product Giveaway, Co-Branding",
    "Does your brand predominantly target men, women or both?": "Men",
    "Does your brand target any of the following familial niches?":
      "Singles, Couples",
    "What income ranges does your brand target?": "50k-100k / Year",
    "Are you open to partnering with an international brand?": "Yes",
    "Does your brand target any of the following psychographic niches?":
      "Business Professionals",
    "Which values best fit with your brand?": "Gender Equality, Affordability",
    "Company Name": "TUMI",
    Location: "USA",
  },
  {
    age: "19-24, 25-34, 35-44",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Women",
    "Does your brand target any of the following familial niches?":
      "Singles, Couples, New Parents",
    "What income ranges does your brand target?": "100k - 250k / Year",
    "Are you open to partnering with an international brand?": "No",
    "Does your brand target any of the following psychographic niches?":
      "Alternative / Hipster, Business Professionals, Food & Cooking Enthusiasts, Fashionistas, Health and Wellness Enthusiasts, Music Fans, Self - Improvement Enthusiasts, Technology Enthusiasts, Travellers",
    "Which values best fit with your brand?": "Convenience, Minimalism",
    "Company Name": "Olipop",
    Location: "USA",
  },
  {
    age: "25-34, 35-44",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Women",
    "Does your brand target any of the following familial niches?": "Singles",
    "What income ranges does your brand target?": "50k-100k / Year",
    "Are you open to partnering with an international brand?": "Yes",
    "Does your brand target any of the following psychographic niches?":
      "Fashionistas",
    "Which values best fit with your brand?": "Quality, Luxury",
    "Company Name": "Savette",
    Location: "USA",
  },
  {
    age: "25-34, 35-44, 45-65",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Women",
    "Does your brand target any of the following familial niches?": "Couples",
    "What income ranges does your brand target?":
      "50k-100k / Year, 100k - 250k / Year",
    "Are you open to partnering with an international brand?": "Yes",
    "Does your brand target any of the following psychographic niches?":
      "Business Professionals, Fashionistas, Health and Wellness Enthusiasts",
    "Which values best fit with your brand?": "Quality, Affordability",
    "Company Name": "Lululemon",
    Location: "USA",
  },
  {
    age: "19-24, 25-34, 35-44, 45-65",
    "What kind of brand partnership would you like to run":
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    "Does your brand predominantly target men, women or both?": "Both",
    "Does your brand target any of the following familial niches?":
      "Singles, Couples",
    "What income ranges does your brand target?":
      "0-50k / Year, 50k-100k / Year, 100k - 250k / Year, 250k+ /Year",
    "Are you open to partnering with an international brand?": "No",
    "Does your brand target any of the following psychographic niches?":
      "Adventurers / Outdoor Enthusiasts, Business Professionals, Music Fans, Self - Improvement Enthusiasts, Sports Fans, Travellers",
    "Which values best fit with your brand?":
      "Support for Minorities, Affordability, Quality",
    "Company Name": "Golden Ratio",
    Location: "UK",
  },
];

const Matches: NextPage = () => {
  return (
    <div className="container mx-auto text-center">
      <p className="text-4xl font-bold py-4">Matches</p>
      <div>
        {dummy.map((item, index) => (
          <div>
            {item["Company Name"]}, {item.Location}, {item.age}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
