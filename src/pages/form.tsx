import { NextPage } from "next";
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAtom, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const FormSchema = z.object({
  age: z.string().array().min(1),
  brandPartnerships: z.string().array().min(1),
  genderFocus: z.string().min(1),
  incomeRange: z.string().array().min(1),
  famNiche: z.string().array().min(1),
  intlPartnership: z.string().min(1),
  psychoNiche: z.string().array().min(1),
  brandValues: z
    .string()
    .array()
    .min(1)
    .max(5, { message: "Please select 5 or fewer" }),
  brandName: z.string(),
  location: z.string(),
});

type FormProps = z.infer<typeof FormSchema>;

const dummyProfile: FormProps = {
  age: ["25-34", "35-44", "45-65"],
  brandPartnerships: [
    "Social Media Cross Promotion / Referral Marketing",
    "Product Giveaway",
    "Discount Code Giveaway",
    "Content Collaboration",
  ],
  genderFocus: "Women",
  famNiche: ["Couples"],
  incomeRange: ["50k-100k / Year", "100k - 250k / Year"],
  intlPartnership: "Yes",
  psychoNiche: [
    "Business Professionals",
    "Fashionistas",
    "Health and Wellness Enthusiasts",
  ],
  brandValues: ["Quality", "Affordability"],
  brandName: "Garamondi",
  location: "UK",
};

export const darkModeAtom = atomWithStorage<FormProps>(
  "darkMode",
  dummyProfile
);

const Form: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(FormSchema),
  });
  // const onError = (errors, e) => console.log(errors, e);

  // console.log(watch());

  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const onSubmit: SubmitHandler<FormProps> = (data, e) => console.log(data, e);

  // console.log(darkMode);

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <div className="container mx-auto flex flex-col items-center justify-center p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-4 mx-auto text-center border border-solid border-gray-300 rounded-lg shadow-lg"
        >
          {/* register your input into the hook by invoking the "register" function */}

          {/* <div className="flex flex-col"> */}
          <label className="px-4 mx-auto my-4 align-middle flex flex-1 flex-col">
            What is the name of your brand?
            <input
              defaultValue=""
              {...register("brandName")}
              className="form-input flex flex-1 m-4 px-4 py-3 rounded-lg"
            />
          </label>

          <label className="px-4 mx-auto my-4 align-middle flex flex-1 flex-col">
            In what country is your brand located?
            <input
              defaultValue=""
              {...register("location")}
              className="form-input flex flex-1 m-4 px-4 py-3 rounded-lg"
            />
          </label>

          <label className="px-4 mx-auto my-4 align-middle flex flex-1 flex-col">
            Does your brand predominantly target men, women, or both?
            <select
              defaultValue=""
              {...register("genderFocus")}
              className="form-select flex flex-1 m-4 px-4 py-3 rounded-lg"
            >
              <option>Men</option>
              <option>Women</option>
              <option>Both</option>
            </select>
          </label>
          {/* </div> */}

          <label className="px-4 my-4 align-middle flex flex-1 flex-col">
            What age ranges does your brand target?
            <select
              multiple={true}
              {...register("age")}
              className="form-multiselect mx-4 px-4 py-3 rounded-lg"
            >
              <option>0 - 6</option>
              <option>7 - 13</option>
              <option>14 - 18</option>
              <option>19 - 24</option>
              <option>25 - 34</option>
              <option>45 - 65</option>
              <option>65+</option>
            </select>
          </label>

          <label className="px-4 mx-auto my-4 align-middle flex flex-1 flex-col">
            What income ranges does your brand target?
            <select
              multiple={true}
              {...register("incomeRange")}
              className="form-multiselect mx-4 px-4 py-3 rounded-lg"
            >
              <option>0-50k/year</option>
              <option>50k-100k/year</option>
              <option>100k-250k/year</option>
              <option>250k+/year</option>
            </select>
          </label>

          <label className="px-4 my-4 align-middle flex flex-1 flex-col">
            Does your brand target any of the following familial niches?
            <select
              multiple={true}
              {...register("famNiche")}
              className="form-multiselect mx-4 flex flex-col flex-auto px-4 py-3 rounded-lg"
            >
              <option>Singles</option>
              <option>Couples</option>
              <option>New Parents</option>
            </select>
          </label>

          <label className="px-4 my-4 align-middle flex flex-1 flex-col">
            Does your brand target any of the following psychographic niches?
            <select
              multiple={true}
              {...register("psychoNiche")}
              className="form-multiselect mx-4 flex flex-col flex-auto px-4 py-3 rounded-lg"
            >
              <option>Adventure</option>
              <option>Alt/Hipster</option>
              <option>Biz</option>
            </select>
          </label>

          <label className="px-4 my-4 align-middle flex flex-1 flex-col">
            Are you open to partnering with an international brand?
            <div>
              <label>
                Yes
                <input
                  {...register("intlPartnership")}
                  type="radio"
                  value="true"
                  className="mx-2 form-radio"
                />
              </label>
              <label>
                No
                <input
                  {...register("intlPartnership")}
                  type="radio"
                  value="false"
                  className="mx-2 form-radio"
                />
              </label>
            </div>
            {/* <select
              {...register("intl")}
              className="form-select mx-4 flex flex-col flex-auto px-4 py-3 rounded-lg"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select> */}
          </label>
          {errors.intlPartnership?.message && (
            <p className="text-red-400 font-semibold animate-pulse">
              {errors.intlPartnership?.message}
            </p>
          )}

          <label className="px-4 my-4 align-middle flex flex-1 flex-col">
            Which values best fit with your brand? (max: 5)
            <select
              multiple={true}
              {...register("brandValues")}
              className="form-multiselect mx-4 flex flex-col flex-auto px-4 py-3 rounded-lg"
            >
              <option>Affordability</option>
              <option>Charitable support</option>
              <option>Convenience</option>
              <option>Gender Equality</option>
              <option>LGBTQIA+ Ally</option>
              <option>Luxury</option>
              <option>Minimalism</option>
              <option>Quality</option>
              <option>Support for Minorities</option>
              <option>Sustainability</option>
              <option>Vegan</option>
              <option>Other</option>
            </select>
          </label>
          {errors.brandValues?.message && (
            <p className="text-red-400 font-semibold animate-pulse">
              {errors.brandValues?.message}
            </p>
          )}

          {/* <input
            placeholder="Select your option"
            {...register("yalla")}
            className="form-input mx-4 px-4 py-3 rounded-lg"
          />
          <select /> */}

          {/* include validation with required or other standard HTML validation rules */}
          {/* <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
          {/* <input type="submit" /> */}
        </form>
      </div>
    </>
  );
};

export default Form;
