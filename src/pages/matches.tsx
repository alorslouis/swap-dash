import { NextPage } from "next";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { formAtom } from "./form";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React from "react";
import { ClientOnly } from "../hooks/clientOnly";

interface brandObjects extends QuestionResponses {
  matchScore: number;
}

// console.log(calculated);

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

const dummyProfile: QuestionResponses = {
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
  brandName: "Garamondi",
  location: "UK",
};

function filterElement(array: any[], element: any) {
  return array.filter((item) => item !== element);
}

const picksAtom = atomWithStorage<QuestionResponses[]>("matches", [])!;

// console.log(picked);

const Matches: NextPage = () => {
  // const [picks, setPicks] = useAtom<QuestionResponses[]>(picksAtom);
  const [picks, setPicks] = useState<QuestionResponses[]>([]);
  const [animationParent] = useAutoAnimate<HTMLUListElement>();

  const [profile] = useAtom(formAtom);
  // const [darkMode, setDarkMode] = useAtom<QuestionResponses[]>(picksAtom);
  console.log(picks);

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  });

  const filtered = dummy.filter((item) => {
    // filter those brands which have been picked, &

    // if international partnership === No, return only domestic brands
    if (profile.intlPartnership === "No") {
      return !picks?.includes(item) && item.location === profile.location;
    }

    // else return domestic, + those intl brands who will partner internationally
    return (
      !picks?.includes(item) &&
      (item.location === dummyProfile.location ||
        item.intlPartnership === "Yes")
    );
  });

  return (
    <>
      <div className="container mx-auto text-center">
        <div>
          <h2 className="text-xl font-medium">My Profile</h2>
          <ClientOnly>
            <div>
              <p>{profile.brandName}</p>
              <p>{profile.location}</p>
            </div>
          </ClientOnly>
        </div>
        <p className="text-4xl font-bold py-4">Matches</p>
        {/* <p className="text-4xl font-bold py-4">Matches</p> */}

        {picks?.length > 0 ? (
          <div className="my-4 mx-2">
            <p className="font-bold text-lg">My Picks</p>

            {/* clear picks array by setting as an empty array */}

            <button onClick={() => setPicks([])}>clear</button>

            <hr />
            <ul ref={animationParent}>
              {picks?.map((pick, index) => (
                <li
                  key={index}
                  className="p-4 m-4 border rounded-md border-solid flex justify-center align-middle border-zinc-600 hover:text-red-600 hover:border-red-500 transition-all ease-linear"
                >
                  <p className="justify-start">
                    {pick.brandName}, {pick.age}
                  </p>
                  <button
                    onClick={() => {
                      return setPicks(filterElement(picks, pick));
                    }}
                    className="ml-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-minus-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
            <hr />
          </div>
        ) : null}

        <h2>available matches</h2>
        <ul ref={animationParent}>
          {filtered.map((item, index) => {
            return (
              <li key={index}>
                <div className="p-4 m-4 border rounded-md border-solid flex justify-center align-middle border-zinc-600 hover:text-blue-600 hover:border-blue-500 transition-all ease-linear ">
                  {item.brandName}, {item.location}, {item.age}
                  <button
                    onClick={() => setPicks([...picks, item])}
                    className="ml-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-plus-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
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

export default Matches;
