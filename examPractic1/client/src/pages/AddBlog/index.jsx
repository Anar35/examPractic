import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AddBlogSchema } from "../../validations/AddBlogValidation";
import style from "./index.module.css";
import { addBlog } from "../../Api/httpRequests";
import Helmet from "react-helmet";

const AddBlog = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      likeCount: "",
      commentsCount: "",
      imageURL: "",
    },
    validationSchema: AddBlogSchema,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values, actions) {
    addBlog(values);
    actions.resetForm();
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>Add Blog</title>
      </Helmet>
      <section id={style.add}>
        <form style={{ width: "300px" }} onSubmit={formik.handleSubmit}>
          <TextField
            name="title"
            id="standard-basic"
            label="Blog Title"
            variant="standard"
            type="text"
            style={{ width: "300px" }}
            value={formik.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.title && formik.touched.title ? true : false}
          />
          {formik.errors.title && formik.touched.title && (
            <p style={{ color: "red", margin: "0" }}>{formik.errors.title}</p>
          )}
          <TextField
            name="desc"
            id="standard-basic"
            label="Blog Description"
            variant="standard"
            type="text"
            style={{ width: "300px", marginTop: "25px" }}
            value={formik.desc}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.desc && formik.touched.desc ? true : false}
          />
          {formik.errors.desc && formik.touched.desc && (
            <p style={{ color: "red", margin: "0" }}>{formik.errors.desc}</p>
          )}
          <TextField
            name="likeCount"
            id="standard-basic"
            label="Like Count"
            variant="standard"
            type="number"
            style={{ width: "300px", marginTop: "25px" }}
            value={formik.likeCount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.likeCount && formik.touched.likeCount ? true : false
            }
          />
          {formik.errors.likeCount && formik.touched.likeCount && (
            <p style={{ color: "red", margin: "0" }}>
              {formik.errors.likeCount}
            </p>
          )}
          <TextField
            name="commentsCount"
            id="standard-basic"
            label="Comment Count"
            variant="standard"
            type="number"
            style={{ width: "300px", marginTop: "25px" }}
            value={formik.commentsCount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.commentsCount && formik.touched.commentsCount
                ? true
                : false
            }
          />
          {formik.errors.commentsCount && formik.touched.commentsCount && (
            <p style={{ color: "red", margin: "0" }}>
              {formik.errors.commentsCount}
            </p>
          )}
          <TextField
            name="imageURL"
            id="standard-basic"
            label="Image URL"
            variant="standard"
            type="text"
            style={{ width: "300px", marginTop: "25px" }}
            value={formik.imageURL}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.imageURL && formik.touched.imageURL ? true : false
            }
          />
          {formik.errors.imageURL && formik.touched.imageURL && (
            <p style={{ color: "red", margin: "0" }}>
              {formik.errors.imageURL}
            </p>
          )}
          <Button
            style={{ width: "200px", display: "block", margin: "25px auto" }}
            color="success"
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        </form>
      </section>
    </>
  );
};

export default AddBlog;
