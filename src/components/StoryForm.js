import { Formik, Field, Form, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux'
import { addStory } from '../redux/storiesSlice';
import '../css/components/story-form.css';

function StoryForm() {
  const stories = useSelector((state) => state.stories.value);
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = '(Required title!)';
    }
    if (!values.description) {
      errors.description = '(Required description!)';
    }
    if (!values.author) {
      errors.author = '(Required author!)';
    }
    if (!values.body) {
      errors.body = '(Required body!)';
    }
    return errors;
  };

  return (
      <div className='form-container'>
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
          <Form className='form'>
            <label htmlFor="title">Title: <ErrorMessage className='error-message' name="title" /></label>
            <Field id="title" name="title"/>

            <label htmlFor="author">Author: <ErrorMessage className='error-message' name="author" /></label>
            <Field id="author" name="author"/>

            <label htmlFor="description">Description: <ErrorMessage className='error-message' name="description" /></label>
            <Field id="description" name="description"/> 

            <label htmlFor="body">Body: <ErrorMessage className='error-message' name="body" /></label>
            <Field className="body" id="body" name="body" as="textarea"/>

            <button type="submit" className='submit-button'></button>
          </Form>
        </Formik>
      </div>
  );
}

export default StoryForm;
