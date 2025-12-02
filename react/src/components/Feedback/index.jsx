import React, {useState} from 'react';
import {createFeedback} from '../../api/feedback';

const phoneRegex = /^\+?[78][0-9\s\-\(\)]{10,}$/;

export const Feedback = () => {
  const [formData, setFormData] = useState({name:'', phone:''});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = 'Неверный формат телефона';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await createFeedback(formData);
        setSubmitted(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  return (
    <div data-easytag="id1-src/components/Feedback/index.jsx" style={{padding:'100px 20%', maxWidth:'600px', margin:'auto'}}>
      {submitted ? (
        <div data-testid="success-msg" style={{textAlign:'center', fontSize:'24px', color:'green'}}>Спасибо за заявку!</div>
      ) : (
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
          <input
            name="name"
            data-testid="name-input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            style={{padding:'15px', fontSize:'18px', border:'1px solid #ddd', borderRadius:'5px'}}
          />
          {errors.name && <div style={{color:'red'}}>{errors.name}</div>}
          <input
            name="phone"
            data-testid="phone-input"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            style={{padding:'15px', fontSize:'18px', border:'1px solid #ddd', borderRadius:'5px'}}
          />
          {errors.phone && <div style={{color:'red'}}>{errors.phone}</div>}
          <button
            data-testid="submit-btn"
            type="submit"
            style={{padding:'15px', fontSize:'18px', background:'#007bff', color:'white', border:'none', borderRadius:'5px', cursor:'pointer'}}
          >
            Отправить
          </button>
        </form>
      )}
    </div>
  );
};