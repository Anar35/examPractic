import * as yup from "yup";

export const AddBlogSchema = yup.object().shape({
  title: yup.string().min(10).required(),
  desc: yup.string().min(15).required(),
  likeCount: yup.number().positive().integer().required(),
  commentsCount: yup.number().positive().integer().required(),
  imageURL: yup.string().url().required(),
});
