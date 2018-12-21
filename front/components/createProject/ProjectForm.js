import { graphql, compose } from 'react-apollo'
import { Formik } from 'formik';
import Yup from 'yup';

// example of validation with yup
const getSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
  });
};

const ProjectForm =  ({
    handleSubmit,
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    isSubmitting
  }) => {
(
  <div>
    <H2>New Project</H2>
    <Formik onSubmit={handleSubmit}>
      <TextInput
        id='name'
        type='name'
        label='Name'
        error={errors.name && touched.namel && errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button
        primary
        type='submit'
        disabled={
          isSubmitting ||
          !!(errors.name && touched.name) 
        }
      >
        Create Project
      </Button>
      </Formik>
      </div>
)};

export default ProjectForm;