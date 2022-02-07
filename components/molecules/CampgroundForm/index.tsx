import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Alert from "components/atoms/Alert";
import { useMutation } from "@apollo/client";
import { ADD_CAMPGROUND, UPDATE_CAMPGROUND } from "operations/mutations";
import { Form, Formik, FormikHelpers } from "formik";
import Router from "next/router";
import * as Yup from "yup";

type Props = {
  authorID: string;
  campgroundID?: string | string[] | undefined;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  isNew?: boolean;
};

type FormValuesNew = {
  authorID: string;
  name: string;
  description: string;
  price: number;
  image: string;
};
type FormValuesEdit = {
  authorID: string;
  campgroundID: string;
  name: string;
  description: string;
  price: number;
  image: string;
};
const validationSchema = Yup.object().shape({
  authorID: Yup.string(),
  campgroundID: Yup.string(),
  name: Yup.string().required("Name is a required field"),
  description: Yup.string().required("Description is a required field"),
  price: Yup.number().required("Price is a required field").min(0, "Price must be positive"),
  image: Yup.string().required("Image is a required field"),
});
let initialValues;
const CampgroundForm = ({
  authorID,
  campgroundID,
  name = "",
  description = "",
  price = 0,
  image = "",
  isNew = true,
}: Props) => {
  if (isNew)
    initialValues = {
      authorID,
      name,
      description,
      price,
      image,
    } as FormValuesNew;
  else
    initialValues = {
      authorID,
      campgroundID,
      name,
      description,
      price,
      image,
    } as FormValuesEdit;

  const [campgroundForm, { loading, error }] = useMutation(isNew ? ADD_CAMPGROUND : UPDATE_CAMPGROUND);

  const onSubmit = async (
    values: FormValuesNew | FormValuesEdit,
    helpers: FormikHelpers<FormValuesNew | FormValuesEdit>
  ) => {
    const { data } = await campgroundForm({ variables: values });

    if (data.createCampground) {
      Router.push(`/campground/${data.createCampground.id}`);
    } else if (data.updateCampground) {
      Router.push(`/campground/${data.updateCampground.id}`);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <input type="hidden" name="authorID" value={authorID} />
          {!isNew ? <input type="hidden" name="campgroundID" value={campgroundID} /> : null}
          <Input placeholder="" type="text" name="name" label="Campground name" />
          <Input placeholder="" type="number" name="price" label="Price" />
          <Input placeholder="" type="text" name="image" label="Image" />
          <Input placeholder="" isTextArea={true} name="description" label="Description" />
          <Button type="submit" isLoading={loading}>
            {isNew ? "Add Campground" : "Update Campground"}
          </Button>
        </Form>
      </Formik>
      {error ? <Alert>{error.message}</Alert> : null}
    </>
  );
};

export default CampgroundForm;
