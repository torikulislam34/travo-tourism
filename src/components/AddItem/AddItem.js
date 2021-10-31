import React from 'react';
import './AddItem.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);

        axios.post('https://evil-mansion-50647.herokuapp.com/services', data)
        .then(res => {
            // console.log(res);
            if(res.data.insertedId){
                alert('add to successfully');
                reset();
            }
        })
    }
    
    return (
        <div className='add-tour'>
            <h2> Add Tour Place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='add-input' {...register("title", { required: true, maxLength: 20 })} placeholder="name"/>
                <textarea className='add-input' {...register("dis" )} placeholder="disciption"/>
                <input className='add-input' type="number" {...register("price")} placeholder="price"/>
                <input className='add-input' {...register("img" )} placeholder="img-url"/>
                <input className='button-reguler' type="submit" />
            </form>
        </div>
    );
};

export default AddItem;