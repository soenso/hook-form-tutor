import React from 'react'
import { useForm } from 'react-hook-form'
import './css/form.css'

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

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
          <input
            type={'text'}
            placeholder="Name of solution"
            {...register('solution', { required: true })}
          />
          {errors.solution && <span>This field is required</span>}
        </div>
        <div className="line">
          <span>N</span>
          <input type="number" step="0.01" min="0" placeholder="nitrogen" {...register('nitro')} />
        </div>
        <div className="line">
          <span>P</span>
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder="phosphorus"
            {...register('phosphorus')}
          />
        </div>
        <div className="line">
          <span>p2o5</span>
          <input type="number" step="0.01" min="0" placeholder="p2o5" {...register('p2o5')} />
        </div>
        <div className="line">
          <span>K</span>
          <input type="number" step="0.01" min="0" placeholder="kalium" {...register('kalium')} />
        </div>
        <div className="line">
          <span>k2o</span>
          <input type="number" step="0.01" min="0" placeholder="k2O" {...register('k2o')} />
        </div>
        <div className="line">
          <span>Ca</span>
          <input type="number" step="0.01" min="0" placeholder="calcium" {...register('calcium')} />
        </div>
        <div className="line">
          <span>Mg</span>
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder="magnesium"
            {...register('magnesium')}
          />
        </div>
        <div className="line">
          <span>MgO</span>
          <input type="number" step="0.01" min="0" placeholder="mgO" {...register('mgO')} />
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
  )
}
export default Form
