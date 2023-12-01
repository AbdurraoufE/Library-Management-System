/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Book } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookUpdateFormInputValues = {
    title?: string;
    author?: string;
    description?: string;
    numberAvailable?: number;
    over18?: boolean;
    reviews?: string[];
};
export declare type BookUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    numberAvailable?: ValidationFunction<number>;
    over18?: ValidationFunction<boolean>;
    reviews?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookUpdateFormOverridesProps = {
    BookUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    author?: FormProps<TextFieldProps>;
    description?: FormProps<TextAreaFieldProps>;
    numberAvailable?: FormProps<TextFieldProps>;
    over18?: FormProps<SwitchFieldProps>;
    reviews?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    book?: Book;
    onSubmit?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onSuccess?: (fields: BookUpdateFormInputValues) => void;
    onError?: (fields: BookUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onValidate?: BookUpdateFormValidationValues;
}>;
export default function BookUpdateForm(props: BookUpdateFormProps): React.ReactElement;
