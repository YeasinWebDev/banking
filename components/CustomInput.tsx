import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

function CustomInput({form,name,label,placeholder,type}: FormField) {
  return (
    <div>
      {" "}
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-lebel">{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  {...field}
                  type={name === "password" ? "password" : type}
                />
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    </div>
  );
}
type FormField = {
    form: any;
    name: string;
    label: string;
    placeholder: string;
    type?:string;
}
export default CustomInput;
