import React from "react";
import { useForm } from "react-hook-form";

const Form = ({onSubmit}) =>{
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm();

    
      // console.log(watch("name")); // watch input value by passing the name of it
    
      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="form-header">
            <span>Solution</span>
            <select {...register("proportion")}>
              <option value="%">%</option>
              <option value="mg">mg</option>
              <option value="ml">ml</option>
            </select>
          </div>
          <div className="container">
            <input type={"text"}
              placeholder="Supplier"
              {...register("supplier", { required: true })}
            />
            {errors.supplier && <span>This field is required</span>}
            <input type={"text"}
              placeholder="Name of solution"
              {...register("solution", { required: true })}
            />
            {errors.solution && <span>This field is required</span>}
            <input pattern="^-?[0-9]\d*\.?\d*$"
              placeholder="nitrogen"
              {...register("nitro", { minLength: 2 })}
            />
            {errors.nitro && <span>2 digit minimum</span>}
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
            
    
            <input
              type="submit"
              value={"Add..."}
              className="btn btn-outline-success"
            />
          </div>
        </form>
      );
}
export default Form;