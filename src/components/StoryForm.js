import { Formik, Field, Form, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux'
import { addStory } from '../redux/storiesSlice';

function StoryForm() {
  const stories = useSelector((state) => state.stories.value);
  const dispatch = useDispatch();

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
        enableReinitialize
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
          <label htmlFor="title">Title:</label><br />
          <Field id="title" name="title"/>
          <ErrorMessage name="title" /><br />

          <label htmlFor="description">Description:</label><br />
          <Field id="description" name="description"/> 
          <ErrorMessage name="description" /><br />

          <label htmlFor="author">Author:</label><br />
          <Field id="author" name="author"/>
          <ErrorMessage name="author" /><br />

          <label htmlFor="body">Body:</label><br />
          <Field id="body" name="body" as="textarea"/>
          <ErrorMessage name="body" /><br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
  );
}

export default StoryForm;
