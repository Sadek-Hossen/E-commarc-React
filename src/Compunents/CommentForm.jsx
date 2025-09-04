import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup create
const schema = yup.object().shape({
  comment: yup.string().required("Comment must add"),
  firstName: yup.string().required("First Name must add ").min(2, "Too short"),
  lastName: yup.string().required("Last Name must add ").min(2, "Too short"),
  website: yup.string().url("have to werite valid url").required("Website must add"),
});

export default function CommentForm() {
  //  React Hook Form setup
 const { register, handleSubmit, formState: { errors }, reset } = useForm({
  resolver: yupResolver(schema),
});

  // Form submit
 const onSubmit = (data) => {
  console.log("Form Data:", data);
  alert("Comment submitted!");
  reset();
};

  return (
    <div className='w-[70%] mx-auto mt-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("comment")}
          className='w-full border rounded-2xl h-[200px] p-6 outline-none border-gray-600'
          placeholder='Your Comment'
        />
        {errors.comment && <p className="text-red-500 mt-1">{errors.comment.message}</p>}

        <div className='flex justify-around mt-4 gap-4'>
          <div className="w-full">
            <input
              {...register("firstName")}
              className='border w-full outline-none p-3 rounded-2xl'
              placeholder='First Name'
            />
            {errors.firstName && <p className="text-red-500 mt-1">{errors.firstName.message}</p>}
          </div>

          <div className="w-full">
            <input
              {...register("lastName")}
              className='border w-full outline-none p-3 rounded-2xl'
              placeholder='Last Name'
            />
            {errors.lastName && <p className="text-red-500 mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        <input
          {...register("website")}
          className='border w-full mt-4 outline-none p-3 rounded-2xl'
          placeholder='Website'
        />
        {errors.website && <p className="text-red-500 mt-1">{errors.website.message}</p>}

        <button
          type='submit'
          className="py-3 mt-5 px-8 shadow-2xl shadow-blue-900 hover:shadow-blue-950 text-white text-2xl hover:opacity-85 transition-all duration-300 bg-green-700 rounded-2xl"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}
