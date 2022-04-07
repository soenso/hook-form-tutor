import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './css/form.css';

const Form = ({ onSubmit }) => {
  const [phosphorus, setPhosphorus] = useState('P');
  const [nameValid, setNameValid] = useState('Name of solution');
  const [kalium, setKalium] = useState('K');
  const [calcium, setCalcium] = useState('Ca');
  const [magnesium, setMagnesium] = useState('Mg');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-header">
        <span>Solution</span>
        <select {...register('proportion')}>
          <option value="%">%</option>
          <option value="mg">mg</option>
          <option value="ml">ml</option>
        </select>
      </div>
      <div className="inputForm">
        <div className="line">
          <span>Supplier</span>
          <input
            type={'text'}
            placeholder="Supplier"
            {...register('supplier', { required: true })}
          />
          {errors.supplier && <span>This field is required</span>}
        </div>
        <div className="line">
          <span>Naming</span>
          <input type={'text'} placeholder={nameValid} {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="line">
          <span>N</span>
          <input type="number" step="0.01" min="0" placeholder="nitrogen" {...register('nitro')} />
        </div>
        <div className="line">
          <select
            value={phosphorus}
            onChange={(event) => {
              setPhosphorus(event.target.value);
            }}>
            <option value="P">P</option>
            <option value="p2o5">p2o5</option>
          </select>

          <input
            type="number"
            step="0.01"
            min="0"
            placeholder={phosphorus}
            {...register(phosphorus)}
          />
        </div>

        <div className="line">
          <select
            value={kalium}
            onChange={(event) => {
              setKalium(event.target.value);
            }}>
            <option value="K">K</option>
            <option value="K2o">K2o</option>
          </select>
          <input type="number" step="0.01" min="0" placeholder={kalium} {...register(kalium)} />
        </div>

        <div className="line">
          <select
            value={calcium}
            onChange={(event) => {
              setCalcium(event.target.value);
            }}>
            <option value="Ca">Ca</option>
            <option value="CaO">CaO</option>
          </select>
          <input type="number" step="0.01" min="0" placeholder={calcium} {...register(calcium)} />
        </div>
        <div className="line">
          <select
            value={magnesium}
            onChange={(event) => {
              setMagnesium(event.target.value);
            }}>
            <option value="Mg">Mg</option>
            <option value="MgO">MgO</option>
          </select>
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder={magnesium}
            {...register(magnesium)}
          />
        </div>

        <div className="line">
          <span>S</span>
          <input type="number" step="0.01" min="0" placeholder="sulfur" {...register('sulfur')} />
        </div>
        <div className="line">
          <span>Fe</span>
          <input type="number" step="0.01" min="0" placeholder="ferrum" {...register('ferrum')} />
        </div>
        <div className="line">
          <span>Mn</span>
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder="manganum"
            {...register('manganum')}
          />
        </div>
        <div className="line">
          <span>B</span>
          <input type="number" step="0.01" min="0" placeholder="borum" {...register('borum')} />
        </div>
        <input type="submit" value={'Add...'} className="btn btn-outline-success" />
      </div>
    </form>
  );
};
export default Form;
