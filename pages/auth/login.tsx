import type { NextPage } from "next";
import { FormEventHandler, useReducer } from "react";
import AuthCanvas from "../../components/AuthCanvas";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import TextField from "../../components/inputs/TextField";
import { FiLogIn } from "react-icons/fi";
import { formReducer, FormState, handleFormChange } from "../../lib/types";

type Form = { username: string; password: string };

const initialState: FormState<Form> = {
  formData: { username: "", password: "" },
  errors: {},
};

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(formReducer<Form>, initialState);
  const handleChange = handleFormChange(state, dispatch);

  console.log(state.formData);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    // const {} = event.target;
  };

  return (
    <AuthCanvas>
      <div className="flex flex-col items-center justify-center">
        <span className="text-3xl font-bold mb-12">Log in to DEX</span>
        <form
          action="/api/auth/login"
          method="POST"
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-3"
        >
          <TextField name="username" placeholder="Username" />
          <TextField name="password" placeholder="Password" type="password" />
          <PrimaryButton className="w-full flex items-center font-medium">
            <FiLogIn className="ml-2 text-xl" />
            <span className="flex-1">Authenticate</span>
          </PrimaryButton>
        </form>
      </div>
    </AuthCanvas>
  );
};

export default Home;
