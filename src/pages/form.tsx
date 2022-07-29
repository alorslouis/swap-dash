import { NextPage } from "next";
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "Zod";

type Inputs = {
  example: string;
  yalla: string;
  gender: string;
  age: Array<string>;
  income: Array<string>;
  exampleRequired: string;
  niche: string;
  psycho: string;
  intl: boolean;
};

const Form: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const watchAllFields = watch();

  const [age, setAge] = useState("");

  console.log(watch());

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <div className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-4 mx-auto text-center border border-solid border-gray-300 rounded-lg shadow-lg"
        >
          {/* register your input into the hook by invoking the "register" function */}

          <label className="px-4 flex flex-auto align-middle items-center">
            Does your brand predominantly target men, women, or both?
            <select
              defaultValue=""
              {...register("gender")}
              className="form-select mx-4 px-4 py-3 rounded-lg"
            >
              <option>Men</option>
              <option>Women</option>
              <option>Both</option>
            </select>
          </label>

          <label className="px-4 flex flex-auto align-middle items-center">
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

          <label className="px-4 flex flex-auto align-middle items-center">
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

          <label className="px-4 flex flex-auto align-middle items-center">
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

          <label className="px-4 flex flex-auto align-middle items-center">
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

          <label className="px-4 flex flex-auto align-middle items-center">
            Does your brand target any of the following psychographic niches?
            <select
              multiple={true}
              {...register("intl")}
              className="form-multiselect mx-4 flex flex-col flex-auto px-4 py-3 rounded-lg"
            >
              <option>Adventure</option>
              <option>Alt/Hipster</option>
              <option>Biz</option>
            </select>
          </label>

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
