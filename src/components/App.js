import { Formik, Field, Form } from 'formik';

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          title: '',
          description: '',
          author:'',
          body: ''
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="title">Title: </label>
          <Field id="title" name="title"/><br />

          <label htmlFor="description">Description: </label>
          <Field id="description" name="description"/> <br />

          <label htmlFor="author">Author: </label>
          <Field id="author" name="author"/><br />

          <label htmlFor="body">Body: </label>
          <Field id="body" name="body" as="textarea"/><br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
