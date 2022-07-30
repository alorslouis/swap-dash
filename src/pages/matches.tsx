import { NextPage } from "next";
import { useState } from "react";

const dummy = [
  {
    age: "19-24, 25-34",
    brandPartnerships: "Discount Code Giveaway",
    genderFocus: "Both",
    famNiches: "Singles, Couples, New Parents",
    incomeRange: "50k-100k / Year, 100k - 250k / Year",
    intlPartnership: "No",
    psychoNiches:
      "Adventurers / Outdoor Enthusiasts, Alternative / Hipster, Health and Wellness Enthusiasts, Music Fans, Travellers",
    brandValues: "Sustainability, Affordability",
    brandName: "Primark",
    location: "UK",
  },
  {
    age: "14-18, 19-24, 25-34, 35-44, 45-65, 65+",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    genderFocus: "Women",
    famNiches: "Singles, Couples",
    incomeRange:
      "0-50k / Year, 50k-100k / Year, 100k - 250k / Year, 250k+ /Year",
    intlPartnership: "Yes",
    psychoNiches:
      "Adventurers / Outdoor Enthusiasts, Alternative / Hipster, Business Professionals, Fashionistas, Health and Wellness Enthusiasts, Technology Enthusiasts, Travellers",
    brandValues: "Gender Equality, Luxury",
    brandName: "PopSockets",
    location: "USA",
  },
  {
    age: "25-34, 35-44",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway",
    genderFocus: "Women",
    famNiches: "Singles, Couples, New Parents",
    incomeRange: "50k-100k / Year",
    intlPartnership: "No",
    psychoNiches:
      "Family Oriented, Health and Wellness Enthusiasts, Travellers, Vegetarians / Vegan",
    brandValues: "Convenience, Sustainability, affordability",
    brandName: "Method",
    location: "USA",
  },
  {
    age: "25-34",
    brandPartnerships: "Co-Branding",
    genderFocus: "Both",
    famNiches: "Couples",
    incomeRange: "100k - 250k / Year",
    intlPartnership: "Yes",
    psychoNiches: "Health and Wellness Enthusiasts",
    brandValues: "Quality, Minimalism",
    brandName: "Lipton",
    location: "UK",
  },
  {
    age: "25-34",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    genderFocus: "Women",
    famNiches: "New Parents",
    incomeRange: "50k-100k / Year",
    intlPartnership: "No",
    psychoNiches: "Family Oriented",
    brandValues: "Sustainability, Convenience",
    brandName: "Gerber",
    location: "USA",
  },
  {
    age: "19-24, 25-34, 35-44, 45-65, 65+",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Contest / Sweepstake, Content Collaboration",
    genderFocus: "Both",
    famNiches: "Singles, Couples, New Parents",
    incomeRange:
      "0-50k / Year, 50k-100k / Year, 100k - 250k / Year, 250k+ /Year",
    intlPartnership: "No",
    psychoNiches:
      "Adventurers / Outdoor Enthusiasts, Alternative / Hipster, Food & Cooking Enthusiasts, Family Oriented, Fashionistas, Health and Wellness Enthusiasts, Self - Improvement Enthusiasts, Vegetarians / Vegan, Other",
    brandValues: "Sustainability, Minimalism",
    brandName: "Spruce",
    location: "UK",
  },
  {
    age: "25-34, 35-44",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    genderFocus: "Both",
    famNiches: "Singles",
    incomeRange: "50k-100k / Year, 100k - 250k / Year",
    intlPartnership: "Yes",
    psychoNiches: "Fashionistas, Health and Wellness Enthusiasts, Music Fans",
    brandValues: "Support for Minorities, Affordability",
    brandName: "Jo Malone",
    location: "UK",
  },
  {
    age: "25-34",
    brandPartnerships:
      "Product Giveaway, Discount Code Giveaway, Content Collaboration",
    genderFocus: "Both",
    famNiches: "Singles, Couples, New Parents",
    incomeRange: "0-50k / Year",
    intlPartnership: "No",
    psychoNiches: "Vegetarians / Vegan",
    brandValues: "Vegan, Sustainability, Luxury",
    brandName: "Ghirardelli",
    location: "USA",
  },
  {
    age: "25-34",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Contest / Sweepstake, Content Collaboration",
    genderFocus: "Women",
    famNiches: "Couples",
    incomeRange: "0-50k / Year",
    intlPartnership: "Yes",
    psychoNiches: "Fashionistas",
    brandValues: "Luxury, Quality",
    brandName: "HommeGirls",
    location: "UK",
  },
  {
    age: "0-7, 7-13, 14-18, 19-24, 25-34, 35-44, 45-65, 65+",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    genderFocus: "Both",
    famNiches: "Singles, Couples, New Parents",
    incomeRange:
      "0-50k / Year, 50k-100k / Year, 100k - 250k / Year, 250k+ /Year",
    intlPartnership: "Yes",
    psychoNiches:
      "Adventurers / Outdoor Enthusiasts, Business Professionals, Food & Cooking Enthusiasts, Family Oriented, Health and Wellness Enthusiasts, Self - Improvement Enthusiasts, Travellers, Vegetarians / Vegan",
    brandValues: "Quality, Vegan",
    brandName: "Magic Spoon",
    location: "USA",
  },
  {
    age: "25-34",
    brandPartnerships: "Product Giveaway, Co-Branding",
    genderFocus: "Men",
    famNiches: "Singles, Couples",
    incomeRange: "50k-100k / Year",
    intlPartnership: "Yes",
    psychoNiches: "Business Professionals",
    brandValues: "Gender Equality, Affordability",
    brandName: "TUMI",
    location: "USA",
  },
  {
    age: "19-24, 25-34, 35-44",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    genderFocus: "Women",
    famNiches: "Singles, Couples, New Parents",
    incomeRange: "100k - 250k / Year",
    intlPartnership: "No",
    psychoNiches:
      "Alternative / Hipster, Business Professionals, Food & Cooking Enthusiasts, Fashionistas, Health and Wellness Enthusiasts, Music Fans, Self - Improvement Enthusiasts, Technology Enthusiasts, Travellers",
    brandValues: "Convenience, Minimalism",
    brandName: "Olipop",
    location: "USA",
  },
  {
    age: "25-34, 35-44",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    genderFocus: "Women",
    famNiches: "Singles",
    incomeRange: "50k-100k / Year",
    intlPartnership: "Yes",
    psychoNiches: "Fashionistas",
    brandValues: "Quality, Luxury",
    brandName: "Savette",
    location: "USA",
  },
  {
    age: "25-34, 35-44, 45-65",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Content Collaboration",
    genderFocus: "Women",
    famNiches: "Couples",
    incomeRange: "50k-100k / Year, 100k - 250k / Year",
    intlPartnership: "Yes",
    psychoNiches:
      "Business Professionals, Fashionistas, Health and Wellness Enthusiasts",
    brandValues: "Quality, Affordability",
    brandName: "Lululemon",
    location: "USA",
  },
  {
    age: "19-24, 25-34, 35-44, 45-65",
    brandPartnerships:
      "Social Media Cross Promotion / Referral Marketing, Product Giveaway, Discount Code Giveaway, Co-Branding, Contest / Sweepstake, Content Collaboration",
    genderFocus: "Both",
    famNiches: "Singles, Couples",
    incomeRange:
      "0-50k / Year, 50k-100k / Year, 100k - 250k / Year, 250k+ /Year",
    intlPartnership: "No",
    psychoNiches:
      "Adventurers / Outdoor Enthusiasts, Business Professionals, Music Fans, Self - Improvement Enthusiasts, Sports Fans, Travellers",
    brandValues: "Support for Minorities, Affordability, Quality",
    brandName: "Golden Ratio",
    location: "UK",
  },
];

