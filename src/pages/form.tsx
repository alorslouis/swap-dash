import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "Zod";

type Inputs = {
  example: string;
  yalla: string;
  gender: string;
  age: Array<string>;
  income: Array<string>;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-4 mx-auto text-center border border-solid border-gray-300 rounded-lg shadow-lg"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <label className="px-4">
        test1
        <input
          defaultValue="test"
          {...register("example")}
          className="form-input mx-4 px-4 py-3 rounded-lg"
        />
      </label>

      <label className="px-4">
        Does your brand predominantly target:
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

      <label className="px-4">
        What age ranges does your brand target?
        <select
          defaultValue="test"
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

      <label className="px-4">
        What income ranges does your brand target?
        <select
          defaultValue="test"
          multiple={true}
          {...register("income")}
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

      <label className="px-4">
        What income ranges does your brand target?
        <select
          defaultValue="test"
          multiple={true}
          {...register("income")}
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

      <label className="px-4">
        test1
        <input
          defaultValue="test"
          {...register("example")}
          className="form-input mx-4 px-4 py-3 rounded-lg"
        />
      </label>
      <input
        defaultValue="yalla"
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
  );
}

const formVals = {
  gender: ["Men", "Women", "Both"],
  age: [],
};
