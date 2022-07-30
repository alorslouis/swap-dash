import { NextPage } from "next";
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface Inputs {
  example: string;
  yalla: string;
  gender: string;
  age: Array<string>;
  income: Array<string>;
  exampleRequired: string;
  niche: string;
  psycho: string;
  intl: boolean;
  values: Array<String>;
}

const FormSchema = z.object({
  example: z.string(),
  yalla: z.string(),
  gender: z.string().min(1),
  age: z.string().array().min(1),
  income: z.string().array().min(1),
  exampleRequired: z.string(),
  niche: z.string().min(1),
  psycho: z.string().min(1),
  intl: z.string().min(1),
  values: z
    .string()
    .array()
    .min(1)
    .max(5, { message: "Please select 5 or fewer" }),
});

type FormProps = z.infer<typeof FormSchema>;

const Form: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({ resolver: zodResolver(FormSchema) });
  const onSubmit: SubmitHandler<FormProps> = (data) => console.log(data);
  const watchAllFields = watch();

  const [age, setAge] = useState("");

  // console.log(watch());

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
          <label className="px-4 my-4 align-middle flex flex-1 flex-col">
            Does your brand predominantly target men, women, or both?
            <select
              defaultValue=""
              {...register("gender")}
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

          <label className="px-4 my-4 align-middle flex flex-1 flex-col">
            What income ranges does your brand target?
            <select
              multiple={true}
              {...register("income")}
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
              {...register("niche")}
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
              {...register("psycho")}
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
                  {...register("intl")}
                  type="radio"
                  value="true"
                  className="mx-2"
                />
              </label>
              <label>
                No
                <input
                  {...register("intl")}
                  type="radio"
                  value="false"
                  className="mx-2"
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
          {errors.intl?.message && (
            <p className="text-red-400 font-semibold animate-pulse">
              {errors.intl?.message}
            </p>
          )}

          <label className="px-4 my-4 align-middle flex flex-1 flex-col">
            Which values best fit with your brand? (max: 5)
            <select
              multiple={true}
              {...register("values")}
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
          {errors.values?.message && (
            <p className="text-red-400 font-semibold animate-pulse">
              {errors.values?.message}
            </p>
          )}

          <input
            placeholder="Select your option"
            {...register("yalla")}
            className="form-input mx-4 px-4 py-3 rounded-lg"
          />
          <select />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
        <div>{age ? age : "test"}</div>
        {/* <div>
          {watch(["age", "example"]).map((item) => (
            <div>{item}</div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Form;

const formVals = {
  gender: ["Men", "Women", "Both"],
  age: [],
};
