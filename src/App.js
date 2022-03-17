import "./App.css";

import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    list,
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    list = data;
    console.log(list);
  };

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="form-header">
        <span>Solution</span>
        <span>N, %</span>
      </div>
      <div className="container">
        <input placeholder="nitrogen" {...register("nitro")} />
        <input placeholder="phosphorus" {...register("phosphorus")} />
        <input placeholder="kalium" {...register("kalium")} />
        <input placeholder="calcium" {...register("calcium")} />
        <input placeholder="magnesium" {...register("magnesium")} />
        <input placeholder="sulfur" {...register("sulfur")} />
        <input placeholder="ferrum" {...register("ferrum")} />
        <input placeholder="manganum" {...register("manganum")} />
        <input placeholder="borum" {...register("borum")} />

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input
          placeholder="password"
          {...register("pass", { required: true })}
        /> */}

        {/* errors will return when field validation fails  */}
        {/* {errors.pass && <span>This field is required</span>} */}

        <input type="submit" />
      </div>
    </form>
  );
}

export default App;