/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Book } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function BookUpdateForm(props) {
  const {
    id,
    book,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: undefined,
    author: undefined,
    description: undefined,
    numberAvailable: undefined,
    over18: false,
    reviews: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [numberAvailable, setNumberAvailable] = React.useState(
    initialValues.numberAvailable
  );
  const [over18, setOver18] = React.useState(initialValues.over18);
  const [reviews, setReviews] = React.useState(initialValues.reviews);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...bookRecord };
    setTitle(cleanValues.title);
    setAuthor(cleanValues.author);
    setDescription(cleanValues.description);
    setNumberAvailable(cleanValues.numberAvailable);
    setOver18(cleanValues.over18);
    setReviews(cleanValues.reviews ?? []);
    setCurrentReviewsValue(undefined);
    setErrors({});
  };
  const [bookRecord, setBookRecord] = React.useState(book);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Book, id) : book;
      setBookRecord(record);
    };
    queryData();
  }, [id, book]);
  React.useEffect(resetStateValues, [bookRecord]);
  const [currentReviewsValue, setCurrentReviewsValue] =
    React.useState(undefined);
  const reviewsRef = React.createRef();
  const validations = {
    title: [{ type: "Required" }],
    author: [{ type: "Required" }],
    description: [{ type: "Required" }],
    numberAvailable: [{ type: "Required" }],
    over18: [{ type: "Required" }],
    reviews: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          author,
          description,
          numberAvailable,
          over18,
          reviews,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Book.copyOf(bookRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "BookUpdateForm")}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        defaultValue={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              author,
              description,
              numberAvailable,
              over18,
              reviews,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Author"
        isRequired={true}
        isReadOnly={false}
        defaultValue={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              author: value,
              description,
              numberAvailable,
              over18,
              reviews,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
      ></TextField>
      <TextAreaField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              author,
              description: value,
              numberAvailable,
              over18,
              reviews,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextAreaField>
      <TextField
        label="Number available"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={numberAvailable}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              numberAvailable: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              author,
              description,
              numberAvailable: value,
              over18,
              reviews,
            };
            const result = onChange(modelFields);
            value = result?.numberAvailable ?? value;
          }
          if (errors.numberAvailable?.hasError) {
            runValidationTasks("numberAvailable", value);
          }
          setNumberAvailable(value);
        }}
        onBlur={() => runValidationTasks("numberAvailable", numberAvailable)}
        errorMessage={errors.numberAvailable?.errorMessage}
        hasError={errors.numberAvailable?.hasError}
        {...getOverrideProps(overrides, "numberAvailable")}
      ></TextField>
      <SwitchField
        label="Over18"
        defaultChecked={false}
        isDisabled={false}
        isChecked={over18}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              author,
              description,
              numberAvailable,
              over18: value,
              reviews,
            };
            const result = onChange(modelFields);
            value = result?.over18 ?? value;
          }
          if (errors.over18?.hasError) {
            runValidationTasks("over18", value);
          }
          setOver18(value);
        }}
        onBlur={() => runValidationTasks("over18", over18)}
        errorMessage={errors.over18?.errorMessage}
        hasError={errors.over18?.hasError}
        {...getOverrideProps(overrides, "over18")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              author,
              description,
              numberAvailable,
              over18,
              reviews: values,
            };
            const result = onChange(modelFields);
            values = result?.reviews ?? values;
          }
          setReviews(values);
          setCurrentReviewsValue(undefined);
        }}
        currentFieldValue={currentReviewsValue}
        label={"Reviews"}
        items={reviews}
        hasError={errors.reviews?.hasError}
        setFieldValue={setCurrentReviewsValue}
        inputFieldRef={reviewsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Reviews"
          isRequired={false}
          isReadOnly={false}
          value={currentReviewsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.reviews?.hasError) {
              runValidationTasks("reviews", value);
            }
            setCurrentReviewsValue(value);
          }}
          onBlur={() => runValidationTasks("reviews", currentReviewsValue)}
          errorMessage={errors.reviews?.errorMessage}
          hasError={errors.reviews?.hasError}
          ref={reviewsRef}
          {...getOverrideProps(overrides, "reviews")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
