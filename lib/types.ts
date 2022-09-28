import { Dispatch } from "react";

export declare type Paginated<T> = {
  count: number;
  previous: string | null;
  next: string | null;
  results: T[];
};

export declare type PaginationParams = {
  limit: number;
  offset: number;
};

export declare type Errors<T> = Partial<Record<keyof T, string>>;

export declare type FormState<T> = {
  formData: T;
  errors: Errors<T>;
};

export declare type UpdateFormDataAction<T> = {
  type: "SET_FORM_DATA";
  formData: T;
};

export declare type UpdateErrorsAction<T> = {
  type: "SET_ERRORS";
  errors: Errors<T>;
};

export declare type FormAction<T> =
  | UpdateFormDataAction<T>
  | UpdateErrorsAction<T>;

export function formReducer<T>(state: FormState<T>, action: FormAction<T>) {
  switch (action.type) {
    case "SET_FORM_DATA":
      return { ...state, formData: action.formData };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
  }
}

export function handleFormChange<T>(
  state: FormState<T>,
  dispatch: Dispatch<FormAction<T>>
) {
  return (event: any) => {
    const { name, value } = event.target;
    dispatch({
      type: "SET_FORM_DATA",
      formData: { ...state.formData, [name]: value },
    });
  };
}