interface QuestionResponses {
  age: string;
  brandPartnerships: string;
  genderFocus: string;
  famNiches: string;
  incomeRange: string;
  intlPartnership: string;
  psychoNiches: string;
  brandValues: string;
  brandName: string;
  location: string;
}

// // func to return a new array without specified element
// function removeElement(array: any[], element: any) {
//   const index = array.indexOf(element);
//   if (index > -1) {
//     array.splice(index, 1);
//   }
//   return array;
// }

function filterElement(array: any[], element: any) {
  return array.filter((item) => item !== element);
}

// console.log(picked);

const Matches: NextPage = () => {
  const [picks, setPicks] = useState<QuestionResponses[]>([]);

  const filtered = dummy.filter((item) => {
    return !picks.includes(item);
  });

  // console.log(filtered);

  return (
    <>
      <div className="container mx-auto text-center">
        <p className="text-4xl font-bold py-4">Matches</p>

        {picks.length > 0 && (
          <div className="my-4">
            <p className="font-bold text-lg">My Picks</p>

            {/* clear picks array by setting as an empty array */}

            <button onClick={() => setPicks([])}>clear</button>

            <hr />
            <div className="py-4">
              {picks.map((pick, index) => (
                <div key={index} className="flex flex-col">
                  <p>
                    {pick.age}, {pick.brandName}
                  </p>
                  <button onClick={() => setPicks(filterElement(picks, pick))}>
                    remove
                  </button>
                </div>
              ))}
            </div>
            <hr />
          </div>
        )}

        {/* {picked ?? picked.} */}
        <ul>
          {dummy
            .filter((item) => {
              return !picks.includes(item);
            })
            .map((item, index) => {
              return (
                <li key={index}>
                  <div className="p-4 m-4 border rounded-md border-solid border-zinc-600 hover:text-blue-600 hover:border-blue-500 transition-all ease-linear ">
                    {item.brandName}, {item.location}, {item.age}
                    <button onClick={() => setPicks([...picks, item])}>
                      Add
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Matches;
