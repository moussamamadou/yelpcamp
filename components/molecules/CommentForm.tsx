import { Formik, Form, FormikHelpers } from "formik";
import { ADD_COMMENT, UPDATE_COMMENT } from "operations/mutations";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Router from "next/router";
import Alert from "components/Alert";

type Props = {
  commentID?: string | string[] | undefined;
  authorID?: string;
  campgroundID?: string;
  description?: string;
  isNew?: boolean;
};

type FormValuesNew = {
  authorID: string;
  campgroundID: string;
  description: string;
};
type FormValuesEdit = {
  commentID: string;
  description: string;
};

const validationSchema = Yup.object().shape({
  commentID: Yup.string(),
  authorID: Yup.string(),
  campgroundID: Yup.string(),
  description: Yup.string().required(),
});

const CommentForm = ({ commentID, authorID, campgroundID, description = "", isNew = true }: Props) => {
  let initialValues;
  if (isNew) {
    initialValues = { authorID, campgroundID, description: "" } as FormValuesNew;
  } else {
    initialValues = { commentID, description } as FormValuesEdit;
  }

  const [commentForm, { loading, error }] = useMutation(isNew ? ADD_COMMENT : UPDATE_COMMENT);

  const onSubmit = async (
    values: FormValuesNew | FormValuesEdit,
    helpers: FormikHelpers<FormValuesNew | FormValuesEdit>
  ) => {
    const { data } = await commentForm({ variables: values });

    if (data.createComment || data.updateComment) {
      Router.push(`/campground/${campgroundID}`);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          {isNew ? (
            <>
              <input type="hidden" name="authorID" value={authorID} />
              <input type="hidden" name="campgroundID" value={campgroundID} />
            </>
          ) : (
            <input type="hidden" name="commentID" value={commentID} />
          )}
          <Input placeholder="Comment" isTextArea={true} label="Comment" name="description" />
          <Button type="submit" isLoading={loading}>
            {isNew ? "Add comment" : "Update comment"}
          </Button>
        </Form>
      </Formik>
      {error ? <Alert>{error.message}</Alert> : null}
    </>
  );
};

export default CommentForm;
