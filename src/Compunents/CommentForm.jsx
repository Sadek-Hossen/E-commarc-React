import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup schema
const schema = yup.object({
  comment: yup.string().required("Comment must add"),
  firstName: yup
    .string()
    .required("First Name must add")
    .min(2, "First Name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last Name must add")
    .min(2, "Last Name must be at least 2 characters"),
  website: yup
    .string()
    .url("Must be a valid URL")
    .required("Website must add"),
  posts: yup
    .number()
    .typeError("Posts must be a number")
    .required("Posts required")
    .positive(),
  since: yup.string().required("Since field required"),
  bio: yup.string().required("Bio is required"),
  avatar: yup.string().url("Must be a valid Image URL").required("Avatar required"),
});

export default function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // live preview data
  const data = watch();

  const onSubmit = (formData) => {
    console.log("Form Data:", formData);
    alert("Profile Submitted!");
    reset();
  };

  return (
    <div className="w-[70%] mx-auto mt-10">
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Avatar (Image URL)</label>
          <input
            {...register("avatar")}
            className="border w-full outline-none p-3 rounded-2xl"
            placeholder="Enter image URL"
          />
          {errors.avatar && <p className="text-red-500">{errors.avatar.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">First Name</label>
          <input
            {...register("firstName")}
            className="border w-full outline-none p-3 rounded-2xl"
            placeholder="First Name"
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Last Name</label>
          <input
            {...register("lastName")}
            className="border w-full outline-none p-3 rounded-2xl"
            placeholder="Last Name"
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Website</label>
          <input
            {...register("website")}
            className="border w-full outline-none p-3 rounded-2xl"
            placeholder="Website"
          />
          {errors.website && <p className="text-red-500">{errors.website.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Posts</label>
          <input
            {...register("posts")}
            type="number"
            className="border w-full outline-none p-3 rounded-2xl"
            placeholder="Number of posts"
          />
          {errors.posts && <p className="text-red-500">{errors.posts.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Since</label>
          <input
            {...register("since")}
            className="border w-full outline-none p-3 rounded-2xl"
            placeholder="Since Year"
          />
          {errors.since && <p className="text-red-500">{errors.since.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea
            {...register("bio")}
            className="w-full border rounded-2xl h-[120px] p-4 outline-none border-gray-600"
            placeholder="Write something about yourself"
          />
          {errors.bio && <p className="text-red-500">{errors.bio.message}</p>}
        </div>

        <button
          type="submit"
          className="py-3 mt-5 px-8 shadow-lg text-white text-xl hover:opacity-85 transition-all duration-300 bg-green-700 rounded-2xl"
        >
          Submit
        </button>
      </form>

      {/* Preview */}
      {data.firstName && (
        <div className="mt-10 border p-5 rounded-lg shadow-md flex gap-4 items-start bg-gray-50">
          <img
            src={data.avatar}
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="font-bold text-lg">
              {data.firstName} {data.lastName}
            </h2>
            <p className="text-gray-600">
              {data.posts} posts • Since {data.since}
            </p>
            <p className="mt-2 text-gray-800">{data.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}
