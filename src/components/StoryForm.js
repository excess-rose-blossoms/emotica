import { Formik, Field, Form, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux'
import { addStory } from '../redux/storiesSlice';

import { useQuery, gql } from "@apollo/client";

const STORYQUERIES = gql`
    query GetStories {
        stories {
            id
            authorIDs
            title
            description
            chapters {
                chapterNumber
                title
                body
                datePublished
            }
        }
    }
`;

function StoryForm() {
  const stories = useSelector((state) => state.stories.value);
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(STORYQUERIES);
  console.log(data);
  console.log(loading);
  console.log(error);

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Required title!';
    }
    if (!values.description) {
      errors.description = 'Required description!';
    }
    if (!values.author) {
      errors.author = 'Required author!';
    }
    if (!values.body) {
      errors.body = 'Required body!';
    }
    return errors;
  };

  return (
      <Formik
        initialValues={{
          title: '',
          description: '',
          author:'',
          body: ''
        }}
        onSubmit={(values, actions) => {
          dispatch(addStory(values));
          actions.resetForm({
            values: {
              title: '',
              description: '',
              author:'',
              body: ''
            }
          });
        }}
        validate={validate}
      >
        <Form>
          <label htmlFor="title">Title: </label>
          <Field id="title" name="title"/>
          <ErrorMessage name="title" /><br />

          <label htmlFor="description">Description: </label>
          <Field id="description" name="description"/> 
          <ErrorMessage name="description" /><br />

          <label htmlFor="author">Author: </label>
          <Field id="author" name="author"/>
          <ErrorMessage name="author" /><br />

          <label htmlFor="body">Body: </label>
          <Field id="body" name="body" as="textarea"/>
          <ErrorMessage name="body" /><br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
  );
}

export default StoryForm;
