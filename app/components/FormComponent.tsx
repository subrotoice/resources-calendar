import React from "react";

interface FormField {
  label: string;
  type: string;
  name: string;
}

const formFields: { [key: string]: FormField[] } = {
  person: [
    { label: "Name", type: "text", name: "name" },
    { label: "Age", type: "number", name: "age" },
    { label: "Country", type: "text", name: "country" },
  ],
  product: [
    { label: "Name", type: "text", name: "name" },
    { label: "Price", type: "number", name: "price" },
    { label: "Description", type: "text", name: "description" },
    { label: "Picture", type: "file", name: "picture" },
  ],
  customer: [
    { label: "Name", type: "text", name: "name" },
    { label: "Payment Due", type: "number", name: "paymentDue" },
    { label: "Picture", type: "file", name: "picture" },
  ],
};

const FormComponent: React.FC<{ entityType: keyof typeof formFields }> = ({
  entityType,
}) => (
  <form>
    {formFields[entityType].map((field) => (
      <div key={field.name}>
        <label>{field.label}</label>
        <input
          className="border rounded-md border-gray-500 mb-2 ml-2"
          type={field.type}
          name={field.name}
        />
      </div>
    ))}
    <button type="submit">Submit</button>
  </form>
);

export default FormComponent;
