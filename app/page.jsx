"use client";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import CMSComponents from "./Components/CMSComponents";

// Create Puck component config
const config = {
  categories: {
    Layout: {
      components: ["HeadingBlock", "BodyBlock"],
    },
  },
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
    },
    BodyBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      },
    },
  },
};

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = (data) => {};

const overrides = {
  components: ({ children }) => {
    return <CMSComponents />;
  },
};

// Render Puck editor
export default function Editor() {
  return (
    <Puck
      overrides={overrides}
      config={config}
      data={initialData}
      onPublish={save}
    />
  );
}
