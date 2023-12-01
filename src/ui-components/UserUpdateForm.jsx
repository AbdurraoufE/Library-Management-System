/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { User } from "../models";
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
export default function UserUpdateForm(props) {
  const {
    id,
    user,
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
    name: undefined,
    email: undefined,
    currentBooks: [],
    birthdate: undefined,
    admin: false,
    fines: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [currentBooks, setCurrentBooks] = React.useState(
    initialValues.currentBooks
  );
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [admin, setAdmin] = React.useState(initialValues.admin);
  const [fines, setFines] = React.useState(initialValues.fines);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...userRecord };
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setCurrentBooks(cleanValues.currentBooks ?? []);
    setCurrentCurrentBooksValue(undefined);
    setBirthdate(cleanValues.birthdate);
    setAdmin(cleanValues.admin);
    setFines(cleanValues.fines ?? []);
    setCurrentFinesValue(undefined);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(user);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(User, id) : user;
      setUserRecord(record);
    };
    queryData();
  }, [id, user]);
  React.useEffect(resetStateValues, [userRecord]);
  const [currentCurrentBooksValue, setCurrentCurrentBooksValue] =
    React.useState(undefined);
  const currentBooksRef = React.createRef();
  const [currentFinesValue, setCurrentFinesValue] = React.useState(undefined);
  const finesRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    email: [{ type: "Required" }],
    currentBooks: [],
    birthdate: [{ type: "Required" }],
    admin: [{ type: "Required" }],
    fines: [],
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
          name,
          email,
          currentBooks,
          birthdate,
          admin,
          fines,
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
            User.copyOf(userRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              currentBooks,
              birthdate,
              admin,
              fines,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        defaultValue={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              currentBooks,
              birthdate,
              admin,
              fines,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              currentBooks: values,
              birthdate,
              admin,
              fines,
            };
            const result = onChange(modelFields);
            values = result?.currentBooks ?? values;
          }
          setCurrentBooks(values);
          setCurrentCurrentBooksValue(undefined);
        }}
        currentFieldValue={currentCurrentBooksValue}
        label={"Current books"}
        items={currentBooks}
        hasError={errors.currentBooks?.hasError}
        setFieldValue={setCurrentCurrentBooksValue}
        inputFieldRef={currentBooksRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Current books"
          isRequired={false}
          isReadOnly={false}
          placeholder="book title"
          value={currentCurrentBooksValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.currentBooks?.hasError) {
              runValidationTasks("currentBooks", value);
            }
            setCurrentCurrentBooksValue(value);
          }}
          onBlur={() =>
            runValidationTasks("currentBooks", currentCurrentBooksValue)
          }
          errorMessage={errors.currentBooks?.errorMessage}
          hasError={errors.currentBooks?.hasError}
          ref={currentBooksRef}
          {...getOverrideProps(overrides, "currentBooks")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Birthdate"
        isRequired={true}
        isReadOnly={false}
        type="date"
        defaultValue={birthdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              currentBooks,
              birthdate: value,
              admin,
              fines,
            };
            const result = onChange(modelFields);
            value = result?.birthdate ?? value;
          }
          if (errors.birthdate?.hasError) {
            runValidationTasks("birthdate", value);
          }
          setBirthdate(value);
        }}
        onBlur={() => runValidationTasks("birthdate", birthdate)}
        errorMessage={errors.birthdate?.errorMessage}
        hasError={errors.birthdate?.hasError}
        {...getOverrideProps(overrides, "birthdate")}
      ></TextField>
      <SwitchField
        label="Admin"
        defaultChecked={false}
        isDisabled={false}
        isChecked={admin}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              email,
              currentBooks,
              birthdate,
              admin: value,
              fines,
            };
            const result = onChange(modelFields);
            value = result?.admin ?? value;
          }
          if (errors.admin?.hasError) {
            runValidationTasks("admin", value);
          }
          setAdmin(value);
        }}
        onBlur={() => runValidationTasks("admin", admin)}
        errorMessage={errors.admin?.errorMessage}
        hasError={errors.admin?.hasError}
        {...getOverrideProps(overrides, "admin")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              currentBooks,
              birthdate,
              admin,
              fines: values,
            };
            const result = onChange(modelFields);
            values = result?.fines ?? values;
          }
          setFines(values);
          setCurrentFinesValue(undefined);
        }}
        currentFieldValue={currentFinesValue}
        label={"Fines"}
        items={fines}
        hasError={errors.fines?.hasError}
        setFieldValue={setCurrentFinesValue}
        inputFieldRef={finesRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Fines"
          isRequired={false}
          isReadOnly={false}
          placeholder='{"reason": "late fee", "amount": "$5"}'
          value={currentFinesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.fines?.hasError) {
              runValidationTasks("fines", value);
            }
            setCurrentFinesValue(value);
          }}
          onBlur={() => runValidationTasks("fines", currentFinesValue)}
          errorMessage={errors.fines?.errorMessage}
          hasError={errors.fines?.hasError}
          ref={finesRef}
          {...getOverrideProps(overrides, "fines")}
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
